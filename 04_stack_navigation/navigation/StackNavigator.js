import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import AboutScreen from "../screen/AboutScreen";
import ProfileScreen from "../screen/ProfileScreen";

// StackNavigator 생성
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="home"
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="about" component={AboutScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}