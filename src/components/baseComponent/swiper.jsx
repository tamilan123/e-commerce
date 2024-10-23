import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperComponent = ({ cardData, cardComponent, swiperParams }) => {
  return (
    <>
      <Swiper {...swiperParams}>
        {cardData && Array.isArray(cardData) && cardData.map((data, index) => (
          <SwiperSlide key={index}>
            {React.cloneElement(cardComponent, {...data})}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwiperComponent;
