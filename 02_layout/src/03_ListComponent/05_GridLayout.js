import { useCallback } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";

// { length: 50 }  값이 undefined 인 요소가 50개 생성
// (element, index) => {}  콜백이 반환하는 객체로 각 요소를 변경
const DATA = Array.from( { length: 50 }, (element, index) => {
  return {
    id: `${index}`,  // string 타입의 key
    title: `항목 ${index + 1}`,
  }
})

export default function GridLayout() {

  const onPress = useCallback((id) => { Alert.alert(`항목 id: ${id}`); }, []);
  const keyExtractor = useCallback((item, index) => item.id, []);  // 의존 배열이 비어 있으면 컴포넌트가 처음 렌더링될때만 생성되고 이후에는 계속 재사용됩니다.
  const renderItem = useCallback(
    ( {item} ) => (
      <TouchableOpacity style={styles.item} onPress={() => onPress(item.id)}>
        <View>
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
      numColumns={3}  // 3열 그리드 화면이 완성됩니다.
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />
  );

}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'yellow',
    height: 100,
  }
})