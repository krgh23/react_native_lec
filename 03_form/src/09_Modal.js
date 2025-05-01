/*
Modal 컴포넌트
React Native에서 Modal은 화면에 오버레이 형태로 표시되는 컴포넌트로, 사용자에게 추가적인 정보나 작업을 요청할 때 사용됩니다. 
iOS와 Android 모두에서 지원되며, 화면의 다른 콘텐츠를 일시적으로 가리면서 사용자 입력에 집중할 수 있도록 도와줍니다.

주요 속성
1. visible
  모달의 가시성을 제어합니다. true일 때 모달이 화면에 표시됩니다.
2. animationType
  모달이 열리고 닫힐 때의 애니메이션 효과를 설정합니다. ("slide", "fade", "none")
3. transparent
  모달 배경을 투명하게 설정합니다. true로 설정하면 배경이 투명해지고, 기본적으로 검은색 반투명 오버레이가 적용됩니다.
4. onRequestClose
  Android에서 뒤로가기 버튼을 눌렀을 때 호출되는 콜백 함수입니다.
5. onShow
  모달이 화면에 나타날 때 호출되는 콜백 함수입니다.
6. onDismiss
  모달이 닫힐 때 호출되는 콜백 함수입니다.
*/

import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

export default function MyModal() {

  const [modalVisible, setModalVisible] = useState(false);

  return (

    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is a Modal!</Text>
            <Pressable
              style={[styles.button, styles.closeButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#f44336',
  },
});