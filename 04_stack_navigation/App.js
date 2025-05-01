/*
Stack Navigation(스택 네비게이션)
React Native에서 Stack Navigation은 여러 화면을 쌓아 올리듯 관리하며, 화면 간 이동 시 이전 화면으로 "뒤로 가기"가 가능한 구조입니다. 
대표적으로 React Navigation 라이브러리의 Stack Navigator를 많이 사용합니다.

필수 라이브러리 설치
npm install @react-navigation/native @react-navigation/stack

기본 사용 방법
<Stack.Navigator> 내부에 <Stack.Screen>으로 각 화면을 등록합니다.
navigation.navigate('화면이름')으로 화면 이동이 가능합니다.
*/

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}