/*
Icon 컴포넌트
Icon은 앱에서 시각적 의미를 전달하거나 버튼, 네비게이션, 상태 표시 등 다양한 UI 요소에 사용되는 작은 그래픽 심볼입니다. 
React Native에서는 주로 벡터 아이콘 라이브러리를 활용해 아이콘을 사용합니다.

주요 특징
1. 벡터 아이콘 사용
  대표적으로 react-native-vector-icons 라이브러리가 널리 사용됩니다.
  벡터 방식이기 때문에 크기 조절, 색상 변경, 스타일 적용 시 이미지가 깨지지 않습니다.
  수백~수천 개의 다양한 아이콘 폰트(FontAwesome, MaterialIcons, Ionicons 등)를 지원합니다.
2. 설치 및 설정
  npm install react-native-vector-icons
3. 사용법
  원하는 아이콘 폰트에서 Icon 컴포넌트를 import하고, name, size, color 등 props로 아이콘을 지정합니다.

아이콘 name 확인 방법
1. https://oblador.github.io/react-native-vector-icons/ 접속
2. Icon Families 별로 지원되는 아이콘 확인 (예: FontAwesome)
*/
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MyIcon() {
  return (
    <View>
      <Icon name="home" size={32} color="#F00"/>
    </View>
  );
}