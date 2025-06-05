import { Stack } from "expo-router";
import { CarritoProvider } from "../src/context/CarritoContext";
//ponesmos que queresmos ver
export default function RootLayout() {
  return (
    <CarritoProvider>
       <Stack screenOptions={{
          headerStyle: { backgroundColor: "#222" },
          headerTintColor: "#fff",
          drawerStyle: { backgroundColor: "#333" },
          drawerActiveTintColor: "#00b5cc",
          drawerInactiveTintColor: "#ccc",
          headerShown: false 
        }}>
      <Stack.Screen name="(main)"/>
    </Stack>


    </CarritoProvider>

  )
}
