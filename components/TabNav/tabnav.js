import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPage from '../MainPage/mainpage';
import Shopping from '../Shopping/shopping';
import HomeIcon from '../../svgs/homeicon';
import ShoppingIcon from '../../svgs/shoppingicon';
import LikedPage from '../LikedPage/likedpage';
import LikedIcon from '../../svgs/liked';
const Tab = createBottomTabNavigator();

function Navig() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#EEDCC6',
        },
      }}>
      <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <HomeIcon fill={focused ? '#230C02' : 'none'}/>,
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <ShoppingIcon fill={focused ? '#230C02' : 'none'}/>,
        }}
      />
			<Tab.Screen
        name="LikedPage"
        component={LikedPage}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <LikedIcon fill={focused ? '#230C02' : 'none'}/>,
        }}
      />
			
    </Tab.Navigator>
  );
}

export default Navig;
