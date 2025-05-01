/*
Radio Button
React Native에서는 웹의 <input type="radio"> 태그를 대체하는 내장 React Native Component가 없습니다.
대신, 간단한 사용법을 제공하는 커뮤니티 라이브러리를 활용하여 라디오 버튼을 구현할 수 있습니다.

설치
npm install react-native-radio-buttons-group
*/

import { useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";

const radioButtonData = [
  { id: 1, label: '남자', value: 'man', },
  { id: 2, label: '여자', value: 'woman', },
];

export default function RadioButtonLibrary() {

  const [ id, setId ] = useState(0);

  return (
    <RadioGroup
      radioButtons={radioButtonData}
      onPress={setId}
      selectedId={id}
      layout="row"  // row : 가로 배치, column : 세로 배치
    />
  );

}