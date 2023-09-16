import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from './WelcomePage/welcomepage';
import Navig from './TabNav/tabnav';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{headerShown: false}}/>
        <Stack.Screen name="AllPages" component={Navig} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;