import { Swiper, SwiperSlide } from 'swiper/react'
import { SlideInfo } from './SlideInfo/SlideInfo'

import styles from './MySwiper.module.css'
import 'swiper/css'

export const MySwiper = () => {
  return (
    <div className={styles.slideContainer}>
      <h2 className={styles.slideContainerTitle}>Pets love Mixlab!</h2>
      <h4 className={styles.slideContainerSubTitle}>
        See why we're 5 stars on <span>Yelp, Google</span> and
        <span> Facebook</span>:)
      </h4>
      <Swiper
        className="mySwiper"
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <SlideInfo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideInfo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideInfo />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
