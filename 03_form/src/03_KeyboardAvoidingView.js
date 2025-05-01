/*
KeyboardAvoidingView 컴포넌트
KeyboardAvoidingView는 React Native에서 키보드가 화면에 나타날 때 입력창(TextInput 등)이 키보드에 가려지지 않도록 자동으로 레이아웃을 조정해주는 컴포넌트입니다.
모바일 앱에서 폼이나 입력창이 하단에 있을 때, 키보드가 올라오면 입력창이 보이지 않는 문제를 해결할 수 있습니다.

주요 기능 및 동작 방식
1. 키보드가 올라올 때 View의 크기나 위치를 자동으로 조정
  입력창이 키보드에 가려지지 않도록 전체 레이아웃을 위로 올리거나, 패딩을 추가하는 방식으로 동작합니다.
2. 플랫폼별 동작 차이
  iOS와 Android에서 동작 방식이 다르기 때문에, behavior prop을 통해 플랫폼에 맞는 동작을 지정해야 합니다.

주요 Props
Prop                    설명
--------------------------------------------------------------
behavior                키보드가 나타날 때 레이아웃을 어떻게 조정할지 결정 ('height', 'position', 'padding')
                        'padding': 키보드 높이만큼 하단에 패딩을 추가 (주로 iOS)
                        'height': View의 높이를 줄임 (주로 Android)
                        'position': View의 위치를 직접 이동
keyboardVerticalOffset  키보드와 View 사이의 추가 오프셋. 상태바, 네비게이션 바 등으로 인해 추가로 띄워야 할 때 사용. (픽셀 단위)
enabled                 KeyboardAvoidingView 활성화 여부 (기본값: true)
style                   View 스타일 지정
--------------------------------------------------------------

주의사항
1. 최상위 View로 감싸야 효과적
  KeyboardAvoidingView는 입력창을 포함하는 최상위 View로 감싸야 제대로 동작합니다.
2. ScrollView와 함께 사용 시
  ScrollView 내부에서 KeyboardAvoidingView가 잘 동작하지 않을 수 있습니다. 이 경우 react-native-keyboard-aware-scroll-view와 같은 라이브러리를 사용하는 것이 더 안정적입니다.
*/

import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from "react-native";

export default function MyKeyboardAvoidingView() {
  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      keyboardVerticalOffset={ Platform.OS === 'ios' ? 0 : 0 }
    >
      <View>
        <TextInput style={styles.input}/>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
  }
})