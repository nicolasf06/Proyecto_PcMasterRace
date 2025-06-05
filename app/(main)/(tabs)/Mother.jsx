import { StyleSheet, View } from "react-native";

import CardListMother from "../../../src/components/CardListMother";



export default function Mother(){
    return(
        <View style={styles.container}>
            <CardListMother/>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 10,
  }})