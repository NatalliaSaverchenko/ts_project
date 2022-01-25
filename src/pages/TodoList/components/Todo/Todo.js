import { memo } from 'react'
const Todo = ({ id, taskText, handleRemove, handleComplete, handleEdit }) => {
  return (
    <div>
      <p>{taskText}</p>
      <button onClick={() => handleEdit(id)}>Edit</button>
      <button onClick={() => handleRemove(id)}>Remove</button>
      <button onClick={() => handleComplete(id)}>Complete</button>
    </div>
  )
}
export default memo(Todo)
