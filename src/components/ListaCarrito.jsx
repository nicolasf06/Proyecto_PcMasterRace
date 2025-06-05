// components/ListaCarrito.jsx
import React, { useCallback } from 'react'; // <-- IMPORTANTE: Importar useCallback
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCarrito } from '../context/CarritoContext'; // Asegúrate de la ruta correcta

const ListaCarrito = () => {
  const { items, eliminarItem, calcularTotal } = useCarrito();


  const renderItem = useCallback(({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>
        ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
      </Text>

      <TouchableOpacity 
        style={styles.removeButton} 
        onPress={() => eliminarItem(item.uniqueId)} 
      >
        <Text style={styles.removeButtonText}>Eliminar 1</Text>
      </TouchableOpacity>
    </View>
  ), [eliminarItem]); 

  return (
    <View style={styles.listContainer}>
      {items.length === 0 ? (
        <Text style={styles.emptyCartText}>El carrito está vacío. ¡Añade algunos componentes!</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.uniqueId} 
            renderItem={renderItem} 
            contentContainerStyle={styles.flatListContent}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${calcularTotal().toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton} onPress={() => alert('¡Ir a Pagar!')}>
              <Text style={styles.checkoutButtonText}>Proceder al Pago</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default ListaCarrito;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 2,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    textAlign: 'right',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  totalContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderTopWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});