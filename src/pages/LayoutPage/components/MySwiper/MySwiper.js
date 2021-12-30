import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
// export const PetsLove = () => {
//   return <div className="container"></div>
// }
export const MySwiper = () => {
  return (
    <Swiper
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}
