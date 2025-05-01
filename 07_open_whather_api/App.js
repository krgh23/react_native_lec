import { SafeAreaProvider } from 'react-native-safe-area-context';
import OpenWeather from './src/OpenWeather';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar/>
      <OpenWeather/>
    </SafeAreaProvider>
  );
}