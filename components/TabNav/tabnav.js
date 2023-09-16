import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPage from '../MainPage/mainpage';
import Shopping from '../Shopping/shopping';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function Navig(){
	return(
        <Tab.Navigator>
          <Tab.Screen name="MainPage" component={MainPage} options={{ headerShown: false }}/>
          <Tab.Screen name="Shopping" component={Shopping} options={{ headerShown: false }}/>
        </Tab.Navigator>
	)
}

export default Navig;