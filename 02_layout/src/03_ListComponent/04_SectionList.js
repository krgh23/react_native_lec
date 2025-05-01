/*
SectionList 컴포넌트
SectionList는 React Native에서 데이터를 여러 섹션(그룹)으로 나누어, 각 섹션별로 헤더와 아이템을 함께 표시할 수 있는 리스트 컴포넌트입니다.
iOS의 UITableView의 grouped 스타일과 유사하게, 논리적으로 구분된 목록(예: 카테고리별 연락처, 분류별 상품 목록 등)을 구현할 때 유용하게 사용됩니다.

주요 특징
1. 섹션별 데이터 표시
  데이터를 섹션 단위로 그룹화하여 각 섹션마다 헤더(타이틀)와 아이템 목록을 함께 렌더링.
2. FlatList와 유사한 API
  renderItem, keyExtractor 등 FlatList와 거의 동일한 방식으로 사용 가능.
3. 대량 데이터 최적화
  FlatList처럼 가상화(virtualization)를 지원해, 많은 데이터를 효율적으로 처리.
4. 다양한 커스터마이징
  섹션 헤더, 아이템, 구분선, 리스트 헤더/푸터 등 다양한 부분을 커스터마이징할 수 있음.

데이터 구조
- title: 섹션의 헤더로 사용할 문자열
- data: 해당 섹션에 속하는 아이템 배열
- 예시)
  const DATA = [
    {
      title: 'Breakfast',
      data: ['Sandwich', 'Burger'],
    },
    {
      title: 'Lunch',
      data: ['Pizza', 'Pasta', 'Meat'],
    },
  ]
*/

import { SectionList, Text, View } from "react-native";

const DATA = [
  {
    title: 'Breakfast',
    data: ['Sandwich', 'Burger'],
  },
  {
    title: 'Lunch',
    data: ['Pizza', 'Pasta', 'Meat'],
  },
]

export default function MySectionList() {
  return (
    <SectionList
      keyExtractor={(item, index) => index}
      renderItem={( {item} ) => (
        <View style={{padding: 16}}>
          <Text>{item}</Text>
        </View>
      )}
      sections={DATA}
      renderSectionHeader={( { section: { title } } ) => ( <Text style={{backgroundColor: 'gray'}}>{title}</Text> )}
    />
  );
}