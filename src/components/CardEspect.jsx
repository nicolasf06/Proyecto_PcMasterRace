import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import intelbanner from "../data/img/intel/marca.jpg"
import amdbanner from "../data/img/amd/marca.png"
const CardEspect = ({data,motherData,memoryData}) => {
    const router=useRouter();
    const handlePress=()=>{

        router.push({
        pathname:"/EspecificacionCpu",
        params:{item:JSON.stringify(data),
                memoryData: memoryData || undefined , 
                motherData: motherData || undefined
        }
         })

        }
    const getBanner=(cpuName)=>{
       if (cpuName.startsWith('Intel')) {
            return 'Intel';
        }
        if (cpuName.startsWith('AMD')) {
            return 'AMD';
        }
        return 'Desconocida'
    }
      const cpuBrand = getBanner(data.name)
       const bannerImage = cpuBrand === 'Intel' ? intelbanner : cpuBrand === 'AMD' ?  amdbanner: null;
  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
         <View style={styles.imageContainer}>
                {bannerImage && ( 
                    <Image source={bannerImage} style={styles.bannerImage} resizeMode="contain" />
                )}
         </View>
        <Text style={styles.title}> {data.name}</Text>
        <Text style={styles.text}>Precio:${data.price}</Text>
        <Text style={styles.text}>Nucleos:{data.core_count}</Text>
    </TouchableOpacity>
  )
}

export default CardEspect


const styles = StyleSheet.create({
  card: {
    flex:1,
    backgroundColor: '#e0e0e0',
    padding: 12,
    paddingLeft:120,
    marginBottom: 10,
    marginLeft:5,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  imageContainer: {
        width: 100, // Ancho fijo para el contenedor de la imagen
        height: 100, // Alto fijo para el contenedor de la imagen
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10, // Espacio entre la imagen y el texto
    },
    bannerImage: {
        width: '100%',  // La imagen ocupa todo el ancho de su contenedor
        height: '100%', // La imagen ocupa todo el alto de su contenedor
        // Asegúrate de que tus imágenes tengan una relación de aspecto que se vea bien aquí
    },
});
