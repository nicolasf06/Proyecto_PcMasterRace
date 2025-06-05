// src/context/CarritoContext.js
import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid'; 

const CarritoContext = createContext({
    items: [],
    agregarItem: () => {},
    eliminarItem: () => {},
    calcularTotal: () => 0,
});

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error("useCarrito debe usarse dentro de un CarritoProvider");
    }
    return context;
};

export const CarritoProvider = ({ children }) => {
    const [items, setItems] = useState([]); 

    const agregarItem = (producto) => {
    console.log("=== AGREGAR ITEM ===");
        console.log("Producto recibido:", producto);
        console.log("Items actuales:", items);
         // Verificar que el producto tenga las propiedades necesarias
        if (!producto || !producto.name) {
            console.error("Producto inválido - falta name:", producto);
            return;
        }
        const itemExistente = items.find(item => item.name === producto.name);
        console.log("ItemExistente Econtrado",itemExistente);
        if (itemExistente) {
            console.log("Sumando Cantidad");
            setItems(items.map(item =>
                item.name === producto.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            console.log("Agregando Nuevo item")
            setItems([...items, { ...producto, quantity: 1, uniqueId: uuidv4() }]); 
        }
        
    };

    const eliminarItem = (uniqueId) => { 
        const itemExistente = items.find(item => item.uniqueId === uniqueId); 

        if (!itemExistente) return; 

        if (itemExistente.quantity === 1) {

            setItems(items.filter(item => item.uniqueId !== uniqueId));
        } else {

            setItems(items.map(item =>
                item.uniqueId === uniqueId 
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ));
        }
    };

    const calcularTotal = () => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const contextValue = {
        items,
        agregarItem,
        eliminarItem,
        calcularTotal,
    };

    return (
        <CarritoContext.Provider value={contextValue}>
            {children}
        </CarritoContext.Provider>
    );
};