import React, { useRef } from 'react';
import Card1 from '../baseComponent/Card1';
import SwiperComponent from '../baseComponent/swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import product1 from '../../images/product-1.webp';
import product2 from '../../images/product-2.webp';
import product3 from '../../images/product-3.webp';
import product4 from '../../images/product-4.webp';

const RecentViewedProducts = () => {
  const swiperref = useRef(null)

  const data = [
    {
      image: product1,
      product_name: "Trendy Denim Jacket with Patches",
      price: 100
    },
    {
      image: product2,
      product_name: "Vintage-Inspired Floral Midi Dress",
      price: 1000
    },
    // {
    //   image: product3,
    //   product_name: "Trendy Denim Jacket with Patches",
    //   price: 500
    // },
    // {
    //   image: product4,
    //   product_name: "Statement Geometric Print Scarf",
    //   price: 650
    // },
    {
      image: product1,
      product_name: "Trendy Denim Jacket with Patches",
      price: 100
    },
    {
      image: product2,
      product_name: "Vintage-Inspired Floral Midi Dress",
      price: 1000
    },
    {
      image: product3,
      product_name: "Trendy Denim Jacket with Patches",
      price: 500
    },
    {
      image: product4,
      product_name: "Statement Geometric Print Scarf",
      price: 650
    },
  ];

  const swiperParams = {
    ref: swiperref,
    slidesPerView: 1.2,
    spaceBetween:16,
    autoplay:{
      delay: 3000,
      // disableOnInteraction: false,
    },
    speed:500,
    modules: [
      Autoplay,
      EffectFade,
      Navigation
    ],
    className:"trendingproductSwiper",
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
    <section className='trending-product-section py-8'>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="section-title-wrapper flex gap-4 flex-col lg:flex-row justify-center lg:justify-between items-center">
          <div className="section-title flex flex-col gap-2 text-center lg:text-left">
            <h1 className='m-0 text-3xl lg:text-4xl font-bold text-black'>Recent Viewed</h1>
            <p className='m-0 text-md text-[#111111cc]'>Follow the most popular trends and get exclusive items from Foesta shop.</p>
          </div>
          <div className="flex gap-4">
            <div className="icon group w-14 h-14 rounded-full border-black border-2 flex justify-center items-center cursor-pointer hover:bg-black" onClick={() => {
              swiperref.current.swiper.slidePrev();
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
            </div>
            <div className="icon group w-14 h-14 rounded-full border-black border-2 flex justify-center items-center cursor-pointer hover:bg-black" onClick={() => {
              swiperref.current.swiper.slideNext();
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="trending-product mt-16">
          <SwiperComponent
            cardData={data}
            cardComponent={<Card1 />}
            swiperParams={swiperParams}>
          </SwiperComponent>
        </div>
      </div>
    </section>
  )
}

export default RecentViewedProducts
