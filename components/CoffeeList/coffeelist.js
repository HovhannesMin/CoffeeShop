import React from "react";
import {View, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';

function CoffeeList(){
	const coffedata = [
    {key: '1', sort: 'Decaff', name: 'SILKY CAFEAU LAIT'},
    {key: '2', sort: 'Black coffee', name: 'ICED AMERICANO'},
    {key: '3', sort: 'Winter Special', name: 'CAPPUCINO LATTE'},
    {key: '4', sort: 'Decaff', name: 'SILKY CAFEAU LAIT '},
		{key: '5', sort: 'Popular', name: 'ICED AMERICANO'},
    {key: '6', sort: 'Black coffee', name: 'ICED AMERICANO'},
    {key: '7', sort: 'Winter Special', name: 'ICED AMERICANO'},
  ];

  const renderCoffes = ({item}) => (
    <TouchableOpacity
      style={{
        height: 110,
        backgroundColor: '#230C02',
        margin: 35,
				borderRadius: 10,
				
      }}>
      <Text style={{color: '#FFF5E9', fontSize: 12, fontWeight: '400',marginLeft: 10, marginTop: 10}}>{item.sort}</Text>
    </TouchableOpacity>
  );



   return(
    <SafeAreaView>
        <FlatList
          data={coffedata}
          renderItem={renderCoffes}
          keyExtractor={item => item.key}
        />
      </SafeAreaView>
	 );
}

export default CoffeeList;