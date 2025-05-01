/*
SafeAreaView 컴포넌트
SafeAreaView는 React Native에서 노치(notch), 상태바(status bar), 홈 인디케이터(home indicator) 등 
화면의 물리적 특수 영역에 콘텐츠가 가려지지 않도록, 안전한 영역(safe area) 안에서만 콘텐츠를 렌더링하도록 도와주는 컴포넌트입니다. 
주로 iOS 11 이상에서 의미가 크며, 아이폰의 노치나 둥근 모서리, 하단 홈바 등으로 인해 화면 일부가 잘릴 수 있는 문제를 해결합니다.

주요 기능 및 특징
1. 자동 여백 적용
  기기별로 노치, 상태바, 홈 인디케이터 등 UI 요소를 감지해, 그 영역을 피해 자동으로 패딩(padding)을 추가합니다.
2. 다양한 기기 대응
  여러 해상도와 화면 크기, 다양한 노치 디자인을 가진 기기에서 일관된 UI를 보장합니다.
3. 간편한 사용법
  별도의 라이브러리 설치 없이 React Native에 내장되어 있으며, View 대신 SafeAreaView로 감싸는 것만으로 적용할 수 있습니다.
4. 플랫폼 차이
  iOS에서 주로 효과가 있으며, Android에서는 기본적으로 큰 차이가 없지만 일부 기기에서는 동작할 수 있습니다.

패키지 설치
  npx expo install react-native-safe-area-context  (Expo 프로젝트에서 사용. Expo 및 React Native 버전에 호환되는 적절한 버전을 자동으로 설치)

사용 방법
1. SafeAreaProvider로 <App/> 감싸기
2. SafeAreaView를 사용하여 화면의 특정 부분이 안전 영역 내에 위치하도록 설정하기
*/

import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

export default function MySafeAreaView() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}