/*
Checkbox 컴포넌트
웹에서의 <input type="checkbox">와 같은 체크박스는 React Native에서 기본적으로 내장된 컴포넌트가 없습니다.
Expo 환경에서는 expo-checkbox 커뮤니티 패키지를 많이 사용합니다.

패키지 설치
npx expo install expo-checkbox

UX 개선 방법
<Checkbox />와 <Text />를 나란히 배치해도, 레이블(텍스트)을 눌렀을 때 체크박스가 토글되지 않습니다.
사용자 경험을 개선하려면, 체크박스와 레이블 전체를 하나의 터치 영역(Pressable 등)으로 감싸는 방식을 사용해야 합니다.
*/

import Checkbox from "expo-checkbox";
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CustomCheckbox() {
  
  const [ isChecked, setIsChecked ] = useState(false);

  return (
    <View>
      <Pressable 
        style={styles.container}
        onPress={() => setIsChecked( prevChecked => !prevChecked )}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setIsChecked}
        />
        <Text>{`${isChecked}`}</Text>
      </Pressable>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  checkbox: {
    marginRight: 8,
  }
});