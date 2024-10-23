import React from 'react';
import DealBanner from '../../images/countdown-banner.webp';
import OfferPer from '../../images/offer-per.avif';
import { Image } from '@nextui-org/react';
import OfferCounter from '../baseComponent/YearCounter';

const DealOftheDay = () => {
  return (
    <>
      <section className='deal-of-the-day py-16'>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className='w-full lg:w-1/2'>
              <div className="count-image-wrapper relative">
                <Image
                  isZoomed
                  alt="bg-image"
                  src={DealBanner}
                  className='w-full'
                  classNames={{
                    wrapper: "!max-w-full"
                  }}
                />
                <img src={OfferPer} alt="OfferPer" className='mt-4 lg:mt-0 w-28 h-28 lg:absolute top-6 right-[-3.5rem] z-10 object-contain' />
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <div className="deal-content flex flex-col gap-4 lg:gap-6 lg:pl-16">
                <h4 className='m-0 text-2xl font-semibold text-black'>Deal of the day!</h4>
                <h2 className='m-0 text-4xl font-bold text-black'>
                  Modern & Stylist Fashion We Are An Online Store.
                </h2>
                <p className='m-0 text-base font-semibold text-[#111111cc]'>Buy any products & take the gift voucher</p>
                <OfferCounter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DealOftheDay;
