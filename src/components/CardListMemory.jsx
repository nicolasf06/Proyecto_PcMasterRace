import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet} from 'react-native';
import MemoryData from "../data/memory.json"
import { useLocalSearchParams } from 'expo-router';
import CardEspectMemory from './CardEspectMemory';
const CardListMemory = () => {
    const [componente,setComponente]=useState([]);
    useEffect(()=>{
        setComponente(MemoryData);
    },[]);
    const params = useLocalSearchParams();
    const { cpuData ,motherData} = params; //
    

  return (
    <SafeAreaView style={styles.area}>
        <FlatList style={styles.card}
        data={componente}
        keyExtractor={(item)=>item.name.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <CardEspectMemory data={item} 
          cpuData={cpuData}
          motherData={motherData} />
        )}/>
    </SafeAreaView>
  )
}


export default CardListMemory


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