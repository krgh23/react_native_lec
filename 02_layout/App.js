import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MySafeAreaView from './src/02_SafeAreaView/MySafeAreaView';
import SafeAreaViewLayout from './src/02_SafeAreaView/SafeAreaViewLayout';
import MyScrollView from './src/03_ListComponent/01_ScrollView';
import MyVirtualizedList from './src/03_ListComponent/02_VirtualizedList';
import MyFlatList from './src/03_ListComponent/03_FlatList';
import MySectionList from './src/03_ListComponent/04_SectionList';
import GridLayout from './src/03_ListComponent/05_GridLayout';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      {/* <MySafeAreaView/> */}
      {/* <SafeAreaViewLayout/> */}
      {/* <MyScrollView/> */}
      {/* <MyVirtualizedList/> */}
      {/* <MyFlatList/> */}
      {/* <MySectionList/> */}
      <GridLayout/>
    </SafeAreaProvider>
  );
}