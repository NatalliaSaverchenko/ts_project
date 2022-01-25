import { cloneDeep } from 'lodash'
import { handleActions } from 'redux-actions'
import { v4 as uuidv4 } from 'uuid'
import * as actions from '../actions'

const defaultState = {
  todos: [],
}

export const todoListReducer = handleActions(
  {
    [actions.CREATE_TODO]: (state, { payload }) => {
      const newTodo = {
        id: uuidv4(),
        isEditMode: false,
        isCompleted: false,
        text: payload,
      }
      return {
        todos: [newTodo, ...state.todos],
      }
    },
    [actions.DELETE_TODO]: (state, { payload: id }) => {
      const copyTodos = cloneDeep(state.todos)
      const todoIndex = copyTodos.findIndex((todo) => todo.id === id)
      copyTodos.splice(todoIndex, 1)
      return { todos: copyTodos }
    },
    [actions.TOGGLE_EDIT_MODE]: (state, { payload: id }) => {
      const copyTodos = cloneDeep(state.todos)
      const foundTodo = copyTodos.find((todo) => todo.id === id)
      foundTodo.isEditMode = !foundTodo.isEditMode
      return { todos: copyTodos }
    },
    [actions.SAVE_TODO]: (state, { payload }) => {
      const { id, updatedText } = payload
      const copyTodos = cloneDeep(state.todos)
      const foundTodo = copyTodos.find((todo) => todo.id === id)
      foundTodo.text = updatedText
      foundTodo.isEditMode = !foundTodo.isEditMode
      return { todos: copyTodos }
    },
  },
  defaultState
)
