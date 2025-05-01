/*
form
React Native에는 웹의 <form> 태그와 동일한 역할을 하는 내장 컴포넌트가 존재하지 않습니다.
즉, <form>처럼 입력 필드들을 그룹화하고, submit 이벤트로 한 번에 데이터를 처리하는 구조가 네이티브에는 없습니다.

네이티브에서 form 태그의 역할을 대체하는 방법
1. View 컴포넌트로 그룹화
  여러 입력 필드(TextInput, Switch, Picker 등)를 <View>로 감싸서 시각적으로 그룹화합니다.
2. state로 입력값 관리
  각 입력 필드의 값을 state로 관리하고, 버튼(Button, TouchableOpacity 등) 클릭 시 직접 데이터를 수집해 처리합니다.
3. onPress로 제출 처리
  "제출" 버튼의 onPress 이벤트에서 모든 입력값을 모아 검증 및 전송 로직을 실행합니다.
*/

import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export default function Form() {
  
  const [ user, setUser ] = useState({
    id: '',
    pw: '',
  })
  
  const onChangeHandler = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    })
  }

  const onPressHandler = () => {
    // 입력 검증 및 로그인 요청
    Alert.alert(`아이디: ${user.id}, 비밀번호: ${user.pw}`);
  }

  return(
    <View>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={user.id}
        onChangeText={(inputId) => onChangeHandler("id", inputId)}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={user.pw}
        onChangeText={(inputPw) => onChangeHandler("pw", inputPw)}
        secureTextEntry={true}  // 비밀번호 입력 활성화
      />
      <Button
        title="로그인"
        onPress={onPressHandler}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  input: {
    heigth: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 5,
  }
})