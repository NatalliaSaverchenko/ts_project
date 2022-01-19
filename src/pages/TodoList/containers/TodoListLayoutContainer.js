import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CREATE_TODO, DELETE_TODO, EDIT_TODO } from '../actions'
import { TodoListLayout } from '../components/TodoListLayout/TodoListLayout'

export const TodoListLayoutContainer = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const createTodo = () => {
    dispatch(CREATE_TODO(inputValue))
    setInputValue('')
  }
  const removeTodo = (id) => {
    dispatch(DELETE_TODO(id))
  }

  const updateTodoInput = (id, nameTodo) => {
    dispatch(EDIT_TODO({ id, nameTodo }))
  }
  return (
    <TodoListLayout
      inputValue={inputValue}
      handleChange={handleChange}
      createTodo={createTodo}
      removeTodo={removeTodo}
      updateTodoInput={updateTodoInput}
    />
  )
}
