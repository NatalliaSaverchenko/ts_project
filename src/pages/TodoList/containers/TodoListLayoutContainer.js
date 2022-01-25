import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CREATE_TODO,
  TOGGLE_EDIT_MODE,
  SAVE_TODO,
  DELETE_TODO,
} from '../actions'
import { useForm } from '../../../hooks/useForm'
import { TodoListLayout } from '../components/TodoListLayout/TodoListLayout'

export const TodoListLayoutContainer = () => {
  const dispatch = useDispatch()
  const { formValues, handleChange, handleReset } = useForm({ taskText: '' })
  const { todos } = useSelector((state) => state.todoListPage)

  const handleTaskCreate = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(CREATE_TODO(formValues.taskText))
      handleReset()
    },
    [dispatch, formValues.taskText, handleReset]
  )

  const handleEditModeToggle = useCallback(
    (id) => {
      dispatch(TOGGLE_EDIT_MODE(id))
    },
    [dispatch]
  )
  const handleSave = useCallback(
    ({ id, updatedText }) => {
      dispatch(SAVE_TODO({ id, updatedText }))
    },
    [dispatch]
  )
  const handleRemove = useCallback(
    (id) => {
      dispatch(DELETE_TODO(id))
    },
    [dispatch]
  )
  return (
    <TodoListLayout
      formValues={formValues}
      handleTaskCreate={handleTaskCreate}
      handleChange={handleChange}
      todos={todos}
      handleEditModeToggle={handleEditModeToggle}
      handleSave={handleSave}
      handleRemove={handleRemove}
    />
  )
}
