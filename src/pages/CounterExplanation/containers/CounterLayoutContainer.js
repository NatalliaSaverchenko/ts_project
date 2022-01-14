import { useCallback, useState } from 'react'
import { CounterLayOut } from '../components/CounterLayOut/CounterLayOut'

import { v4 as uuidv4 } from 'uuid'

export const CounterLayoutContainer = () => {
  const [counters, setCounters] = useState([])

  const addNewCounter = useCallback(() => {
    const newCounter = {
      id: uuidv4(),
      counterValue: 0,
    }
    // const countersCopy = [...counters, newCounter]
    setCounters((state) => [...state, newCounter])
  }, [])

  const removeAllCounters = () => {
    setCounters([])
  }

  const handleIncrement = useCallback((id) => {
    setCounters((state) => {
      return state.map((counter) => ({
        ...counter,
        counterValue:
          counter.id === id ? counter.counterValue + 1 : counter.counterValue,
      }))
    })
  }, [])

  const handleDecrement = useCallback((id) => {
    setCounters((state) => {
      return state.map((counter) => ({
        ...counter,
        counterValue:
          counter.id === id && counter.counterValue > 0
            ? counter.counterValue - 1
            : counter.counterValue,
      }))
    })
  }, [])
  // const handleDecrement = (id) => {
  //   const countersCopy = [...counters]
  //   const foundCounter = countersCopy.find((counter) => counter.id === id)
  //   foundCounter.counterValue =
  //     foundCounter.counterValue > 1 ? foundCounter.counterValue - 1 : 0
  //   setCounters(countersCopy)
  // }
  const deleteCounter = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = [...state]
      const foundCounterIndex = countersCopy.findIndex(
        (counter) => counter.id === id
      )
      countersCopy.splice(foundCounterIndex, 1)
      return countersCopy
    })
  }, [])
  const resetCounter = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = [...state]
      const foundCounter = countersCopy.find((counter) => counter.id === id)
      const foundCounterCopy = { ...foundCounter, counterValue: 0 }
      const foundCounterIndex = countersCopy.findIndex(
        (counter) => counter.id === id
      )
      countersCopy.splice(foundCounterIndex, 1, foundCounterCopy)
      return countersCopy
    })
  }, [])
  const totalSum = (counters) => {
    return counters.reduce((result, counter) => {
      result = result + counter.counterValue
      return result
    }, 0)
  }
  let total = totalSum(counters)

  return (
    <div>
      <CounterLayOut
        counters={counters}
        addNewCounter={addNewCounter}
        removeAllCounters={removeAllCounters}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        deleteCounter={deleteCounter}
        resetCounter={resetCounter}
        total={total}
      />
    </div>
  )
}
