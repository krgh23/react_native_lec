/*
  red   : 1/6 자리 차지
  green : 2/6 자리 차지
  blue  : 3/6 자리 차지
*/

import { View, StyleSheet } from 'react-native';

export default function DynamicFlex() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: 'red' }} />
      <View style={{ flex: 2, backgroundColor: 'green' }} />
      <View style={{ flex: 3, backgroundColor: 'blue' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // 세로 방향으로 배치
  },
});