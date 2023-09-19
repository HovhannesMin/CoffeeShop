import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions, 
} from 'react-native';

const windowWidth = Dimensions.get('window').width; 

function CoffeeList() {
  const coffedata = [
		{ key: '1', sort: 'DECAFF', name: 'SILKY CAFEAU LAIT', image: require('../../images/Sliky.png') },
    { key: '2', sort: 'Black coffee', name: 'ICED AMERICANO', image: require('../../images/americano.png') },
    { key: '3', sort: 'Winter Special', name: 'CAPPUCINO LATTE', image: require('../../images/cappucino.png') },
    { key: '4', sort: 'CHOCOLATE', name: 'ICED CHOCOLATE ', image: require('../../images/chocolate.png') },
    { key: '5', sort: 'Black coffee', name: 'ICED AMERICANO', image: require('../../images/americano.png') },
    { key: '6', sort: 'Black coffee', name: 'ICED AMERICANO', image: require('../../images/americano.png') },
    { key: '7', sort: 'Black coffee', name: 'ICED AMERICANO', image: require('../../images/americano.png') },
		{ key: '8', sort: 'Black coffee', name: 'ICED AMERICANO', image: require('../../images/americano.png') },
    { key: '9', sort: 'Black coffee', name: 'ICED AMERICANO', image: require('../../images/americano.png') },
    { key: '10', sort: 'Black coffee', name: 'ICED AMERICANO', image: require('../../images/americano.png') },
  ];

  const renderCoffes = ({ item }) => (
      <TouchableOpacity
        style={liststyles.coffeeItem}>
        <View style={liststyles.divcoffee}>
          <View>
            <Text style={liststyles.coffeestypes}>{item.sort} </Text>
            <Text style={liststyles.coffeesnames}>{item.name}</Text>
          </View>
          <Image
            source={item.image}
            style={liststyles.coffeeimages}
          />
        </View>
      </TouchableOpacity>
  );

  return (
		<SafeAreaView>

	
    <FlatList
      data={coffedata}
      renderItem={renderCoffes}
      keyExtractor={item => item.key}
      contentContainerStyle={liststyles.container}
    />
			</SafeAreaView>
  );
}

const liststyles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth * 0.05,
  },
  coffeeItem: {
    backgroundColor: '#FFF5E9',
    marginHorizontal: windowWidth * 0.03, 
    marginBottom: 20,
		marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  coffeestypes: {
    color: '#230C02',
    fontSize: windowWidth * 0.02,
    fontWeight: '600',
    marginLeft: windowWidth * 0.01,
    marginTop: windowWidth * 0.03, 
  },
  coffeesnames: {
    color: '#230C02',
    fontSize: windowWidth * 0.03, 
    fontWeight: '500',
    marginLeft: windowWidth * 0.01, 
    marginTop: windowWidth * 0.03, // Set marginTop as a percentage of the screen width
    width: windowWidth * 0.4, // Set width as a percentage of the screen width
  },
  divcoffee: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: windowWidth * 0.02, // Set padding as a percentage of the screen width
  },
  coffeeimages: {
    marginRight: windowWidth * 0.01, // Set marginRight as a percentage of the screen width
    marginTop: windowWidth * 0.015, // Set marginTop as a percentage of the screen width
    width: windowWidth * 0.20, // Set width as a percentage of the screen width
    height: windowWidth * 0.20, // Set height as a percentage of the screen width
    resizeMode: 'contain',
  }
});

export default CoffeeList;
