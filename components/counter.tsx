import Colors from '@/constants/Colors';
import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export function Counter() {
    let [counter, setCounter] = useState(0);
  
    return (
      <>
        <View style={{ justifyContent: 'space-between' , padding: 15 }}>
          <Button
            title="+"
            onPress={() => {
              setCounter(counter++);
            }}
          ></Button>
          <Text style={{ justifyContent: 'space-between' , padding: 5 }}></Text>
          <Button
            title="-"
            onPress={() => {
              setCounter(counter--);
            }}
          ></Button>
          <Text style={{ justifyContent: 'space-between' , padding: 5 }}></Text>
          <Button
            title="Reset"
            onPress={() => {
              setCounter(0);
            }}
          ></Button>
          <Text style={{color: 'green', padding: 15 }}>{counter}</Text>
        </View>
      </>
    );
  }