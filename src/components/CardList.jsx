import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet} from 'react-native';
import cpuData from "../data/cpu.json"
import CardEspect from './CardEspect';
import { useLocalSearchParams } from 'expo-router';
const CardList = ({returnTo}) => {
    const [componente,setComponente]=useState([]);
    useEffect(()=>{
        setComponente(cpuData);
    },[])
    const params = useLocalSearchParams();
    const {memoryData,motherData} = params; //
  return (
    <SafeAreaView style={styles.area}>
        <FlatList style={styles.card}
        data={componente}
        keyExtractor={(item)=>item.name.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <CardEspect 
          data={item}
          motherData={motherData}
          memoryData={memoryData}
          />
        )}/>
    </SafeAreaView>
  )
}


export default CardList


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