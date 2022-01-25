import { memo } from 'react'
import { useForm } from '../../../../hooks/useForm'
const TodoEditMode = ({ id, text, handleSave, handleUndo }) => {
  const { formValues, handleChange } = useForm({ editableText: text })
  return (
    <>
      <input
        type="text"
        value={formValues.editableText}
        name="editableText"
        onChange={handleChange}
      />
      <button
        onClick={() => handleSave({ id, updatedText: formValues.editableText })}
      >
        Save
      </button>
      <button onClick={() => handleUndo(id)}>Undo</button>
    </>
  )
}
export default memo(TodoEditMode)
