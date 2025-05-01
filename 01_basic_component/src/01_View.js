/*
View 컴포넌트
View는 React Native에서 가장 기본적이고 중요한 UI 빌딩 블록입니다.
웹의 <div>와 유사하며, 다양한 컴포넌트와 요소들을 감싸는 컨테이너 역할을 합니다.
모든 화면 요소는 반드시 View 또는 그 하위 컴포넌트 안에 있어야 합니다. 아니면 오류가 발생합니다.
iOS에서는 UIView, Android에서는 ViewGroup에 매핑됩니다.

주요 특징
1. 컨테이너 역할
  View는 다른 컴포넌트(예: Text, Image, 또 다른 View 등)를 감싸서 그룹화하고, 레이아웃을 구성하는 데 사용됩니다.
2. 중첩 가능
  여러 개의 View를 서로 중첩해서 사용할 수 있습니다. 복잡한 UI도 View의 중첩을 통해 쉽게 구현할 수 있습니다.
3. 스타일링 지원
  style prop을 통해 배경색, 패딩, 마진, 테두리 등 다양한 스타일을 적용할 수 있습니다. 
  Flexbox 레이아웃을 완벽하게 지원하여, 유연한 레이아웃 구성이 가능합니다.
4. 터치 이벤트
  View는 기본적으로 터치 이벤트를 직접 처리하지 않지만, 필요에 따라 터치 이벤트 핸들러를 추가할 수 있습니다.
5. 접근성 지원
  접근성 관련 prop을 통해 스크린 리더 등 보조 기술에 대한 정보를 제공할 수 있습니다.
6. 스크롤 불가
  View 자체에는 스크롤 기능이 없습니다. 스크롤이 필요한 경우 ScrollView 등 별도의 컴포넌트를 사용해야 합니다.
*/

import { View } from "react-native";

export default function MyView() {

  return (
    <View style={ { flex: 1, backgroundColor: 'gray', } }>
      <View style={ { width: 100, height: 100, backgroundColor: 'green', } } />
      <View style={ { width: 100, height: 100, backgroundColor: 'yellow', } } />
    </View>
  );

}