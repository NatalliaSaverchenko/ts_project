import { Input, Button } from '@mui/material'

export const TodoInput = ({ handleChange, inputValue, createTodo }) => {
  return (
    <>
      <Input
        onChange={handleChange}
        value={inputValue}
        placeholder="Enter your task..."
      />
      <Button onClick={createTodo} variant="contained">
        Add
      </Button>
    </>
  )
}
