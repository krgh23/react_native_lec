import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyView from './src/01_View';
import MyText from './src/02_Text';
import MyImage from './src/03_Image';
import MyIcon from './src/04_Icon';
import MyTouchableOpacity from './src/05_TouchableOpacity';
import MyPressable from './src/06_Pressable';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <MyView/> */}
      {/* <MyText/> */}
      {/* <MyImage/> */}
      {/* <MyIcon/> */}
      {/* <MyTouchableOpacity/> */}
      <MyPressable/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingTop: 32,
  },
});