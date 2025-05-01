/*
Button 컴포넌트
Button 컴포넌트는 React Native에서 가장 기본적으로 제공되는 버튼 UI 요소입니다.
사용자가 버튼을 눌렀을 때 특정 동작을 실행할 수 있도록 해주며, 간단한 사용법과 제한적인 스타일링이 특징입니다.

주요 특징
1. 간단한 사용법
  필수 props는 title(버튼에 표시될 텍스트)과 onPress(버튼 클릭 시 실행할 함수)입니다.
2. 제한된 스타일링
  배경색, 글씨색 등 일부 스타일만 변경할 수 있고, 커스텀 스타일링에는 한계가 있습니다.
3. 플랫폼별 기본 스타일
  iOS와 Android에서 기본적으로 제공하는 버튼 스타일이 다릅니다.
*/

import { Alert, Button, View } from "react-native";

export default function MyButton() {
  return (
    <View>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Pressed!')}
      />
    </View>
  )
}