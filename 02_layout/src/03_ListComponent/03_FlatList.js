/*
FlatList 컴포넌트
FlatList는 React Native에서 대량의 데이터 목록을 효율적으로 표시하기 위해 제공되는 리스트 컴포넌트입니다. 
FlatList는 스크롤 가능한 리스트를 만들 때, 화면에 보이는 항목만 렌더링하고, 보이지 않는 항목은 메모리에서 제거하는 가상화(virtualization) 기능을 내장하고 있습니다. 
이를 통해 성능을 크게 향상시키며, 무한 스크롤 등 대량 데이터 처리에 적합합니다.

주요 특징
1. 가상화(Virtualization)
  화면에 보이는 데이터만 렌더링하여 메모리 사용량과 렌더링 비용을 줄임.
2. Lazy Loading
  스크롤에 따라 필요한 데이터만 동적으로 불러옴.
3. 대량 데이터에 적합
  데이터 양이 많아도 성능 저하가 적음.
4. ScrollView와의 차이
  ScrollView는 모든 데이터를 한 번에 렌더링하지만, FlatList는 필요한 데이터만 렌더링함.
5. 동적 데이터
  데이터의 추가, 삭제, 갱신이 빈번한 경우에도 효율적으로 동작

주요 속성
1. data
  리스트를 구성할 데이터
2. renderItem
  각 항목을 렌더링하는 함수
3. keyExtractor
  각 항목을 구분하기 위한 고유의 key(중복된 key는 렌더링 오류의 원인이 되므로 주의)
*/

import { use, useCallback } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";

// { length: 50 }  값이 undefined 인 요소가 50개 생성
// (element, index) => {}  콜백이 반환하는 객체로 각 요소를 변경
const DATA = Array.from( { length: 50 }, (element, index) => {
  return {
    id: `${index}`,  // string 타입의 key
    title: `항목 ${index + 1}`,
  }
})

export default function MyFlatList() {
  
    // useCallback을 이용한 함수 Memoization
    const onPress = useCallback((id) => { Alert.alert(`항목 id: ${id}`); }, []);
    const keyExtractor = useCallback((item, index) => item.id, []);  // 의존 배열이 비어 있으면 컴포넌트가 처음 렌더링될때만 생성되고 이후에는 계속 재사용됩니다.
    const renderItem = useCallback(
      ( {item} ) => (
        <TouchableOpacity onPress={() => onPress(item.id)}>
          <View style={{ padding: 16 }}>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ),
      []
    );

    return (
      <FlatList
        data={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    );

}