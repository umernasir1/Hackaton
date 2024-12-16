import Image from "next/image";
import { Button } from "@/components/ui/button";
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar'
import HeroSection from "./Components/Hero";
import Products from "./Components/Products"
import LatestProducts from "./Components/LatestProduct";
import ShopexOffer from "./Components/ShopexOffer";
import UniqueFeature from "./Components/UniqueFeature";
import TrendingProducts from "./Components/TrendingProducts";
import Discount from "./Components/Discount";
import TopCategories from "./Components/TopCategories";
import Newslater from "./Components/NewsLater";
import LatestBlogSection from "./Components/LatestBlog";
import Footer from "./Components/Footer"

export default function Home() {
  return (
        <>
    <Topbar/>
    <Navbar/>
    <HeroSection/>
    <Products/>
    <LatestProducts/>
    <ShopexOffer/>
    <UniqueFeature/>
    <TrendingProducts/>
    <Discount/>
    <TopCategories/>
    <Newslater/>
     <LatestBlogSection/>
      <Footer/>
    </>
  );
}
