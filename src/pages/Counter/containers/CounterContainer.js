import { useState } from 'react'
import { CounterView } from '../components/CounterView/CounterView'

export const CounterContainer = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)
  }
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1)
    }
  }
  return (
    <CounterView
      countValue={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  )
}
