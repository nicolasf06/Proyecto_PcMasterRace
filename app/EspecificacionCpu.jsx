import { useLocalSearchParams,useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'; // <-- Importa SafeAreaView
import { useCarrito } from '../src/context/CarritoContext';

const EspecificacionCpu = () => {
    const {item ,motherData,memoryData} =useLocalSearchParams();
    const cpu=JSON.parse(item);
    const router = useRouter();
    const { agregarItem } = useCarrito();

    const handlePress=()=>{
        router.replace({
            pathname:"/ArmarPc",
            params:{cpuData:JSON.stringify(cpu),
                    motherData: motherData || undefined,
                    memoryData: memoryData || undefined
            }
        })
    }

    const hadleAgregarCarrito=()=>{
        agregarItem(cpu)
    }

    return (
        <SafeAreaView style={styles.safeArea}> {/* Usa SafeAreaView aquí */}
            <View style={styles.card}>
                {/* Título de la CPU */}
                <Text style={styles.title}>CPU: {cpu.name}</Text> {/* Cambiado "Titulo" a "CPU" */}
                
                {/* Detalles de la CPU */}
                <View style={styles.detailsGroup}> {/* Nuevo contenedor para agrupar los textos */}
                    <Text style={styles.text}>Precio: ${cpu.price}</Text>
                    <Text style={styles.text}>Frecuencia de Impulso: {cpu.boost_clock} GHz</Text> {/* Añadido unidad */}
                    {cpu.core_count && <Text style={styles.text}>Núcleos: {cpu.core_count}</Text>} {/* Condicional si existe */}
                    <Text style={styles.text}>Límite de Consumo (TDP): {cpu.tdp} W</Text>
                    <Text style={styles.text}>Gráficos Integrados: {cpu.graphics || 'No Tiene'}</Text>
                    <Text style={styles.text}>
                        Multihilamiento Simultáneo (SMT): {cpu.smt ? 'Sí' : 'No'}
                    </Text>
                </View>

                {/* Botones */}
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>  
                    <Text style={styles.buttonText}>← Volver</Text> {/* Estilo de texto unificado */}
                </TouchableOpacity>

                <TouchableOpacity style={styles.selectButton} onPress={handlePress}>  
                    <Text style={styles.buttonText}>Seleccionar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addToCartButton} onPress={hadleAgregarCarrito}>   {/* Renombrado para claridad */}
                    <Text style={styles.buttonText}>Agregar Al Carrito</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EspecificacionCpu

const buttonBaseShared = {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 25,
    maxWidth: '70%',
    alignSelf: 'center',
    // ¡Añadir estas dos propiedades aquí!
    justifyContent: 'center', // Centra el contenido (el texto) verticalmente
    alignItems: 'center',     // Centra el contenido (el texto) horizontalmente
    
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
        // textAlign: 'center', // Este ya está, pero justifyContent/alignItems en el padre son cruciales
    },
});