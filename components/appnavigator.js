import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from './WelcomePage/welcomepage';
import MainPage from './MainPage/mainpage';
import { View } from 'react-native';


const Stack = createStackNavigator();

function AppNavigator() {

	

  return (
		<View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
		</View>
  );
}

export default AppNavigator;