import HeroCarousel from "../components/Home/Carousel/HeroCarousel";

import DiscountSection from "../components/Home/Discount/DiscountSection";
import Product from "../components/Products/Products";
import Category from "../components/Home/Categories/Category";
import Features from "../components/Home/Features";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <Category/>
      <Product/>
      <DiscountSection/>
      
    </div>
  );
};

export default Home;