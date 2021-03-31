import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {images} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';

const BuahContent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.imgcontainer}>
        <Image source={images.img_fruit} style={styles.img} />
        <Text style={styles.description}>This is BlackBerry</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image source={images.img_fruit1} style={styles.img} />
        <Text style={styles.description}>This is BlueBerry</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image source={images.img_fruit2} style={styles.img} />
        <Text style={styles.description}>This is Banana</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image source={images.img_fruit3} style={styles.img} />
        <Text style={styles.description}>This is Avocado</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image source={images.img_fruit4} style={styles.img} />
        <Text style={styles.description}>This is Strawberry</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image source={images.img_fruit5} style={{width: 130, height: 110}} />
        <Text style={styles.description}>This is Apricot</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('GridView')}>
          <View style={styles.buttongrid}>
            <Text style={styles.buttontext}>To the Grid Buah</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuahContent;

const styles = StyleSheet.create({
  imgcontainer: {
    flexDirection: 'row',
    marginBottom: 5,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  img: {
    width: 130,
    height: 110,
  },
  description: {
    marginLeft: 10,
    top: 20,
    fontWeight: 'bold',
  },
  buttongrid: {
    padding: 10,
    elevation: 0,
    width: 150,
    alignSelf: 'center',
    backgroundColor: 'teal',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttontext: {
    fontWeight: 'bold',
    color: 'white',
  },
});
