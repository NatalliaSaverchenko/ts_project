export const WorkCard = ({ title, description, image }) => {
  return (
    <>
      <div>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  )
}
