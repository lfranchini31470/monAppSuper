import React from 'react'
import { Button } from 'react-native'
function HelloButton({ title, sayHello } : {title : string, sayHello: any}) {
  return <Button title={title} onPress={sayHello} />
}
export default function App() {
  return (
    <HelloButton
      title={`Click HERE to say hello`}
      sayHello={() => console.warn("Hello")}
    />
  )
}
