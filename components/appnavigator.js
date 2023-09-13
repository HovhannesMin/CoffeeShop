import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from './WelcomePage/welcomepage';
import MainPage from './MainPage/mainpage';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{headerShown: false}}/>
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;