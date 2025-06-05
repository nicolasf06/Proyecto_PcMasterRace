import { useLocalSearchParams,useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { useCarrito } from '../src/context/CarritoContext';

const EspecificacionMemory = () => {
    const {item,cpuData,motherData} =useLocalSearchParams();
    const memory=JSON.parse(item);
    const router = useRouter();
    
    const handlePress=(()=>{
        router.replace({
            pathname:"/ArmarPc",
            params:{memoryData: JSON.stringify(memory) ,
                    motherData: motherData || undefined ,
                    cpuData: cpuData || undefined
            }
        })
    })

    const { agregarItem } = useCarrito();

    const hadleAgregarCarrito=()=>{
        agregarItem(memory)
    }


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.card}>

                <Text style={styles.title}>Memoria RAM: {memory.name}</Text> 
                

                <View style={styles.detailsGroup}> 
                    <Text style={styles.text}>Precio: ${memory.price}</Text>
                    <Text style={styles.text}>Módulos: {memory.modules}</Text>
                    <Text style={styles.text}>Velocidad: {memory.speed} MHz</Text> 
                    <Text style={styles.text}>Latencia: {memory.cas_latency ? `CL${memory.cas_latency}` : 'N/A'}</Text> 
                    <Text style={styles.text}>Color: {memory.color || 'No especificado'}</Text>
                </View>

                {/* Botones */}
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>  
                    <Text style={styles.buttonText}>← Volver</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.selectButton} onPress={handlePress}>  
                    <Text style={styles.buttonText}>Seleccionar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addToCartButton} onPress={hadleAgregarCarrito}>  
                    <Text style={styles.buttonText}>Agregar Al Carrito</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EspecificacionMemory;


const buttonBaseShared = { 
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 25,
    maxWidth: '70%', 
    alignSelf: 'center',
    justifyContent: 'center', 
    alignItems: 'center',     
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#1a1a1a', 
    },
    card: {
        flex: 1,
        backgroundColor: '#2a2a2a', 
        padding: 20, 
        margin: 20, 
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.50, 
        shadowRadius: 4.65,
        elevation: 8,
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: '#00b5cc', 
        marginBottom: 20, 
        textAlign: 'center', 
    },
    detailsGroup: { 
        width: '100%', 
        marginBottom: 30, 
        alignSelf: 'flex-start', 
    },
    text: {
        fontSize: 16,
        color: '#e0e0e0', 
        marginBottom: 8, 
        lineHeight: 22, 
        textAlign: 'left', 
    },
    // Estilos de los botones
    backButton: {
        ...buttonBaseShared, 
        backgroundColor: '#6c757d', 
        borderRadius: 30, 
    },
    selectButton: {
        ...buttonBaseShared, 
        backgroundColor: '#007bff', 
        marginTop: 10, 
        borderRadius: 30, 
    },
    addToCartButton: { 
        ...buttonBaseShared, 
        backgroundColor: '#28a745', 
        marginTop: 10,
        borderRadius: 30, 
    },
    buttonText: { 
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});