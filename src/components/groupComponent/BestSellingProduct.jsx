import React from 'react';
import product1 from '../../images/product-1.webp';
import product2 from '../../images/product-2.webp';
import product3 from '../../images/product-3.webp';
import product4 from '../../images/product-4.webp';
import { Image } from '@nextui-org/react';
// import Card1 from '../baseComponent/Card1';

const BestSellingProduct = () => {

  const data = [
    {
      image: product1,
      name: "Trendy Denim Jacket with Patches",
      price: 100
    },
    {
      image: product2,
      name: "Vintage-Inspired Floral Midi Dress",
      price: 1000
    },
    {
      image: product3,
      name: "Trendy Denim Jacket with Patches",
      price: 500
    },
    {
      image: product4,
      name: "Statement Geometric Print Scarf",
      price: 650
    },
    {
      image: product1,
      name: "Trendy Denim Jacket with Patches",
      price: 100
    },
    {
      image: product2,
      name: "Vintage-Inspired Floral Midi Dress",
      price: 1000
    },
    {
      image: product3,
      name: "Trendy Denim Jacket with Patches",
      price: 500
    },
    {
      image: product4,
      name: "Statement Geometric Print Scarf",
      price: 650
    },
  ];

  return (
    <>
      <section className='best-selling-product-section py-14'>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="section-title-wrapper flex gap-4 flex-col lg:flex-row justify-center items-center">
            <div className="section-title flex flex-col gap-2 text-center">
              <h1 className='m-0 text-3xl lg:text-4xl font-bold text-black'>Best Selling Product</h1>
              <p className='m-0 text-md text-[#111111cc]'>Follow the most popular trends and get exclusive items from Foesta shop.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16">
            {
              Array.isArray(data) && data?.map((item, idx) => (
                <div className="card card1 cursor-pointer" key={idx}>
                  <div className="card-image">
                    <Image
                      alt={item?.name}
                      src={item?.image}
                      // className="w-full h-auto"
                    />
                  </div>
                  <div className="card-content py-4 flex flex-col gap-2">
                    <h6 className='m-0 text-black text-base font-semibold'>
                      {item?.name}
                    </h6>
                    <p className='m-0 text-zinc-700 text-sm font-medium'>Rs.{item?.price}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default BestSellingProduct;
