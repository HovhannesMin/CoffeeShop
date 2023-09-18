import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SearchMenu from '../SearchMenu/searchmenu';
import CoffeeList from '../CoffeeList/coffeelist';
import ShoppingIcon from '../../svgs/shoppingicon';

function Shopping() {
	const data = [
    {key: '1', text: 'All'},
    {key: '2', text: 'Black coffee'},
    {key: '3', text: 'Winter Special'},
    {key: '4', text: 'Decaff'},
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        width: 100,
        height: 25,
        backgroundColor: '#230C02',
        margin: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 68,
      }}>
      <Text style={{color: '#FFF5E9', fontSize: 12, fontWeight: '400'}}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  return (
      <SafeAreaView>
        <View>
          <SearchMenu />
          <View style={shoppingstyles.shoppinghead}>
            <Text style={shoppingstyles.shoppingheadtext}>
						Cart
            </Text>
						<ShoppingIcon style={shoppingstyles.shoppingheadicon}/>
          </View>
          <View style={shoppingstyles.list}>
            <CoffeeList />
          </View>
        </View>
      </SafeAreaView>

  );
}

const shoppingstyles = StyleSheet.create({
  shoppinghead: {
    backgroundColor: '#EEDCC6',
    width: 'auto',
    height: 70,
  },
  shoppingheadtext: {
    marginLeft: 37,
    fontSize: 18,
    fontWeight: '600',
    width: 180,
    color: '#230C02',
		marginTop: -10
  },
	shoppingheadicon: {
		marginLeft: 37,
		marginTop: 10
		
	},
  list: {
    backgroundColor: '#230C02',
  },
});

export default Shopping;