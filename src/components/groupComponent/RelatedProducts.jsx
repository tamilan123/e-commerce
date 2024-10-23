import React from 'react';
import product1 from '../../images/product-1.webp';
import product2 from '../../images/product-2.webp';
import product3 from '../../images/product-3.webp';
import product4 from '../../images/product-4.webp';
import Card1 from '../baseComponent/Card1';
const RelatedProducts = () => {

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

  return (
    <>
      <section className='related-product-section py-8'>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="section-title-wrapper flex gap-4 flex-col lg:flex-row justify-center items-center">
            <div className="section-title flex flex-col gap-2 text-center">
              <h1 className='m-0 text-3xl lg:text-4xl font-bold text-black'>Related Products</h1>
              <p className='m-0 text-md text-[#111111cc]'>Follow the most popular trends and get exclusive items from Foesta shop.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 mt-16">
            {
              Array.isArray(data) && data?.map((item, idx) => (
                <Card1 image={item?.image} key={idx} product_name={item?.product_name} price={item?.price}/>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default RelatedProducts;
