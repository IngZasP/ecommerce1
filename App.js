import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TextInput } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Ionicons } from '@expo/vector-icons';
import Products from "./src/components/Products/products";
import ProductDetail from "./src/components/Products/ProductDetail";
import ModalComponent from "./src/components/ModalComponent/ModalComponent";
import AccountComponent from "./src/components/AccountComponent/AccountSettings";
import { DataProvider } from "./src/components/Context/DataContex";
import SearchBar from './src/main/SearchBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Products />
    </View>
  );
}

function ModalComponentScreen() {
  return (
    <View style={styles.screenContainer}>
      <ModalComponent />
    </View>
  );
}

function AccountComponentScreen() {
  return (
    <View style={styles.screenContainer}>
      <AccountComponent />
    </View>
  );
}

function MainTabs() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name="Inicio" 
          component={ProductsScreen}     
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Carrito" 
          component={ModalComponentScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Perfil" 
          component={AccountComponentScreen} 
          options={{ 
            tabBarBadge: 3,  
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ), 
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <FlashMessage position="top" />
        <Stack.Navigator screenOptions={{ title: false }}>
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});