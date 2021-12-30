const CounterView = ({
  countValue,
  handleIncrement,
  handleDecrement,
  parityTipe,
}) => {
  return (
    <div>
      <div>Value: {countValue}</div>
      <div>{parityTipe}</div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}
export { CounterView }
