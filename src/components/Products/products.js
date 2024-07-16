import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataContex";
import { Pressable, Text, View, FlatList, Image, StyleSheet, TextInput } from "react-native";
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { Rating } from 'react-native-ratings';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import productos from "./ProducList"

const Products = () => {
  const { buyProducts } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState(""); 
  const navigation = useNavigation();

  const filteredProducts = productos.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showAlert = () => {
    console.log("producto añadido");
    showMessage({
      message: "Alerta",
      description: "Producto Añadido.",
      type: "success",
      icon: "auto",
    });
  };

  const handleBuyPress = (product) => {
    buyProducts(product);
    showAlert();
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const renderItem = ({ item }) => (
    <Pressable style={styles.productCard} onPress={() => handleProductPress(item)}>
      <Image source={{ uri: item.img }} style={styles.productImage} />
      <Pressable style={styles.favoriteIcon} onPress={() => console.log('Guardar como favorito')}>
        <FontAwesome name="heart-o" size={24} color="black" />
      </Pressable>
      <Pressable style={styles.cartIcon} onPress={() => handleBuyPress(item)}>
        <Ionicons name="cart-outline" size={24} color="black" />
      </Pressable>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Rating
          imageSize={20}
          readonly
          startingValue={item.rating}
        />
        <Text style={styles.productDescription}>Descripción breve del producto.</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlashMessage position="top" /> 
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
    marginHorizontal: 16,
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  cartIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default Products;
