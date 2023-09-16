import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
	Image
} from 'react-native';

function CoffeeList() {
  const coffedata = [
    {key: '1', sort: 'DECAFF', name: 'SILKY CAFEAU LAIT', image: require('../../images/Sliky.png')},
    {key: '2', sort: 'Black coffee', name: 'ICED AMERICANO', image: require('../../images/americano.png')},
    {key: '3', sort: 'Winter Special', name: 'CAPPUCINO LATTE', image: require('../../images/cappucino.png')},
    {key: '4', sort: 'CHOCOLATE', name: 'ICED CHOCOLATE ', image: require('../../images/chocolate.png')},
    {key: '5', sort: 'Black coffee', name: 'ICED AMERICANO', image: require('../../images/americano.png')},
    {key: '6', sort: 'Black coffee', name: 'ICED AMERICANO', image: require('../../images/americano.png')},
    {key: '7', sort: 'Black coffee', name: 'ICED AMERICANO',image: require('../../images/americano.png')},
  ];

  const renderCoffes = ({item}) => (
    <TouchableOpacity
      style={{
        height: 110,
        backgroundColor: '#FFF5E9',
        margin: 35,
        borderRadius: 10,
      }}>
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
      <FlatList
        data={coffedata}
        renderItem={renderCoffes}
        keyExtractor={item => item.key}
      />
  );
}

const liststyles = StyleSheet.create({
  coffeestypes: {
    color: '#230C02',
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 15,
  },
  coffeesnames: {
    color: '#230C02',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 15,
		width: 150
  },
	divcoffee: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	coffeeimages: { 
		marginRight: 10,
		marginTop: 8
	}
});

export default CoffeeList;
