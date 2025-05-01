import { View, Text, Button } from "react-native";

export default function HomeScreen( props ) {
  // console.log(props);
  const { navigation } = props;
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="About"
        onPress={() => navigation.navigate("about")}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate("profile")}
      />
    </View>
  );
}