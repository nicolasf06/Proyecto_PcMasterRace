import { StyleSheet, View } from "react-native";
import ListaCarrito from "../../src/components/ListaCarrito";




export default function Carrito(){
    return(
        <View style={styles.container}>
            <ListaCarrito/>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 10,
  }})