import HeroCarousel from "../components/Carousel/HeroCarousel";
import Features from "../components/Features";
import DiscountSection from "../components/Discount/DiscountSection";
import Product from "../components/Products/Products";
import Category from "../components/Categories/Category";

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