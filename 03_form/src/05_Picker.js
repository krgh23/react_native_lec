/*
select
React Native에서는 웹의 <select> 태그를 대체하는 내장 React Native Component가 없습니다.
대신, 드롭다운 라이브러리를 사용하거나 직접 커스텀해서 사용합니다.

react-native-dropdown-picker 라이브러리는
가장 널리 쓰이는 드롭다운 라이브러리 중 하나입니다.

설치
npm install react-native-dropdown-picker
*/

import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const initItems = [
  { label: '아침', value: 'breakfast' },
  { label: '점심', value: 'lunch' },
  { label: '저녁', value: 'dinner' },
];

export default function Picker() {

  // 열림 상태
  const [ open, setOpen ] = useState(false);

  // 선택된 값
  const [ value, setValue ] = useState('');

  // 항목 리스트
  const [ items, setItems ] = useState(initItems);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="항목 선택"
      listMode="MODAL"
    />
  );

}