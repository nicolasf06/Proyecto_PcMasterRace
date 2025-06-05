import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 

const updatesData = [
    {
        id: '1',
        date: '04/06/2025',
        title: 'En Proceso',
        description: 'Se agregaran Mas Pestañas y Funcionalidades : Perfil,Registro,Guardar Configuracion de Armado de Computadora y Ranking de Mas Vendidos.',
    },
    {
        id: '2',
        date: '03/06/2025',
        title: 'Mejora de Botones y Pestaña de Memoria RAM',
        description: 'Se mejora la interfaz de los botones se solucionan errores con el boton "Agregar al carrito" de la seccion Armar Computadora y se agrega la pestaña de Memoria Ram.',
    },
    {
        id: '3',
        date: '02/06/2025',
        title: 'Mejora de Interfaz',
        description: 'Se mejoro las pestañas y se agregaron imagenes en  los componentes.',
    },
    {
        id: '4',
        date: '30/05/2025',
        title: 'Carrito (Beta) y Armar Computadora',
        description: 'Se añadió la capacidad de agregar componentes al carrito desde las pantallas de especificaciones y se agrego la capacidad de poder armar una computadora(beta).'
    },
    {
        id: '5',
        date: '28/05/2025',
        title: 'Empieza el Desarrollo del Proyecto',
        description: 'Se introduce las pestañas de Procesador , Placa Madre.',
    },
    
];

const UpdateItem = ({ date, title, description }) => (
    <View style={styles.updateCard}>
        <Text style={styles.updateDate}>{date}</Text>
        <Text style={styles.updateTitle}>{title}</Text>
        <Text style={styles.updateDescription}>{description}</Text>
    </View>
);

const IndexScreen = () => { 
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.mainTitle}>Actualizaciones del Proyecto</Text>
                <FlatList
                    data={updatesData}
                    renderItem={({ item }) => <UpdateItem {...item} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContentContainer}
                />
            </View>
        </SafeAreaView>
    );
}

export default IndexScreen; 

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#1a1a1a', 
    },
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a', 
        paddingTop: 20, 
        paddingHorizontal: 15, 
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00b5cc', 
        textAlign: 'center',
        marginBottom: 25, 
    },
    listContentContainer: {
        paddingBottom: 20, 
    },
    updateCard: {
        backgroundColor: '#2a2a2a', 
        padding: 18,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4,
        elevation: 6,
    },
    updateDate: {
        fontSize: 14,
        color: '#888', 
        marginBottom: 5,
        fontWeight: '500',
    },
    updateTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f0f0f0', 
        marginBottom: 8,
    },
    updateDescription: {
        fontSize: 15,
        color: '#e0e0e0', 
        lineHeight: 22,
    },
});