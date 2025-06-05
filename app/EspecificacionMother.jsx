import { useLocalSearchParams,useRouter } from 'expo-router'
import React from 'react' // Asegúrate de importar React
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'; // <-- Importa SafeAreaView
import { useCarrito } from '../src/context/CarritoContext';

const EspecificacionMother = () => {
    const {item,cpuData,memoryData} =useLocalSearchParams();
    const mother=JSON.parse(item);
    const router = useRouter();
    
    const handlePress=(()=>{
        router.replace({
            pathname:"/ArmarPc",
            params:{ motherData: JSON.stringify(mother), 
                     cpuData: cpuData || undefined ,
                     memoryData: memoryData || undefined
            }
        })
    })

    const { agregarItem } = useCarrito();

    const hadleAgregarCarrito=()=>{
        agregarItem(mother)
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.card}>
                {/* Título de la Placa Madre */}
                <Text style={styles.title}>Placa Madre: {mother.name}</Text> {/* Cambiado "Titulo" a "Placa Madre" */}
                
                {/* Detalles de la Placa Madre */}
                <View style={styles.detailsGroup}> {/* Contenedor para agrupar los textos */}
                    <Text style={styles.text}>Precio: ${mother.price}</Text>
                    <Text style={styles.text}>Socket: {mother.socket}</Text>
                    <Text style={styles.text}>Disposición Física: {mother.form_factor}</Text>
                    <Text style={styles.text}>Memoria Máxima: {mother.max_memory} GB</Text> {/* Añadida unidad */}
                    <Text style={styles.text}>Slots de Memoria: {mother.memory_slots}</Text>
                    <Text style={styles.text}>Color de la Placa: {mother.color || 'No especificado'}</Text>
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

export default EspecificacionMother;

// Estilo base para compartir propiedades comunes entre botones
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
        backgroundColor: '#1a1a1a', // Fondo muy oscuro para toda la pantalla
    },
    card: {
        flex: 1,
        backgroundColor: '#2a2a2a', // Fondo oscuro para la tarjeta principal
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
        color: '#00b5cc', // Cian brillante para el título
        marginBottom: 20, 
        textAlign: 'center', 
    },
    detailsGroup: { // Estilo para agrupar los textos de especificaciones
        width: '100%', 
        marginBottom: 30, 
        alignSelf: 'flex-start', 
    },
    text: {
        fontSize: 16,
        color: '#e0e0e0', // Gris muy claro para el texto general
        marginBottom: 8, 
        lineHeight: 22, 
        textAlign: 'left', 
    },
    // Estilos de los botones
    backButton: {
        ...buttonBaseShared, 
        backgroundColor: '#6c757d', // Gris oscuro para Volver
        borderRadius: 30, 
    },
    selectButton: {
        ...buttonBaseShared, 
        backgroundColor: '#007bff', // Azul para Seleccionar
        marginTop: 10, 
        borderRadius: 30, 
    },
    addToCartButton: { 
        ...buttonBaseShared, 
        backgroundColor: '#28a745', // Verde para Agregar al Carrito
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