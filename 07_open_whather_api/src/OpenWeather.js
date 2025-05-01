/*
OpenWeather API를 활용한 현재 위치의 날씨 확인 앱

설치할 라이브러리
npm install axios
npx expo install expo-location
npx expo install react-native-safe-area-context

iOS의 경우 app.json 파일에 아래와 같은 위치 권한 설명을 추가
{
  "expo": {
    "ios": {
      "infoPlist": {
        "NSLocationWhenInUseUsageDescription": "앱이 위치 정보를 사용하는 이유를 설명하세요.",
        "NSLocationAlwaysUsageDescription": "앱이 백그라운드에서 위치 정보를 사용하는 이유를 설명하세요."
      }
    }
  }
}
*/

import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from 'react-native';
import axios from 'axios';

export default function OpenWeather() {

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 여기에 본인의 OpenWeather API 키를 입력하세요.
  const API_KEY = '본인_OpenWeather_API_KEY';

  // 현재 위치의 경도/위도를 가져오는 함수
  const getPosition = async () => {
    // 위치 권한 요청
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      console.log('위치 권한 허용');
    } else {
      console.log('위치 권한 거부');
      throw new Error('Permission to access location was denied');
    }
    // 현재 위치 가져오기
    const location = await Location.getCurrentPositionAsync({});
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  }

  // 전달 받은 위치(경도/위도)의 날씨를 반환하는 함수
  const getWeather = async (currentPosition) => {
    const lat = currentPosition.latitude;
    const lon = currentPosition.longitude;
    // 파라미터 lat : 위도
    // 파라미터 lon : 경도
    // 파라미터 units=metric : 결과를 섭씨로 반환하기를 요청
    const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    return response.data;
  }

  // 날씨를 받아와 setWeatherData 상태 변수에 저장하는 함수
  const fetchWeatherData = async () => {
    try {
      const currentPosition = await getPosition();
      const jsonData = await getWeather(currentPosition);
      // console.log(jsonData);  응답 데이터 확인
      setWeatherData(jsonData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if(loading) {
    return <Text>Loading...</Text>;
  }

  if(error) {
    return <Text>Error: {error.message}</Text>;
  }

  // 앱 화면에 출력할 정보 파싱
  const temperature = weatherData.current.temp;
  const weather = weatherData.current.weather;
  const weatherDescription = weather[0].description;
  const weatherIcon = weather[0].icon;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>오늘의 날씨</Text>
        <Text style={styles.temperature}>{temperature}°C</Text>
        <Text style={styles.description}>{weatherDescription}</Text>
        <Image
          style={styles.icon}
          source={{ uri: `http://openweathermap.org/img/wn/${weatherIcon}@2x.png` }}
        />
      </View>
      <View>
        <Pressable 
          style={styles.button}
          onPress={() => fetchWeatherData()}>
          <Text>Update Weather</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );

}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginVertical: 10,
  },
  icon: {
    width: 100,
    height: 100,
  },
  button: {
    width: 150,
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  }
});