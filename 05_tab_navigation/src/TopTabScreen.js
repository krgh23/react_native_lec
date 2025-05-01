import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './HomeScreen';
import BookScreen from './BookScreen';

// createMaterialTopTabNavigator를 사용하여 상단 탭 네비게이션 구현
const Tab = createMaterialTopTabNavigator();

export default function TopTabScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Book" component={BookScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
