import { Button } from '../Button/Button'
import photo from './images/photo.png'
export const Veterinaians = () => {
  return (
    <>
      <div>
        <img src={photo} alt="" />
      </div>
      <div>
        <h4>For Veterinarians</h4>
        <h2>We're here to support you and your practice</h2>
        <p>
          Mixlab offers a simple, fast, reliable (and fun) home delivery
          pharmacy service for your clients. No more delays, no more
          miscommunications, no more grumpy pets. It’s time to partner with a
          pharmacy that cares about customer experience as much as you do.
        </p>
        <Button text={`Learn More`} />
      </div>
    </>
  )
}
