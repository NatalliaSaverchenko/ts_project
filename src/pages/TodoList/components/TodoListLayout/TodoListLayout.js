import { useSelector } from 'react-redux'
import { List } from '@mui/material'
import { TodoInput } from '../TodoInput/TodoInput'
import { Todo } from '../Todo/Todo'

export const TodoListLayout = ({
  handleChange,
  inputValue,
  createTodo,
  removeTodo,
  updateTodoInput,
}) => {
  const { todos } = useSelector((state) => state.todoListPage)

  return (
    <>
      <TodoInput
        handleChange={handleChange}
        inputValue={inputValue}
        createTodo={createTodo}
      />

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos &&
          todos.map(({ id, nameTodo }) => (
            <Todo
              key={id}
              id={id}
              nameTodo={nameTodo}
              removeTodo={removeTodo}
              updateTodoInput={updateTodoInput}
            />
          ))}
      </List>
    </>
  )
}
