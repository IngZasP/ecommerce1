/*import { StyleSheet, Text, View } from 'react-native';
import Products from "./src/components/Products/products";
import ModalComponent from "./src/components/ModalComponent/ModalComponent";
import {DataProvider} from "./src/components/Context/DataContex";

export default function App() {
  return (
    <DataProvider>
    <View style={styles.container}>
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
*/

import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source="https://www.granodeoro.com.mx/wp-content/uploads/2020/09/9e9f6c38-43d8-3d44-8297-24e0f2ce00f3.png"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});