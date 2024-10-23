import React from 'react'
import Card5 from '../baseComponent/Card5'
import SwiperComponent from '../baseComponent/swiper'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

const InstaFeed = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const swiperParams = {
    slidesPerView: 1.2,
    spaceBetween:16,
    // autoplay:{
    //   delay: 3000,
    //   // disableOnInteraction: false,
    // },
    speed:500,
    modules: [
      Autoplay,
      EffectFade,
      Navigation
    ],
    className:"testimonialSwiper",
    loop: true,
    breakpoints: {
      440: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  }

  return (
    <section className='py-16'>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="section-title-wrapper flex gap-4 flex-col lg:flex-row justify-center items-center">
          <div className="section-title flex flex-col gap-2 text-center">
            <h1 className='m-0 text-3xl lg:text-4xl font-bold text-black'>@Shop By Instagram</h1>
            <p className='m-0 text-md text-[#111111cc]'>
            Follow the most popular trends and get exclusive items from Foesta shop.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <SwiperComponent
            cardData={data}
            cardComponent={<Card5 />}
            swiperParams={swiperParams}>
          </SwiperComponent>
        </div>
      </div>
    </section>
  )
}

export default InstaFeed
