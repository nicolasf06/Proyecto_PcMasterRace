import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useCarrito } from "../../src/context/CarritoContext";
import cpuImage from '../../src/data/img/generico/cpu.png';
import motherImage from '../../src/data/img/generico/mother.png';
import ramImage from '../../src/data/img/generico/ram.png';


export default function ArmarPc(){
    const[selectedCpu ,setSelectedCpu]=useState(null);
    const[selectedMother,setSelectedMother]=useState(null);
    const[selectedMemory,setSelectedMemory]=useState(null);
    const router=useRouter();
    const params=useLocalSearchParams();
    
    const { agregarItem, items } = useCarrito(); 
    
    useEffect(()=>{
      if(params.cpuData){
            try {
                setSelectedCpu(JSON.parse(params.cpuData));
            } catch (error) {
                console.error("Error parsing cpuData in ArmarPc:", error);
                setSelectedCpu(null);
            }
        }
        if(params.motherData){
            try {
                setSelectedMother(JSON.parse(params.motherData));
            } catch (error) {
                console.error("Error parsing motherBoardData in ArmarPc:", error);
                setSelectedMother(null);
            }
        }
        if(params.memoryData){
            try {
                setSelectedMemory(JSON.parse(params.memoryData));
            } catch (error) {
                console.error("Error parsing motherBoardData in ArmarPc:", error);
                setSelectedMemory(null);
            }
        }
    },[])
    
  const goToCpuSelection = () => {
        router.push({
            pathname: '/(main)/Cpu',
            params: {
                memoryData: selectedMemory ? JSON.stringify(selectedMemory) : undefined,
                cpuData: selectedCpu ? JSON.stringify(selectedCpu) : undefined,
                motherData: selectedMother ? JSON.stringify(selectedMother) : undefined, 
            },
        });
    };
    
    const goToMotherBoardSelection = () => {
        router.push({
            pathname: '/(main)/Mother',
            params: {
                memoryData: selectedMemory ? JSON.stringify(selectedMemory) : undefined,
                cpuData: selectedCpu ? JSON.stringify(selectedCpu) : undefined,
                motherData: selectedMother ? JSON.stringify(selectedMother) : undefined, 
            },
        });
    };
    
    const goToMemorySelection = () => {
        router.push({
            pathname: '/(main)/Memory',
            params: {
                memoryData: selectedMemory ? JSON.stringify(selectedMemory) : undefined,
                cpuData: selectedCpu ? JSON.stringify(selectedCpu) : undefined,
                motherData: selectedMother ? JSON.stringify(selectedMother) : undefined, 
            },
        });
    };


    const eliminarTodo=()=>{
        setSelectedCpu(null);
        setSelectedMother(null);
        setSelectedMemory(null);
    }
    
    const agregarTodo=()=>{

        if(selectedCpu){
            agregarItem(selectedCpu);
        }
        if(selectedMother){
            agregarItem(selectedMother);
        }
        if(selectedMemory){
            agregarItem(selectedMemory);
        }
        
        // Pequeño delay para ver el estado después
        setTimeout(() => {
            console.log("Items después:", items);
        }, 100);
    }
    
    return(
        <SafeAreaView style={styles.container} >

            <TouchableOpacity style={styles.cuadro} onPress={goToCpuSelection}>

                <View style={styles.textWrapper}>
                    <Text style={styles.textoCuadro}>Seleccione CPU</Text>
                    <Text style={styles.texto2}>{selectedCpu ? selectedCpu.name : "No hay CPU seleccionado"}</Text>
                </View>

                <Image 
                    source={selectedCpu ? cpuImage : null}
                    style={selectedCpu ? styles.selectedImage : styles.placeholderImage}
                    resizeMode="contain" 
                />
            </TouchableOpacity>


            <TouchableOpacity style={styles.cuadro} onPress={goToMotherBoardSelection}>

                <View style={styles.textWrapper}>
                    <Text style={styles.textoCuadro}>Seleccione Placa Madre</Text>
                    <Text style={styles.texto2}>{selectedMother ? selectedMother.name : "No hay Placa Madre seleccionada"}</Text>
                </View>

                <Image 
                    source={selectedMother ? motherImage : null}
                    style={selectedMother ? styles.selectedImage : styles.placeholderImage}
                    resizeMode="contain" 
                />
            </TouchableOpacity>


            <TouchableOpacity style={styles.cuadro} onPress={goToMemorySelection}>

                <View style={styles.textWrapper}>
                    <Text style={styles.textoCuadro}>Seleccione Memoria RAM</Text>
                    <Text style={styles.texto2}>{selectedMemory ? selectedMemory.name : "No hay RAM seleccionada"}</Text>
                </View>

                <Image 
                    source={selectedMemory ? ramImage : null}
                    style={selectedMemory ? styles.selectedImage : styles.placeholderImage}
                    resizeMode="contain" 
                />
            </TouchableOpacity>


            <TouchableOpacity style={styles.clearButton} onPress={eliminarTodo}>
                <View>
                    <Text style={styles.clearButtonText}>Limpiar Selección</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearButtonCarrito} onPress={agregarTodo}>
                <View>
                    <Text style={styles.clearButtonText}>Agregar Todo Al Carrito</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#948f8f",
        paddingTop: 20,
        alignItems: 'center', 
    },
    cuadro:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '90%', 
        minHeight: 100, 
        marginBottom: 15, 
        paddingVertical: 10, 
        paddingHorizontal: 15, 
        backgroundColor: '#333',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textWrapper: {
        flex: 1, 
        marginRight: 15, 
        justifyContent: 'center',
 
    },
    textoCuadro:{
        fontSize:16, 
        color:"#fff",
        fontWeight: 'bold', 
        marginBottom: 4, 
        textAlign: 'left',
    },
    texto2:{
        fontSize:14, 
        color:"#ccc",
        textAlign: 'left',
    },
    selectedImage: {
        width: 80,  
        height: 80,

    },
    placeholderImage: {
        width: 80, 
        height: 80,
        backgroundColor: '#555', 
        borderRadius: 5, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearButton: {
        marginTop: 20, 
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: '#dc3545', 
        borderRadius: 8,
        alignSelf: 'center', 
    },
    clearButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    clearButtonCarrito: {
        marginTop: 10, 
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: '#36ba41', 
        borderRadius: 8,
        alignSelf: 'center', 
        marginBottom: 20, 
    }
})