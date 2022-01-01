export const WildCard = ({ image, data, title, description, link }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <span>{data}</span>
      <h5>{title}</h5>
      <p>{description}</p>
      <a href>{link}</a>
    </div>
  )
}
