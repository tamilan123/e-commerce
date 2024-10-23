import React from 'react'
import Header from '../components/groupComponent/Header';
import HomeBanner from '../components/groupComponent/HomeBanner';
// import Trendingproduct from '../components/groupComponent/Trendingproduct';
import OffersProducts from '../components/groupComponent/OffersProducts';
import TopCategory from '../components/groupComponent/TopCategory';
import BestSellingProduct from '../components/groupComponent/BestSellingProduct';
import DealOftheDay from '../components/groupComponent/DealOftheDay';
import ShippingInfo from '../components/groupComponent/ShippingInfo';
import Testimonial from '../components/groupComponent/Testimonial';
import Footer from '../components/groupComponent/footer';
import InstaFeed from '../components/groupComponent/InstaFeed';
import ShopBestCollection from '../components/groupComponent/ShopBestCollection';
import Chatbot from '../components/groupComponent/chatBot';

const Home = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      {/* <Trendingproduct /> */}
      <OffersProducts />
      <TopCategory />
      <ShippingInfo />
      <BestSellingProduct />
      <DealOftheDay />
      <Testimonial />
      <ShopBestCollection />
      <InstaFeed />
      <Footer />
      <Chatbot />
    </>
  )
}

export default Home;
