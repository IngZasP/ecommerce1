import { StyleSheet, Text, View } from 'react-native';
import Products from "./src/components/Products/products";
import ModalComponent from "./src/components/ModalComponent/ModalComponent";
import {DataProvider} from "./src/components/Context/DataContex";
import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    <DataProvider>
    <View style={styles.container}>
      <FlashMessage position="top" />
      <Products/>
      <ModalComponent/>
    </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});