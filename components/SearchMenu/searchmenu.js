import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchIcon from '../../svgs/search';
import Notification from '../../svgs/notification';
import MenuIcon from '../../svgs/menu';

const SearchMenu = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };


  return (
		<View style={searchstyles.searchmenu}> 
    <View style={searchstyles.searchstyle}>
			<SearchIcon />
      <TextInput
        style={searchstyles.input}
        placeholder="Good day, Selenay"
        onChangeText={handleSearchTextChange}
        value={searchText}
      />
			<Notification style={searchstyles.notif}/>
			<MenuIcon style={searchstyles.menu}/>
    </View>
		
		</View>
  );
};

const searchstyles = StyleSheet.create({
  searchstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    paddingHorizontal: 10,
		margin: 10,
    marginLeft: 20,
		marginRight: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
	searchmenu: {
   backgroundColor: '#EEDCC6'
	},
	notif: {
	},
	menu: {
		marginLeft: 10
	}

});

export default SearchMenu;
