import React from 'react';
import icon1 from '../../images/icons/transport.png';
import icon2 from '../../images/icons/down-payment.png';
import icon3 from '../../images/icons/product-return.png';
import icon4 from '../../images/icons/shopping-bag.png';


const ShippingInfo = () => {
  return (
    <section className='py-14'>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
          <div className="info-card flex items-center gap-4 p-4 lg:p-6 rounded-lg border border-gray-200">
            <div className="icon w-20 h-20 rounded-full border border-black flex items-center justify-center">
              <img src={icon1} alt="icon" className='w-12 h-12 object-contain' />
            </div>
            <div className="content flex flex-col gap-1.5 w-[calc(100%-6rem)]">
              <h6 className='m-0 text-lg text-black font-medium'>Worldwide Shipping</h6>
              <p className='m-0 text-md text-[#111111cc]'>World Wide Free Shipping.</p>
            </div>
          </div>
          <div className="info-card flex items-center gap-4 p-4 lg:p-6 rounded-lg border border-gray-200">
            <div className="icon w-20 h-20 rounded-full border border-black flex items-center justify-center">
              <img src={icon2} alt="icon" className='w-12 h-12 object-contain' />
            </div>
            <div className="content flex flex-col gap-1.5 w-[calc(100%-6rem)]">
              <h6 className='m-0 text-lg text-black font-medium'>Secured Payment</h6>
              <p className='m-0 text-md text-[#111111cc]'>Safe & Secured Payments</p>
            </div>
          </div>
          <div className="info-card flex items-center gap-4 p-4 lg:p-6 rounded-lg border border-gray-200">
            <div className="icon w-20 h-20 rounded-full border border-black flex items-center justify-center">
              <img src={icon3} alt="icon" className='w-12 h-12 object-contain' />
            </div>
            <div className="content flex flex-col gap-1.5 w-[calc(100%-6rem)]">
              <h6 className='m-0 text-lg text-black font-medium'>30-Days Free Returns</h6>
              <p className='m-0 text-md text-[#111111cc]'>Within 30 Days for an Exchange</p>
            </div>
          </div>
          <div className="info-card flex items-center gap-4 p-4 lg:p-6 rounded-lg border border-gray-200">
            <div className="icon w-20 h-20 rounded-full border border-black flex items-center justify-center">
              <img src={icon4} alt="icon" className='w-12 h-12 object-contain' />
            </div>
            <div className="content flex flex-col gap-1.5 w-[calc(100%-6rem)]">
              <h6 className='m-0 text-lg text-black font-medium'>Surprise Gift</h6>
              <p className='m-0 text-md text-[#111111cc]'>Free gift cards & vouchers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShippingInfo;
