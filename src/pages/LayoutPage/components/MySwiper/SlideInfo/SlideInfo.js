import dogForSlide from '../images/dogForSlide.png'
import instagram from '../images/instagram.svg'
import styles from './SlideInfo.module.css'

const SlideInfo = () => {
  return (
    <div className={styles.cardSlideInfo}>
      <div>
        <img src={dogForSlide} alt="dogForSlide" />
      </div>
      <div>
        <p className={styles.cardSlideInfoText}>
          “Tootsie just received her Mixlab order and she’s so excited for it!
          Within two hours of ordering it got delivered to the house and its
          like she knew it was at the door. She absolutely hates taking her
          medicine but she truly loves her Mixlab box because it’s so
          informative, quick, easy to order but especially because includes a
          new toy each time! Thank you Mixlab for always taking care of her! She
          can’t wait to place her next order now!”
        </p>
        <div className={styles.cardSlideInfoSignatureContent}>
          <img src={instagram} alt="" />

          <p className={styles.cardSlideInfoSignature}>Tootsie, CA</p>
        </div>
      </div>
    </div>
  )
}
export { SlideInfo }
