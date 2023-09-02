import React from 'react'
import style from './Banner.module.css'
import Card from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



const Banner = (props) => {

  const obj= props.cardObj;

  return (
    <>
    <div className={style.bannerContain}>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {obj.map((element)=>{
        return <SwiperSlide>
          <div className={style.customCard}>
          <Card
          img={element.img}
          type={element.type} 
          text={element.text}
          designation={element.designation}
          para={element.para}
          />
          </div>
          </SwiperSlide>
      })}
    </Swiper>
    </div>
    </>
  )
}


export default Banner