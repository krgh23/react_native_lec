// RadioButton 커스터마이징하기

import { useState } from "react";
import { View, Pressable, Text } from "react-native";

export default function RadioButtonCustom() {
  
  const [selected, setSelected] = useState(null);

  return (
    <View>
      {
        items.map(item => (
          <Pressable
            key={item}
            style={styles.row}
            onPress={() => setSelected(item)}
          >
            <View style={[
              styles.radio,
              selected === item && styles.radioSelected
            ]}>
              {selected === item && <View style={styles.radioDot} />}
            </View>
            <Text>{item}</Text>
          </Pressable>
        ))
      }
    </View>
  );

}

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 4, 
    paddingTop: 32, 
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#555',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioSelected: { 
    borderColor: '#007AFF' 
  },
  radioDot: {
    width: 10, 
    height: 10, 
    borderRadius: 5, 
    backgroundColor: '#007AFF'
  }
});