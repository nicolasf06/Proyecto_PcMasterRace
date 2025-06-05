import { StyleSheet, View } from "react-native";
import CardList from "../../../src/components/CardList";



export default function Cpu(){
    return(
        <View style={styles.container}>
            <CardList />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 10,
  }})