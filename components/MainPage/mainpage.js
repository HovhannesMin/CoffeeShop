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

function MainPage() {
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
  
        <SearchMenu />
        <View style={mainstyles.wouldlike}>
          <Text style={mainstyles.wouldliketext}>
            What would you like to drink today?
          </Text>

          <View>
            <FlatList
              data={data}
              horizontal={true}
              renderItem={renderItem}
              keyExtractor={item => item.key}
            />
          </View>
        </View>
        <View style={mainstyles.list}>
          <CoffeeList style={mainstyles.flatlist}/>
        </View>
    </SafeAreaView>
  );
}

const mainstyles = StyleSheet.create({
  wouldlike: {
    backgroundColor: '#EEDCC6',
    width: 'auto',
    height: 130,
  },
  wouldliketext: {
    marginLeft: 37,
    fontSize: 18,
    fontWeight: '600',
    width: 180,
    color: '#230C02',
  },
  list: {
    backgroundColor: '#230C02',
  },
});

export default MainPage;
