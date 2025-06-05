
import {Drawer} from 'expo-router/drawer';
//este es el del tap lo que aparece en la izquierda
export default function MainLayout(){
    return(
        <Drawer >
            <Drawer.Screen name="(tabs)"
        options={{
          drawerLabel: "Inicio",
          title: "Inicio"
        }}/>
            <Drawer.Screen name="ArmarPc"
                    options={{
                    title: 'Armar Una Computadora',
        }}/>
            <Drawer.Screen name="Carrito"/>
            <Drawer.Screen name="Acerca"/>

        </Drawer>
    )
}