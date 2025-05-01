import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyTextInput from './src/01_TextInput';
import CustomCheckbox from './src/02_Checkbox';
import MyKeyboardAvoidingView from './src/03_KeyboardAvoidingView';
import RadioButtonLibrary from './src/04_RadioButtonLibrary';
import Picker from './src/05_Picker';
import MyButton from './src/06_Button';
import MySwitch from './src/07_Switch';
import Form from './src/08_Form';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <MyTextInput/> */}
      {/* <CustomCheckbox/> */}
      {/* <MyKeyboardAvoidingView/> */}
      {/* <RadioButtonLibrary/> */}
      {/* <Picker/> */}
      {/* <MyButton/> */}
      {/* <MySwitch/> */}
      <Form/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
