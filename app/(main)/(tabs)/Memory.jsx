import { StyleSheet, View } from "react-native";

import CardListMemory from "../../../src/components/CardListMemory";



export default function Memory(){
    return(
        <View style={styles.container}>
            <CardListMemory/>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 10,
  }})