/*
Switch 컴포넌트
Switch는 React Native에서 제공하는 토글(ON/OFF) 스위치 컴포넌트입니다.
사용자가 두 가지 상태(예: 활성/비활성, 켜기/끄기) 중 하나를 선택해야 할 때 주로 사용합니다.
예시로 자동 로그인, 다크 모드, 알림 설정 등 앱의 다양한 기능을 켜고 끄는 UI에 활용됩니다.

주요 특징
1. 이진 상태(ON/OFF) 전환
  사용자가 스위치를 터치하면 상태가 즉시 반전됩니다.
2. 플랫폼별 네이티브 디자인
  iOS와 Android에서 각각의 네이티브 스타일로 표시됩니다.(디자인을 통일하려면 커스텀 구현 필요.)
3. 간단한 사용법
  value(현재 상태), onValueChange(상태 변경 함수)만 지정하면 바로 사용할 수 있습니다
*/

import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function MySwitch() {
  
  const [ isDark, setIsDark ] = useState(false);

  // 상태 isDark에 따른 스타일 설정
  const backgroundColor = isDark ? '#222' : '#eee';
  const textColor = isDark ? '#eee' : '#222';
  
  return (
    <View style={ [ styles.background, { backgroundColor } ] }>
      <Text style={ [ styles.text, { color: textColor } ] }>
        { isDark ? 'Dark Mode' : 'Light Mode' }
      </Text>
      <Switch
        value={isDark}
        onValueChange={() => setIsDark(!isDark)}
        trackColor={ isDark ? '#888' : '#888' }  // 스위치 배경색
        thumbColor={ isDark ? '#008' : '#ddd' }  // 썸 색
      />
    </View>
  );

}

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})