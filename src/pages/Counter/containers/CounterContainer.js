// import { useState } from 'react'
// import { CounterView } from '../components/CounterView/CounterView'

// export const CounterContainer = () => {
//   const [count, setCount] = useState(0)
//   const [parityType, setParityType] = useState(true)
//   const handleIncrement = () => {
//     setCount((prevState) => prevState + 1)
//     setParityType(!parityType)
//   }
//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount((prevState) => prevState - 1)
//       setParityType(!parityType)
//     }
//   }
//   return (
//     <CounterView
//       countValue={count}
//       parityType={parityType ? 'Even' : 'Odd'}
//       handleIncrement={handleIncrement}
//       handleDecrement={handleDecrement}
//     />
//   )
// }
