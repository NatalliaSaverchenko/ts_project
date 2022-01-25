import { Fragment } from 'react'
import Todo from '../Todo/Todo'
import TodoEditMode from '../TodoEditMode/TodoEditMode'

export const TodoListLayout = ({
  handleTaskCreate,
  handleChange,
  formValues,
  todos,
  handleEditModeToggle,
  handleSave,
  handleRemove,
}) => {
  return (
    <div>
      <form onSubmit={handleTaskCreate}>
        <input
          type="text"
          name="taskText"
          onChange={handleChange}
          value={formValues.taskText}
        />
        <button type="submit">Create</button>
      </form>

      <div>
        {todos &&
          todos.map(({ id, text, isCompleted, isEditMode }) => (
            <Fragment key={id}>
              {isEditMode ? (
                <TodoEditMode
                  id={id}
                  text={text}
                  handleUndo={handleEditModeToggle}
                  handleSave={handleSave}
                />
              ) : (
                <Todo
                  id={id}
                  taskText={text}
                  handleEdit={handleEditModeToggle}
                  handleRemove={handleRemove}
                />
              )}
            </Fragment>
          ))}
      </div>
    </div>
  )
}
