import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import MSI from "../data/img/mother/msi.png"
import ASUS from "../data/img/mother/asus.png"
import ASROCK from "../data/img/mother/asrock.png"
import GIGABYTE from "../data/img/mother/gigabyte.png"
import NZXT from "../data/img/mother/nzxt.jpg"

const CardEspectMother = ({data,cpuData,memoryData}) => {
    const router=useRouter();
    const handlePress=()=>{
        router.push({
        pathname:"/EspecificacionMother",
        params:{ item: JSON.stringify(data),
                 cpuData: cpuData || undefined,
                 memoryData: memoryData || undefined , 
        }
        })
    }
    const getBanner=(motherName)=>{
       if (motherName.startsWith('MSI')) {
            return 'MSI';
        }
        if (motherName.startsWith('Asus')) {
            return 'ASUS';
        }
        if (motherName.startsWith('ASRock')) {
            return 'ASROCK';
        }
        if (motherName.startsWith('Gigabyte')) {
            return 'GIGABYTE';
        }
        if (motherName.startsWith('NZXT')) {
            return 'NZXT';
        }
        return 'Desconocida'
    }
      const motherBrand = getBanner(data.name)
      const bannerImage = motherBrand === 'MSI' ? MSI : motherBrand === 'ASUS' ?  ASUS: motherBrand=== 'ASROCK' ? ASROCK: motherBrand=== 'GIGABYTE' ? GIGABYTE: motherBrand==='NZXT'? NZXT :null;
  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
          <View style={styles.imageContainer}>
                        {bannerImage && ( 
                            <Image source={bannerImage} style={styles.bannerImage} resizeMode="contain" />
                        )}
                 </View>
        <Text style={styles.title}> {data.name}</Text>
        <Text style={styles.text}>Precio:${data.price}</Text>
    </TouchableOpacity>
  )
}

export default CardEspectMother


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
  },imageContainer: {
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
