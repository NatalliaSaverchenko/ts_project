// import { useCallback, useState } from 'react'
import { Form } from '../components'
import { useForm } from '../../../hooks'

export const FormContainer = () => {
  // без использования кастомного хука
  //   const [formValues, setFormValues] = useState({
  //     email: '',
  //     password: '',
  //   })
  //   const handleInputChange = useCallback((e) => {
  //     const { value, name } = e.target

  //     setFormValues((state) => ({
  //       ...state,
  //       [name]: value,
  //     }))
  //   }, [])

  // с использованием кастомного хука
  const { formValues, handleReset, handleChange } = useForm({
    email: '',
    password: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    handleReset()
  }
  return (
    <div>
      <Form
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
