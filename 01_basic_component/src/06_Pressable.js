/*
Pressable 컴포넌트
Pressable은 React Native 0.63 버전부터 도입된 터치 인터랙션 컴포넌트로,
기존의 TouchableOpacity 등 터치 계열 컴포넌트보다 더 세밀하고 유연한 터치 이벤트 제어를 제공합니다.

주요 특징
1. 다양한 터치 상태 감지
  pressed(눌림), hovered(마우스 오버), focused(포커스) 등 다양한 상태를 감지하고, 각 상태에 따라 스타일이나 동작을 자유롭게 지정할 수 있습니다.
2. 커스텀 피드백 구현
  터치 시 불투명도, 배경색, 애니메이션 등 피드백 효과를 직접 구현해야 하며, 기본적으로 자동 피드백(예: opacity 변화)은 제공하지 않습니다.
3. 이벤트 핸들러 다양
  onPress, onPressIn, onPressOut, onLongPress 등 다양한 이벤트를 지원합니다.
4. 터치 영역 세밀 제어
  hitSlop, pressRetentionOffset 등으로 터치 감지 영역을 세밀하게 조정할 수 있습니다.
5. 플랫폼 간 일관성
  iOS, Android 등 다양한 플랫폼에서 일관된 동작을 보장합니다.

Pressable vs TouchableOpacity
  Pressable은 터치 인터랙션을 세밀하게 제어하고, 다양한 상태에 따라 커스텀 피드백을 구현할 수 있는 최신 컴포넌트입니다.
  React Native 공식 문서와 커뮤니티에서는 새로운 프로젝트나 커스텀 버튼 구현 시 Pressable 사용을 권장합니다.
  단, 기본적인 불투명도 변화만 필요하다면 TouchableOpacity도 여전히 간단하게 사용할 수 있습니다.
*/

import { Alert, Pressable, Text } from "react-native";

export default function MyPressable() {
  return (
    
    <Pressable
      
      onPress={() => { Alert.alert('Pressed!') }}
      
      // 1. style 속성에서 pressed 상태 값 사용하기
      //   1) style 속성에 함수를 전달
      //   2) Pressable이 눌렸는지 여부를 알려주는 boolean 타입의 pressed 값을 인자로 받음 (true : 눌린 상태)
      //   3) 객체 또는 객체 배열을 반환
      //     예시1) 객체 반환
      //       style={ ( { pressed } ) => ( { backgroundColor: pressed ? 'yellow' : 'green' } ) }
      //     예시2) 객체 배열 반환
      //       style={ ( { pressed } ) => [ { backgroundColor: pressed ? 'yellow' : 'green' } ] }

        style={ ( { pressed } ) => [ { backgroundColor: pressed ? 'yellow' : 'green' } ] }

      >
      {
        // 2. children(자식 컴포넌트)에서 pressed 상태 값 사용하기
        ( { pressed } ) => {
          return (
            <Text style={{color: pressed ? 'red' : 'blue'}}>
              { pressed ? 'Pressed' : 'Press' }
            </Text>
          )
        }
      }

    </Pressable>
    
  );
}