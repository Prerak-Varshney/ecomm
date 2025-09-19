"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroPanel from "./components/HeroPanel";
import RightPanel from "./components/RightPanel";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";
import PRODUCTS_DATA from "./data/ProductData";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="w-screen h-screen flex flex-col items-start justify-start">
      <Navbar />
      <div className={`w-full h-[calc(100vh-3.5rem)] flex`}>
        <Sidebar />
        <div className={`flex-1 h-full bg-background flex flex-col items-center justify-start gap-y-2 py-6 pr-4 overflow-y-auto scrollbar-thin`}>
          <HeroPanel />
          <RightPanel isCentered={false}>
            <span>Filter</span>
          </RightPanel>

          <div className={`w-full h-auto grid grid-cols-3 gap-4 my-4`}>
            {
              PRODUCTS_DATA.map((product, index) => (
                <ProductCard 
                  key={index}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                  discountedPrice={product.discountedPrice}
                  imageUrl={product.imageUrl}
                  rating={product.rating}
                  isHotDeal={product.isHotDeal}
                />
              ))
            }
          </div>
          
          <RightPanel>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={5}
            />
          </RightPanel>
        </div>
      </div>
    </div>
  )
}

export default Home;