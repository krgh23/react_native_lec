/*
Text 컴포넌트
Text는 React Native에서 텍스트(문자열)를 화면에 표시할 때 사용하는 기본 컴포넌트입니다.
웹의 <span> 또는 <p>와 비슷한 역할을 하며, 다양한 스타일과 기능을 제공합니다.
텍스트를 렌더링할 때는 반드시 <Text> 컴포넌트로 감싸야 합니다.
iOS의 UILabel, Android의 TextView에 매핑됩니다.

주요 특징
1. 텍스트 표시
  화면에 문자열, 숫자, 이모지 등 다양한 텍스트를 렌더링합니다.
2. 중첩 가능
  Text 컴포넌트 안에 또 다른 Text 컴포넌트를 중첩해서 사용할 수 있습니다.
  (예: 특정 단어만 색상, 스타일 다르게 적용)
3. 스타일링 지원
  style prop을 통해 폰트 크기, 색상, 굵기, 정렬, 줄 간격 등 다양한 텍스트 스타일을 적용할 수 있습니다.
4. 터치 이벤트
  onPress 등 터치 이벤트 핸들러를 직접 사용할 수 있습니다.
  (링크, 버튼 등으로 활용 가능)
5. 자동 줄바꿈
  기본적으로 텍스트가 길면 자동으로 줄바꿈이 됩니다.
  (numberOfLines, ellipsizeMode 등으로 제어 가능)
6. 접근성 지원
  접근성 관련 prop을 통해 스크린 리더 등 보조 기술에 대한 정보를 제공할 수 있습니다.
*/

import { Text, View } from "react-native";

export default function MyText() {
  return (
    <View>
      <Text style={{ fontSize: 32, fontWeight: 'w900', }}>Hello World</Text>
      <Text>Nice <Text style={{ color: 'gray', }}>to meet</Text> you</Text>
    </View>
  );
}