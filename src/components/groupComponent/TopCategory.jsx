import React from 'react';
import banner1 from '../../images/banner-1.webp';
import banner2 from '../../images/banner-2.webp';
import banner3 from '../../images/banner-3.webp';
import SwiperComponent from '../baseComponent/swiper';
import Card3 from '../baseComponent/Card3';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

const TopCategory = () => {
  const data = [
    {
      image: banner1,
      title: "Top's Sales",
      items: 9,
    },
    {
      image: banner2,
      title: "Kid's Sales",
      items: 10,
    },
    {
      image: banner3,
      title: "Men's Sales",
      items: 15,
    },
    {
      image: banner1,
      title: "New Arrivals",
      items: 20,
    },
    {
      image: banner2,
      title: "Women's Sales",
      items: 10,
    },
    {
      image: banner3,
      title: "Trending Sales",
      items: 18,
    },
  ];

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
    className:"categorySwiper",
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
        slidesPerView: 5,
        spaceBetween: 32
      }
    },
  }

  return (
    <section className='top-category-section py-14'>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="section-title-wrapper flex gap-4 flex-col lg:flex-row justify-center items-center">
          <div className="section-title flex flex-col gap-2 text-center">
            <h1 className='m-0 text-3xl lg:text-4xl font-bold text-black'>Top Category</h1>
            <p className='m-0 text-md text-[#111111cc]'>Follow the most popular trends and get exclusive items from Foesta shop.</p>
          </div>
        </div>
        <div className="trending-product mt-16">
          <SwiperComponent
            cardData={data}
            cardComponent={<Card3 />}
            swiperParams={swiperParams}>
          </SwiperComponent>
        </div>
      </div>
    </section>
  )
}

export default TopCategory;
