/*
  Flexbox의 주요 속성

  1. flexDirection: 자식 요소의 배치 방향을 설정합니다.
  row: 가로 방향 (왼쪽에서 오른쪽)
  row-reverse: 가로 반대 방향
  column (기본값): 세로 방향 (위에서 아래)
  column-reverse: 세로 반대 방향

  2. justifyContent: 주 축(main axis)에서 자식 요소의 정렬 방식을 설정합니다.
  flex-start (기본값): 시작점 정렬
  center: 중앙 정렬
  flex-end: 끝점 정렬
  space-between: 요소 간 동일한 간격
  space-around: 요소 주변에 동일한 여백

  3. alignItems: 교차 축(cross axis)에서 자식 요소의 정렬 방식을 설정합니다.
  flex-start: 시작점 정렬
  center: 중앙 정렬
  flex-end: 끝점 정렬
  stretch (기본값): 요소를 축에 맞게 늘림

  4. flex: 자식 요소가 부모 컨테이너 내에서 차지할 공간 비율을 정의합니다.
*/

import { View, StyleSheet } from 'react-native';

export default function Flexbox() {
  return (
    <View style={styles.container}>
      <View style={styles.redBox} />
      <View style={styles.greenBox} />
      <View style={styles.blueBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // 가로 방향으로 배치
    justifyContent: 'space-between', // 요소 간 동일한 간격(가로 간격)
    alignItems: 'center', // 세로 중앙 정렬
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});