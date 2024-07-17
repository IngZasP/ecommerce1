import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Carousel
          loop
          width={viewportWidth}
          height={300}
          autoPlay={false}
          data={product.img}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <AnimatedDotsCarousel
          length={product.img.length}
          currentIndex={activeSlide}
          maxIndicators={product.img.length}
          interpolateOpacityAndColor={true}
          activeIndicatorConfig={{
            color: 'rgba(0, 0, 0, 0.92)',
            margin: 3,
            opacity: 1,
            size: 8,
          }}
          inactiveIndicatorConfig={{
            color: 'rgba(0, 0, 0, 0.3)',
            margin: 3,
            opacity: 0.5,
            size: 8,
          }}
          decreasingDots={[
            {
              config: {
                color: 'rgba(0, 0, 0, 0.3)',
                margin: 3,
                opacity: 0.5,
                size: 6,
              },
              quantity: 1,
            },
          ]}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.productName}>{product.productName}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity onPress={() => setShowFullDescription(!showFullDescription)}>
          <Text
            style={styles.description}
            numberOfLines={showFullDescription ? undefined : 5}
          >
            {product.description}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Comments</Text>
        {product.comments.map((comment, index) => (
          <View key={index} style={styles.comment}>
            <Text style={styles.commentName}>{comment.nameC}</Text>
            <Text style={styles.commentDate}>{comment.dateC}</Text>
            <Text style={styles.commentText}>{comment.text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended Products</Text>
        {product.recommendations && product.recommendations.map((rec, index) => (
          <View key={index} style={styles.recommendation}>
            <Image source={{ uri: rec.img }} style={styles.recommendationImage} />
            <Text style={styles.recommendationName}>{rec.productName}</Text>
            <Text style={styles.recommendationPrice}>${rec.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  imageContainer: {
    width: viewportWidth,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'green',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  comment: {
    marginBottom: 10,
  },
  commentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentDate: {
    fontSize: 14,
    color: 'gray',
  },
  commentText: {
    fontSize: 14,
  },
  recommendation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  recommendationImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  recommendationName: {
    fontSize: 16,
    flex: 1,
  },
  recommendationPrice: {
    fontSize: 16,
    color: 'green',
  },
});

export default ProductDetail;