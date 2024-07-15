import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import Products from "./src/components/Products/products";
import ModalComponent from "./src/components/ModalComponent/ModalComponent";
import { DataProvider } from "./src/components/Context/DataContex";
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
}

function ModalComponentScreen() {
  return (
    <View style={styles.container}>
      <ModalComponent />
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="ModalComponent" component={ModalComponentScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <FlashMessage position="top" />
        <MainTabs />
      </NavigationContainer>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
