/*
Image 컴포넌트
Image는 React Native에서 이미지를 화면에 표시할 때 사용하는 기본 컴포넌트입니다.
웹의 <img>와 유사하며, 다양한 이미지 소스를 지원하고, 스타일링 및 여러 속성을 제공합니다.
iOS의 UIImageView, Android의 ImageView에 매핑됩니다.

주요 특징
1. 다양한 이미지 소스 지원
  로컬(assets 폴더 등) 이미지, 네트워크(URL) 이미지, 기기 내 저장소 이미지 등 다양한 소스를 지원합니다.
  iOS에서는 UIImageView, Android에서는 ImageView로 변환되어 동작합니다.
2. 간단한 사용법
  별도의 패키지 설치 없이 바로 사용할 수 있습니다.
  source prop에 require 또는 { uri: '...' } 형태로 이미지 소스를 지정합니다.
3. 스타일링
  style prop을 통해 width, height, borderRadius 등 다양한 스타일을 적용할 수 있습니다.
4. 반드시 width와 height를 지정해야 이미지가 정상적으로 보입니다.
5. resizeMode
  이미지의 크기 조정 방식을 지정할 수 있습니다.
  주요 값: cover(이미지 너비/높이 중 작은 것을 영역에 맞춤), contain(이미지 너비/높이 중 큰 것을 영역에 맞춤), stretch, repeat, center
6. 이벤트 핸들러
  onLoad, onError, onLoadEnd 등 이미지 로딩 상태를 감지할 수 있는 이벤트를 지원합니다.
7. 플랫폼 호환성
  iOS, Android 모두에서 동일하게 사용할 수 있습니다.
*/

import { Image, View } from "react-native";

export default function MyImage() {
  return (
    <View>

      {/* static 이미지 */}
      <Image source={ require('../assets/favicon.png') } 
             style={{ width: 50, height: 50, }} />

      {/* 네트워크 이미지 */}
      <Image source={ { uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', } }
             style={{ width: 50, height: 50, }} 
             resizeMode="contain" />

    </View>
  );
}