import { Tabs } from "expo-router";


export default function TabLayout(){
    return(
        <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: "#222"},
      tabBarActiveTintColor: "#00b5cc",
      tabBarInactiveTintColor: "#ccc",
    }}>
        <Tabs.Screen name="index"
        options={{
          title: 'Novedades',
        }}/>
        <Tabs.Screen name="Cpu"         options={{
          title: 'Procesadores',
        }}/>
        <Tabs.Screen name="Mother"
                options={{
          title: 'Placa Madre',
        }}/>
        <Tabs.Screen name="Memory"
                options={{
          title: 'Ram',
        }}/>
        </Tabs>
    )
}