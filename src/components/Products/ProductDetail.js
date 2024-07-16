import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  console.log(product); 

  return (
    <View style={styles.container}> 
      <Image source={{ uri: product.img }} style={styles.productImage} />
      <Text style={styles.productName}>{product.productName}</Text>
      <Text style={styles.productDescription}>Descripción detallada del producto.</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
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
});

export default ProductDetail;
