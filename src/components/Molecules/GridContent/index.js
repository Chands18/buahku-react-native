import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { images } from '../../../assets/images';
import { WebView } from 'react-native-webview';

export default function GridContent() {
  const [item, setItems] = useState([
    { name: 'Blackcurrant', code: '#e74c3c', image:images.img_fruit },
    { name: 'Blueberry', code: '#2ecc71', image:images.img_fruit1 },
    { name: 'Banana', code: '#3498db', image:images.img_fruit2 },
    { name: 'Avocado', code: '#9b59b6', image:images.img_fruit3 },
    { name: 'Strawberry', code: '#f1c40f', image:images.img_fruit4 },
    { name: 'Apricot', code: '#16a085', image:images.img_fruit5 },
    { name: 'Cherry', code: '#27ae60', image:images.img_fruit6 },
    { name: 'Orange', code: '#2980b9', image:images.img_fruit7 },
    { name: 'Grape', code: '#8e44ad', image:images.img_fruit8 },
    { name: 'Plum', code: '#d35400', image:images.img_fruit9 },
    { name: 'Raspberry', code: '#f1c40f', image:images.img_fruit10 },
    { name: 'Lemon', code: '#e67e22', image:images.img_fruit11 },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CONCRETE', code: '#95a5a6' },
  ]);

  return (
    <FlatGrid
      itemDimension={150}
      data={item}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <TouchableOpacity onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Blueberry')}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
          <Image source={item.image} style={styles.img}/>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginVertical: 10,
    flex: 0,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  img: {
    width: 120,
    height: 100,
    alignSelf:'center'
  }
});