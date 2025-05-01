/*
TextInput 컴포넌트
TextInput은 React Native에서 사용자가 텍스트를 입력할 수 있도록 해주는 핵심 컴포넌트입니다. 
웹의 <input type="text">와 유사하며, 로그인, 검색, 폼 입력 등 다양한 곳에서 활용됩니다.

주요 특징 및 Props
1. onChangeText
  사용자가 입력한 텍스트가 변경될 때마다 호출되는 콜백 함수입니다. 입력값을 state로 관리할 때 주로 사용합니다.
2. value
  입력 칸에 표시될 값을 지정합니다. state와 연결해 controlled component로 사용할 수 있습니다.
3. placeholder
  입력 칸이 비어 있을 때 안내 문구를 보여줍니다.
4. style
  입력 칸의 높이, 테두리, 패딩 등 스타일을 지정합니다.
5. keyboardType
  입력 시 표시되는 키보드 타입을 지정합니다. (예: 'default', 'numeric', 'email-address' 등)
6. multiline
  여러 줄 입력을 허용할지 여부를 지정합니다. (예: multiline={true})
7. onSubmitEditing
  사용자가 입력을 완료하고 제출(엔터)할 때 호출되는 콜백입니다.
8. secureTextEntry
  비밀번호를 입력 여부를 결정합니다. true이면 입력한 텍스트가 화면에 점(●)이나 별표(*) 등으로 표시됩니다.
*/

import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function MyTextInput() {
  
  const [ id, setId ] = useState('');
  const [ pw, setPw ] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={pw}
        onChangeText={setPw}
        secureTextEntry={true}  // 비밀번호 입력 활성화
      />
      <Text>아이디 : {id}</Text>
      <Text>비밀번호 : {pw}</Text>
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