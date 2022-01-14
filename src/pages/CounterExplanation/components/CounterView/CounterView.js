import { memo } from 'react'
export const CounterView = memo(
  ({
    counterValue,
    id,
    handleIncrement,
    handleDecrement,
    deleteCounter,
    resetCounter,
  }) => {
    console.log('renderCounterView')

    return (
      <div style={{ border: '1px solid black', marginBottom: '30px' }}>
        <div>
          <p>Value - {counterValue}</p>
          <p>{counterValue % 2 === 0 ? 'Even' : 'Odd'}</p>
        </div>
        <div>
          <button
            disabled={counterValue === 0}
            onClick={() => handleDecrement(id)}
          >
            -
          </button>
          <button onClick={() => resetCounter(id)}>ResetCounter</button>
          <button onClick={() => handleIncrement(id)}>+</button>
          <button onClick={() => deleteCounter(id)}>DeleteCounter</button>
        </div>
      </div>
    )
  }
)
