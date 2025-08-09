"use client";
import Sidebar from "components/Sidebar";
import HeroSlider from "components/HeroSlider";
import ContentSlider from "components/ContentSlider";
import Footer from "components/Footer";
import MobileNav from "components/MobileNav";
import { useState } from "react";
import ProductionHouse from "components/ProductionHouse";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("home");
  return (
    <>
      <div className="flex min-h-screen bg-gray-900">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        </div>

        {/* Main content  */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-black text-white text-center py-2 px-4 text-sm rounded-lg ">
            <a href="/plans" target="_blank" className="text-white">
              <span>Claim your voucher here</span>
              <span className="ml-2">→</span>
            </a>
          </div>
          <header className="flex items-center justify-between p-4 md:p-6 bg-gray-900 border-b border-gray-800">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl">🌙</span>
                <h1 className="text-xl md:text-2xl font-bold text-white">
                  moonchill
                </h1>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700  px-6 rounded-lg font-semibold h-10 text-sm md:text-base">
              <a href="/plans" target="_blank" className="text-white">
                Buy Plans
              </a>
            </button>
          </header>

          {/* main content area  */}
          <main className="p-4 md:p-6 pb-20 md:pb-6">
            <HeroSlider />
            {/* logos  */}
            <ProductionHouse />

            {/* content slider  */}
            <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
              <ContentSlider title="Top movies" type="movies" />
              <ContentSlider title="Top series" type="tv" />
              <ContentSlider title="Top rated movies" type="topMovies" />
              <ContentSlider
                title="Top Upcoming movies"
                type="getUpcomingMovies"
              />
            </div>
            <div className="mt-10">{/* <ProductionHouse /> */}</div>
          </main>

          {/* footer  */}
          <Footer />
        </div>

        <div className="md:hidden">
          <MobileNav
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        </div>
      </div>
    </>
  );
};

export default App;
