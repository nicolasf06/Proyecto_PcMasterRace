import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet} from 'react-native';
import MotherData from "../data/motherboard.json"
import CardEspectMother from './CardEspectMother';
import { useLocalSearchParams } from 'expo-router';
const CardListMother = () => {
    const [componente,setComponente]=useState([]);
    useEffect(()=>{
        setComponente(MotherData);
    },[]);
    const params = useLocalSearchParams();
    const { cpuData ,memoryData} = params; //
    

  return (
    <SafeAreaView style={styles.area}>
        <FlatList style={styles.card}
        data={componente}
        keyExtractor={(item)=>item.name.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <CardEspectMother 
          data={item} 
          cpuData={cpuData} 
          memoryData={memoryData}/>
        )}/>
    </SafeAreaView>
  )
}


export default CardListMother


const styles = StyleSheet.create({
    area:{
        flex:1,
    },
  card: {
    flex: 1,
    backgroundColor: '#171617',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  item: {
    fontSize: 16,
  },
  text:{
    color:"#fff",
    fontSize:16,
    textAlign:"center"
  }
});