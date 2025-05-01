import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import BookScreen from './BookScreen';

// Drawer Navigator 생성
const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Book" component={BookScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}