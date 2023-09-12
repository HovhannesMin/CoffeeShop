import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from './components/WelcomePage/welcomepage';
import MainPage from './components/MainPage/mainpage';



function App() {

	const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;