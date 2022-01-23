export const Form = ({ formValues, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input
            value={formValues.email}
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            value={formValues.password}
            type="password"
            name="password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
