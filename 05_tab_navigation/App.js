/*
Tab Navigation
React Native에서 탭(Tab)을 이용한 네비게이션은 주로 React Navigation 라이브러리를 사용하여 구현합니다.
탭 네비게이션은 하단(Bottom Tab)과 상단(Top Tab) 두 가지 방식이 대표적이며, 각 방식에 맞는 전용 네비게이터를 제공합니다. 

React Navigation Core 설치
  npm install @react-navigation/native
Bottom Tab Navigator 설치
  npm install @react-navigation/bottom-tabs
Top Tab Navigator 설치
  npm install @react-navigation/material-top-tabs react-native-tab-view
탭 메뉴에서 표시할 아이콘 설치 (아이콘 이름 확인 : https://oblador.github.io/react-native-vector-icons/)
  npm install @expo/vector-icons
*/

import TopTabScreen from './src/TopTabScreen';
import BottomTabScreen from './src/BottomTabScreen';

export default function App() {
  return (
    // <TopTabScreen/>
    <BottomTabScreen/>
  );
}
