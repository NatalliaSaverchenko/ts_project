import { CounterView } from '../CounterView/CounterView'
import { memo } from 'react'
export const CounterLayOut = memo(
  ({
    counters,
    addNewCounter,
    removeAllCounters,
    total,
    handleIncrement,
    handleDecrement,
    deleteCounter,
    resetCounter,
  }) => {
    console.log('renderCounterLayOut')
    return (
      <div>
        <div>
          <p>Total value: {total}</p>
          <p>Amount of counters: {counters.length}</p>

          <button onClick={addNewCounter}>Create</button>
          <button onClick={removeAllCounters}>RemoveAll</button>
        </div>
        <div>
          <div style={{ width: '300px', margin: '0 auto' }}>
            {counters &&
              counters.map(({ id, counterValue }) => (
                <CounterView
                  key={id}
                  id={id}
                  counterValue={counterValue}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  deleteCounter={deleteCounter}
                  resetCounter={resetCounter}
                />
              ))}
          </div>
        </div>
      </div>
    )
  }
)
