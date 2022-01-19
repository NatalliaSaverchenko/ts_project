import { Input, Button } from '@mui/material'

export const TodoEdit = ({
  id,
  setEditCurrentTodo,
  editCurrentTodo,
  updateTodoInput,
  setIsEditing,
}) => {
  const update = () => {
    updateTodoInput(id, editCurrentTodo)
    setIsEditing(false)
  }
  return (
    <>
      <Input
        onChange={(e) => setEditCurrentTodo(e.target.value)}
        value={editCurrentTodo}
      />
      <Button onClick={update} variant="contained">
        Save
      </Button>
      <Button variant="contained">Cancel</Button>
    </>
  )
}
