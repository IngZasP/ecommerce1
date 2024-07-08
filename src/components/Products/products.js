import React, { useContext } from "react";
import {DataContext} from "../Context/DataContex";
import { Pressable, Text, View, FlatList, Image, StyleSheet } from "react-native";

const Products = () => {
  const { buyProducts } = useContext(DataContext);
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

  const handleBuyPress = (product) => {
    buyProducts(product);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ecommerce App</Text>
      <FlatList
        data={productos}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.img }} style={styles.productImage} />
            <Text style={styles.productName}>{item.productName}</Text>
            <Text style={styles.productPrice}> Precio: {item.price} $</Text>
            <Pressable style={styles.buyButton} onPress={() => handleBuyPress(item)}>
              <Text style={styles.buyButtonText}>comprar</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
    paddingBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  productItem: {
    borderBottomWidth: 0,
    borderColor: "#ccc",
    paddingVertical: 18,
    alignItems: "center",
  },
  productImage: {
    width: 170,
    height: 145,
    resizeMode: "cover",
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "green",
  },
  buyButton: {
    backgroundColor: "#1bcb7f",
    padding: 8,
    width: 150,
    marginTop: 8,
    borderRadius: 5,
  },
  buyButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Products;