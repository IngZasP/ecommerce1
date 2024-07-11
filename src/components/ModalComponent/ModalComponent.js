import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View, FlatList, Image } from "react-native";
import { DataContext } from "../Context/DataContex";
import FlashMessage, { showMessage } from 'react-native-flash-message';

const ModalComponent = () => {
  const { cart, setCart, buyProducts } = useContext(DataContext);
  const [modalVisible, setModalVisible] = useState(false);
  const total = cart.reduce((acc, el) => acc + el.quanty * el.price, 0);

  const handleBuyPress = (product) => {
    buyProducts(product);
  };

  const handleDecreasePress = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);
    if (productRepeat.quanty !== 1) {
      setCart(cart.map((item) => (item.id === product.id ? { ...product, quanty: productRepeat.quanty - 1 } : item)));
    }
  };

  const handleDeletePress = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const alertDelete = () => {
    showMessage({
      message: "Alerta",
      description: "El producto se ha eliminado.",
      type: "success",
      icon: "auto",
    });
  };

  return (
    <View>
      <Pressable style={styles.modalButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.cartIcon}>🛒</Text>
      </Pressable>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>❌</Text>
            </Pressable>
            <Text style={styles.modalText}>Carrito de Compras:</Text>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View style={styles.cartItem}>
                  <Image source={{ uri: item.img }} style={styles.productImage} />
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.productName}</Text>
                    <View style={styles.quantityControl}>
                      <Pressable onPress={() => handleDecreasePress(item)}>
                        <Text style={styles.controlButton}>➖</Text>
                      </Pressable>
                      <Text style={styles.productQuantity}>{item.quanty}</Text>
                      <Pressable onPress={() => handleBuyPress(item)}>
                        <Text style={styles.controlButton}>➕</Text>
                      </Pressable>
                    </View>
                    <Text style={styles.productTotal}>Total: ${item.quanty * item.price}</Text>
                    <Pressable onPress={() => { handleDeletePress(item); alertDelete(); }}>
                      <Text style={styles.deleteButton}>Eliminar</Text>
                    </Pressable>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <Text style={styles.totalText}>Total: ${total}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#ff5c5c",
    position: "absolute",
    right: 20,
    top: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#111111",
    padding: 10,
    borderRadius: 30,
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  cartIcon: {
    fontSize: 24,
    color: "white",
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  controlButton: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  productQuantity: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productTotal: {
    fontSize: 16,
    color: "green",
  },
  deleteButton: {
    color: "#ff5c5c",
    marginTop: 5,
    fontSize: 14,
  },
  totalText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ModalComponent;
