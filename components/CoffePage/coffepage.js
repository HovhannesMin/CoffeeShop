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
import { useRoute } from '@react-navigation/native';

function CoffePage() {
	const route = useRoute();
	const {selectedCoffee } = route.params;

  return (
      <SafeAreaView>
        <SearchMenu />
				{selectedCoffee && <Text>{selectedCoffee.name}</Text>}
      </SafeAreaView>

  );
}

const cardstyles = StyleSheet.create({
 
});

export default CoffePage;