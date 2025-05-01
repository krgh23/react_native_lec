/*
VirtualizedList 컴포넌트
VirtualizedList는 React Native에서 대량의 데이터를 효율적으로 렌더링하기 위해 설계된 리스트 컴포넌트입니다.
FlatList와 SectionList의 기반이 되는 저수준 컴포넌트로, 화면에 보이는 아이템만 렌더링하고, 나머지는 메모리와 성능을 위해 가상화(virtualization) 처리합니다.

주요 특징
1. 가상화(Virtualization)
  화면에 보이는 일부 아이템만 실제로 렌더링하고, 나머지는 빈 공간으로 대체하여 메모리 사용량과 렌더링 비용을 크게 줄입니다.
2. 성능 최적화
  대량의 데이터(수천~수만 개)도 효율적으로 처리할 수 있습니다.
3. 유연성
  FlatList, SectionList보다 더 세밀한 제어가 필요할 때 직접 사용할 수 있습니다. 예를 들어, 데이터가 일반 배열이 아닌 불변 객체(immutable data)일 때 적합합니다.
4. 커스텀 데이터 구조 지원
  getItem, getItemCount 등 커스텀 데이터 접근 방식을 지정할 수 있습니다.

FlatList, SectionList와의 관계
컴포넌트        설명
-----------------------------------------------------------------------------
FlatList        VirtualizedList를 기반으로 한 고수준 컴포넌트. 단일 배열 지원
SectionList     VirtualizedList를 기반으로 한 고수준 컴포넌트. 섹션 지원
VirtualizedList FlatList, SectionList의 베이스. 더 많은 유연성 제공
-----------------------------------------------------------------------------

결론
일반적으로 FlatList, SectionList가 더 사용하기 쉽고 문서화가 잘 되어 있으므로, 특별한 이유가 없다면 이 두 컴포넌트를 사용하는 것이 좋습니다.
*/

import { useCallback } from "react";
import { Text, View, VirtualizedList } from "react-native";

// { length: 50 }  값이 undefined 인 요소가 50개 생성
// (element, index) => {}  콜백이 반환하는 객체로 각 요소를 변경
const DATA = Array.from( { length: 50 }, (element, index) => {
  return {
    id: `${index}`,  // string 타입의 key
    title: `항목 ${index + 1}`,
  }
})

export default function MyVirtualizedList() {

  // useCallback을 이용한 함수 Memoization
  const keyExtractor = useCallback((item, index) => item.id, []);  // 의존 배열이 비어 있으면 컴포넌트가 처음 렌더링될때만 생성되고 이후에는 계속 재사용됩니다.
  const getItem = useCallback((data, index) => data[index], []);
  const getItemCount = useCallback((data) => data.length, []);
  const renderItem = useCallback(
    ( {item} ) => (
      <View style={{ padding: 16 }}>
        <Text>{item.title}</Text>
      </View>
    ),
    []
  );

  return (
    <VirtualizedList
      data={DATA}
      keyExtractor={keyExtractor}
      getItem={getItem}
      getItemCount={getItemCount}
      renderItem={renderItem}
    />
  );

}