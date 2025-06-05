import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Acercade = () => {
  return (
    <View>
        <Text style={styles.conteiner}>Creado Por Nicolas Fernando Moya</Text>
    </View>
  )
}

export default Acercade

const styles=StyleSheet.create({
    conteiner:{
        flex:1,
        textAlign:"center",
        color:"#fff",
        fontSize:16,
    }
})