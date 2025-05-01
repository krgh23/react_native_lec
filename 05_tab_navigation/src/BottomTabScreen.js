import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import BookScreen from './BookScreen';

// createBottomTabNavigator를 사용하여 하단 탭 네비게이션 구현
const Tab = createBottomTabNavigator();

export default function BottomTabScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{tabBarIcon: (color, size) => (<FontAwesome name="home" size={size} color={color} />)}} name="Home" component={HomeScreen} />
        <Tab.Screen options={{tabBarIcon: (color, size) => (<Entypo name="book" size={size} color={color} />)}} name="Book" component={BookScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
