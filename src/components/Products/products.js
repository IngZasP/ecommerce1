import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataContex";
import { Pressable, Text, View, FlatList, Image, StyleSheet, TextInput } from "react-native";
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { Rating } from 'react-native-ratings';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Products = () => {
  const { buyProducts } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [ratings, setRatings] = useState({
    1: 4,
    2: 5,
    3: 3,
    4: 2,
    5: 4,
    6: 5
  });

  const productos = [
    {
      id: 1,
      productName: "Ariel",
      price: 35,
      img: "https://www.granodeoro.com.mx/wp-content/uploads/2020/09/9e9f6c38-43d8-3d44-8297-24e0f2ce00f3.png",
    },
    {
      id: 2,
      productName: "Maruchan",
      price: 10,
      img: "https://m.media-amazon.com/images/I/61NXzjX4D8L.jpg",
    },
    {
      id: 3,
      productName: "Panditas",
      price: 45,
      img: "https://cdn.shopify.com/s/files/1/0566/4391/1854/products/7501030452508_03ee3d2b-7f79-4fba-b771-6c8cdd5344a3.png?v=1646582905",
    },
    {
      id: 4,
      productName: "Salsa Valentina",
      price: 27,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhG_qHfcgZAtJHdcYu_YTPl2MNxJC46CTOeg&s",
    },
    {
      id: 5,
      productName: "Cacahuates",
      price: 15,
      img: "https://w7.pngwing.com/pngs/480/665/png-transparent-chocolate-coated-peanut-cracker-nuts-caramelized-peanut-cacahuates-food-peanut-pumpkin-seed-thumbnail.png",
    },
    {
      id: 6,
      productName: "Cheetos flamin hot",
      price: 16,
      img: "https://www.cheetos.com/sites/cheetos.com/files/2019-02/Cheetos%20Crunchy%20Flamin%27%20Hot_1.png",
    },
  ];

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
          startingValue={ratings[item.id]}
        />
        <Text style={styles.productDescription}>Descripción breve del producto.</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlashMessage position="top" />
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar productos..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
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
