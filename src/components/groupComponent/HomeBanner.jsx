import React from 'react';
import bannerBg from '../../images/video-banner.webp';


const HomeBanner = () => {
  return (
    <>
      <section className='home-page-hero-section'>
        <div className="md:px-6 lg:px-8 md:pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row lg:min-h-custom-calc lg:rounded-3xl lg:overflow-hidden">
            <div className='w-full lg:w-1/2 bg-[#f1f1f1] flex flex-col lg:items-center justify-center p-4 py-8 sm:p-6 lg:p-8'>
              <div className="content flex flex-col gap-6 max-w-3xl">
                <p className='m-0 text-black dark:white text-xl'>Save 50% Spring Clearance</p>
                <h2 className='m-0 text-black dark:white text-3xl lg:text-6xl font-bold'>Summer Style Sensations.</h2>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <img src={bannerBg} alt="bannerBg" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default HomeBanner;
