import React from 'react';
import {ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function WelcomePage() {

	const navigation = useNavigation();

  const handleShopNowPress = () => {
    navigation.navigate('MainPage');
  };

  return (
    <ImageBackground
      source={require('../../images/coffeBackground.png')}
      style={styles.backgroundImage}>
      <Text style={styles.textcoffeshop}>COFFEE SHOP</Text>
      <Text style={styles.enjoydrink}>Enjoy the drink coffee .</Text>
      <TouchableOpacity style={styles.shopnowdiv}>
        <Text style={styles.shoptext} onPress={handleShopNowPress}>SHOP NOW</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcoffeshop: {
    color: '#230C02',
    textAlign: 'center',
    fontFamily: 'Josefin Sans',
    fontSize: 36,
		marginTop: 180
  },
  enjoydrink: {
    color: '#230C02',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 16,
    marginTop: 20,
  },
  shopnowdiv: {
    width: 333,
    height: 47,
    borderRadius: 40,
    backgroundColor: '#230C02',
		marginTop: 100
  },
  shoptext: {
    width: 333,
    height: 47,
    color: '#EEDDC9',
		textAlign: 'center',
		marginTop: 13,
    fontSize: 14,
  },
});

export default WelcomePage;
