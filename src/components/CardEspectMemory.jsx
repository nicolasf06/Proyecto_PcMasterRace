import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import ADATA from "../data/img/memory/adata.png"
import CORSAIR from "../data/img/memory/corsair.png"
import CRUCIAL from "../data/img/memory/crucial.png"
import GSKILL from "../data/img/memory/g.skill.png"
import KINGSTON from "../data/img/memory/kingston.png"
import KLEVV from "../data/img/memory/klevv.png"
import LEXAR from "../data/img/memory/lexar.png"
import PATRIOT from "../data/img/memory/patriot.png"
import SILICON from "../data/img/memory/silicon.png"
import TEAMGROUP from "../data/img/memory/teamgroup.png"

const CardEspectMemory = ({data,cpuData,motherData}) => {
    const router=useRouter();
    const handlePress=()=>{
        router.push({
        pathname:"/EspecificacionMemory",
        params:{ item: JSON.stringify(data),
                 motherData: motherData || undefined ,
                 cpuData: cpuData || undefined
        }
        })
    }
        const getBanner=(memoryName)=>{
       if (memoryName.startsWith('Corsair')) {
            return 'CORSAIR';
        }
        if (memoryName.startsWith('G.Skill')) {
            return 'GSKILL';
        }
        if (memoryName.startsWith('TEAMGROUP')) {
            return 'TEAMGROUP';
        }
        if (memoryName.startsWith('Silicon')) {
            return 'SILICON';
        }
        if (memoryName.startsWith('Kingston')) {
            return 'KINGSTON';
        }
        if (memoryName.startsWith('Crucial')) {
            return 'CRUCIAL';
        }
        if (memoryName.startsWith('Lexar')) {
            return 'LEXAR';
        }
        if (memoryName.startsWith('Patriot')) {
            return 'PATRIOT';
        }
        if (memoryName.startsWith('ADATA')) {
            return 'ADATA';
        }
        if (memoryName.startsWith('Klevv')) {
            return 'KLEVV';
        }


        return 'Desconocida'
    }
          const memoryBrand = getBanner(data.name)
          const bannerImage = memoryBrand === 'CORSAIR' ? CORSAIR : memoryBrand === 'GSKILL' ?  GSKILL: memoryBrand === 'TEAMGROUP' ?  TEAMGROUP:memoryBrand === 'SILICON' ?  SILICON: memoryBrand === 'ADATA' ?  ADATA :memoryBrand === 'CRUCIAL' ?  CRUCIAL:memoryBrand === 'KINGSTON' ?  KINGSTON:memoryBrand === 'KLEVV' ?  KLEVV:memoryBrand === 'LEXAR' ?  LEXAR:memoryBrand === 'PATRIOT' ?  PATRIOT: null;
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

export default CardEspectMemory 


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
        width: 100, 
        height: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10, 
    },
    bannerImage: {
        width: '100%',  
        height: '100%', 
    },
});
