import { handleActions } from 'redux-actions'
import { v4 as uuidv4 } from 'uuid'
import * as actions from '../actions'

const defaultState = {
  todos: [],
}

export const todoListReducer = handleActions(
  {
    [actions.CREATE_TODO]: (state, { payload: todo }) => {
      const newTodo = {
        id: uuidv4(),
        nameTodo: todo,
      }
      const copyTodos = [...state.todos, newTodo]
      return { ...state, todos: copyTodos }
    },
    [actions.DELETE_TODO]: (state, { payload: id }) => {
      const copyTodos = [...state.todos]
      const todoIndex = copyTodos.findIndex((todo) => todo.id === id)
      copyTodos.splice(todoIndex, 1)
      return { ...state, todos: copyTodos }
    },
    [actions.EDIT_TODO]: (state, action) => {
      console.log(action)
      const copyTodos = [...state.todos]
      const { id, nameTodo } = action.payload
      copyTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, nameTodo: nameTodo }
        }
        return todo
      })

      return { ...state, todos: copyTodos }
    },
  },
  defaultState
)
