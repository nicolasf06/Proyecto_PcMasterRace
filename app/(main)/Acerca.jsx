// src/components/Acercade.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 

const Acercade = () => {
    const author= "Moya Nicolas Fernando"; 

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Acerca de esta Aplicación</Text>
                

                <View style={styles.section}>
                    <Text style={styles.heading}>Desarrollador:</Text>
                    <Text style={styles.text}>
                        Hecho  por {' '}
                        <Text style={styles.highlightText}>{author}</Text>.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>
                        Un proyecto pensado para facilitar la seleccion de componentes.
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#1a1a1a', 
    },
    container: {
        flex: 1,
        backgroundColor: '#2a2a2a',
        borderRadius: 12,
        margin: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.65,
        elevation: 8,
        alignItems: 'center', 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00b5cc', 
        marginBottom: 25,
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
        width: '100%',
        alignItems: 'center', 
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        color: '#f0f0f0',
        marginBottom: 8,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: '#e0e0e0', 
        lineHeight: 24,
        textAlign: 'center', 
        paddingHorizontal: 10, 
    },
    highlightText: { 
        color: '#00b5cc', 
        fontWeight: 'bold',
    },
});

export default Acercade;