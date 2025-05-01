/*
ScrollView 컴포넌트
ScrollView는 React Native에서 스크롤 가능한 영역을 만들어주는 컴포넌트입니다. 
화면에 표시할 내용이 많아 한 번에 모두 보여줄 수 없을 때, 사용자가 스크롤하여 추가 콘텐츠를 볼 수 있게 해줍니다. 
ScrollView는 여러 개의 자식 컴포넌트를 포함할 수 있으며, 자식 요소들이 화면을 넘어설 경우 자동으로 스크롤이 활성화됩니다.

주요 속성
1. horizontal
  true로 설정 시 가로 스크롤 활성화 (기본값: 세로 스크롤)
2. contentContainerStyle
  내부 콘텐츠 전체에 적용할 스타일
3. showsVerticalScrollIndicator
  세로 스크롤바 표시 여부
4. showsHorizontalScrollIndicator
  가로 스크롤바 표시 여부
5. onScroll
  스크롤 이벤트 핸들러
6. refreshControl
  Pull-to-refresh 기능 추가
7. pagingEnabled
  페이지 단위로 스크롤(스와이프) 가능
8. keyboardShouldPersistTaps
  키보드가 열린 상태에서 탭 처리 방식 제어
9. onContentSizeChange
  콘텐츠 크기 변경 시 콜백

ScrollView의 한계와 FlatList와의 비교
ScrollView는 모든 자식 요소를 한 번에 렌더링합니다.
데이터가 많아질수록 성능 저하(메모리, 렌더링 비용)가 발생할 수 있습니다.
따라서, 대량의 목록 처리나 무한 스크롤 등에는 FlatList를 사용하는 것이 권장됩니다.
FlatList는 화면에 보이는 항목만 동적으로 렌더링하여 성능을 최적화합니다.
*/

import { ScrollView, Text } from "react-native";

// { length: 50 }  값이 undefined 인 요소가 50개 생성
// (element, index) => {}  콜백이 반환하는 객체로 각 요소를 변경
const DATA = Array.from( { length: 50 }, (element, index) => {
  return {
    id: index,
    title: `항목 ${index + 1}`,
  }
})

export default function MyScrollView() {
  return (
    <ScrollView>
      {
        DATA.map((item) => {
          return <Text key={item.id} style={{fontSize: 24}}>{item.title}</Text>
        })
      }
    </ScrollView>
  );
}