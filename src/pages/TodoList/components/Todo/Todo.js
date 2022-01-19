import { useState } from 'react'
import { ListItem, ListItemText } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { TodoEdit } from '../TodoEdit/TodoEdit'

export const Todo = ({ id, nameTodo, removeTodo, updateTodoInput }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editCurrentTodo, setEditCurrentTodo] = useState(nameTodo)
  return (
    <>
      {isEditing ? (
        <TodoEdit
          id={id}
          setEditCurrentTodo={setEditCurrentTodo}
          editCurrentTodo={editCurrentTodo}
          updateTodoInput={updateTodoInput}
          setIsEditing={setIsEditing}
        />
      ) : (
        <ListItem key={id} disableGutters>
          <ListItemText primary={`${nameTodo}`} />
        </ListItem>
      )}
      <IconButton onClick={() => setIsEditing(true)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={removeTodo}>
        <DeleteIcon />
      </IconButton>
    </>
  )
}
