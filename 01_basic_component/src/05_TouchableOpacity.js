/*
TouchableOpacity 컴포넌트
TouchableOpacity는 React Native에서 터치 가능한 영역(버튼, 링크 등)을 만들 때 사용하는 컴포넌트입니다.
터치 시 불투명도(opacity)가 줄어드는 시각적 피드백을 자동으로 제공하며, 텍스트, 이미지, 뷰 등 어떤 자식 요소도 감쌀 수 있습니다.

주요 특징
1. 시각적 피드백
  사용자가 터치하면 해당 영역의 불투명도가 일시적으로 낮아져(희미해져) 클릭 효과를 줍니다.
2. 커스텀 스타일링
  스타일을 자유롭게 지정할 수 있어, 다양한 모양의 버튼이나 터치 영역을 만들 수 있습니다.
3. 자식 요소 제한 없음
  텍스트, 이미지, 아이콘 등 어떤 요소든 감쌀 수 있습니다.
4. 간단한 사용법
  onPress 등 이벤트 핸들러와 activeOpacity(터치 시 불투명도) 등 props를 제공합니다.
*/

import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function MyTouchableOpacity() {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => { Alert.alert('Pressed!') }}
      activeOpacity={0.5}>  {/* 터치 시 투명도 조정 (디폴트 0.2) */}
      <Text style={styles.text}>Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
})