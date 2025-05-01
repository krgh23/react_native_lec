/*
Drawer Navigation
Drawer Navigation은 React Native 앱에서 
화면의 왼쪽(또는 오른쪽)에서 슬라이드로 나타나는 사이드 메뉴(드로어, Drawer)를 통해 
여러 화면(스크린) 간 이동을 제공하는 내비게이션 방식입니다. 
주로 앱의 메인 메뉴, 섹션 이동, 설정 등 다양한 화면 접근을 위해 사용됩니다.

주요 특징
1. 슬라이드 메뉴
  사용자가 화면의 가장자리에서 스와이프하거나, 메뉴 버튼을 눌러 Drawer(사이드바)를 열 수 있습니다.
2. 위치 지정
  기본적으로 왼쪽에서 열리지만, drawerPosition 옵션으로 오른쪽 등 원하는 위치로 변경할 수 있습니다.
3. 커스터마이징
  메뉴의 스타일, 배경색, 애니메이션, 내부 콘텐츠 등을 자유롭게 커스터마이즈할 수 있습니다.
4. 제스처 지원
  스와이프, 터치 등 다양한 제스처로 Drawer를 열고 닫을 수 있습니다.
5. 중첩 네비게이션
  Stack, Tab 등 다른 네비게이터와 함께 조합하여 복잡한 내비게이션 구조를 만들 수 있습니다.

라이브러리 설치
npx expo install @react-navigation/native @react-navigation/drawer
npx expo install react-native-gesture-handler react-native-reanimated
*/

import DrawerScreen from './src/DrawerScreen';

export default function App() {
  return (
    <DrawerScreen/>
  );
}
