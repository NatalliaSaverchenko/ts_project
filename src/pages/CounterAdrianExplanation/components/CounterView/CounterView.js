export const CounterView = ({
  counterValue,
  id,
  handleIncrement,
  handleDecrement,
  deleteCounter,
  resetCounter,
}) => {
  return (
    <div>
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
