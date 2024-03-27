import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native'
import { View } from './Themed';
function HelloButton({ title, sayHello }: { title: string, sayHello: any }) {
  return <Button title={title} onPress={sayHello} />
}
const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;
const [count, setCount] = useState(0)
const countEvery3 = Math.floor(count / 3)
useEffect(() => {
  console.log(countEvery3)
}, [countEvery3])

export default function App2() {
  const [diceRolls, setDiceRolls] = useState([0]);
  return (
    <><><HelloButton
      title={`Click HERE to say hello`}
      sayHello={() => console.warn("Hello")} /><View>
        <Button title="Roll dice!" onPress={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()]);
        } } />
        {diceRolls.map((diceRoll: any, index: any) => (
          <Text style={{ fontSize: 24 }} key={index}>
            {diceRoll}
          </Text>
        ))}
      </View></><Button title={`Increment ${count}`} onPress={() => {
        setCount(count + 1);
      } } /></>
  )
}


