import React from 'react';
import Header from '../components/groupComponent/Header';
import ProductDetailsSection from '../components/groupComponent/ProductDetailsSection';
import RelatedProducts from '../components/groupComponent/RelatedProducts';
import RecentViewedProducts from '../components/groupComponent/RecentViewedProducts';
import Footer from '../components/groupComponent/footer';


const ProductDetails = () => {

  return (
    <>
      <Header />
      <ProductDetailsSection />
      <RelatedProducts />
      <RecentViewedProducts />
      <Footer />
    </>
  )
}

export default ProductDetails
