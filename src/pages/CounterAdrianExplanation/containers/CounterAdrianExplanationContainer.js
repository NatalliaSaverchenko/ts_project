import { useCallback, useState } from 'react'
import { CounterView } from '../components/CounterView/CounterView'

import { v4 as uuidv4 } from 'uuid'

export const CounterAdrianExplanationContainer = () => {
  const [counters, setCounters] = useState([])
  const addNewCounter = useCallback(() => {
    let newCounter = {
      id: uuidv4(),
      counterValue: 0,
    }
    const countersCopy = [...counters, newCounter]
    setCounters(countersCopy)
  }, [counters])
  const removeAllCounters = () => {
    setCounters([])
  }

  const handleIncrement = (id) => {
    const countersCopy = [...counters]
    const foundCounter = countersCopy.find((counter) => counter.id === id)
    foundCounter.counterValue = foundCounter.counterValue + 1
    setCounters(countersCopy)
  }
  const handleDecrement = (id) => {
    const countersCopy = [...counters]
    const foundCounter = countersCopy.find((counter) => counter.id === id)
    foundCounter.counterValue =
      foundCounter.counterValue > 1 ? foundCounter.counterValue - 1 : 0
    setCounters(countersCopy)
  }
  const deleteCounter = (id) => {
    const countersCopy = [...counters]
    const foundCounterIndex = countersCopy.findIndex(
      (counter) => counter.id === id
    )
    countersCopy.splice(foundCounterIndex, 1)
    setCounters(countersCopy)
  }
  const resetCounter = (id) => {
    const countersCopy = [...counters]
    const foundCounter = countersCopy.find((counter) => counter.id === id)
    const foundCounterCopy = { ...foundCounter, counterValue: 0 }
    const foundCounterIndex = countersCopy.findIndex(
      (counter) => counter.id === id
    )
    countersCopy.splice(foundCounterIndex, 1, foundCounterCopy)
    setCounters(countersCopy)
  }
  const totalSum = (counters) => {
    return counters.reduce((result, counter) => {
      result = result + counter.counterValue
      return result
    }, 0)
  }
  let total = totalSum(counters)

  return (
    <div>
      <div>
        <p>{total}</p>
        <button onClick={addNewCounter}>Create</button>
        <button onClick={removeAllCounters}>RemoveAll</button>
      </div>
      {counters &&
        counters.map(({ id, counterValue }) => (
          <li key={id}>
            <CounterView
              id={id}
              counterValue={counterValue}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              deleteCounter={deleteCounter}
              resetCounter={resetCounter}
            />
          </li>
        ))}
    </div>
  )
}
