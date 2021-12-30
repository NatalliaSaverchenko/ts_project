import './Button.module.css'
export const Button = ({ text }) => {
  return (
    <>
      <button>
        <span>{text}</span>
      </button>
    </>
  )
}
