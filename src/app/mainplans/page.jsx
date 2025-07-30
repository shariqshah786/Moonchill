"use client";
import Footer from "components/Footer";
import ProductionHouse from "components/ProductionHouse";
import React, { useState } from "react";
import Sidebar from "components/Sidebar";
import MobileNav from "components/MobileNav";
import Mainheader from "components/Mainheader";

const OttLogos = () => {
  const [selectedGenre, setSelectedGenre] = useState("home");
  const platforms = [
    { name: "Amazon Prime", logo: "/amazonprime.png" },
    { name: "Hotstar", logo: "/ott_logos/Hotstar_Logo_NEW colour.png" },
    { name: "Sony LIV", logo: "/ott_logos/sonyliv_logo.png" },
    { name: "Zee5", logo: "/ott_logos/Zee5 premium logo final-01.png" },
    { name: "1 OTT", logo: "/ott_logos/1_OTT.png" },
    { name: "AHA", logo: "/ott_logos/AHA_logo_NEW.png" },
    { name: "Hotstar", logo: "/ott_logos/Hotstar_Logo_NEW colour.png" },
    { name: "Sony LIV", logo: "/ott_logos/sonyliv_logo.png" },
    { name: "Hotstar", logo: "/ott_logos/Hotstar_Logo_NEW colour.png" },
    { name: "Sony LIV", logo: "/ott_logos/sonyliv_logo.png" },
    { name: "Hotstar", logo: "/ott_logos/Hotstar_Logo_NEW colour.png" },
    { name: "Sony LIV", logo: "/ott_logos/sonyliv_logo.png" },
  ];
  const plans = [
    {
      name: "Basic",
      price: "₹199/mo",
      features: ["1 Device", "HD Streaming", "Limited Content"],
      logos: [
        platforms[0],
        platforms[1],
        platforms[2],
        platforms[3],
        platforms[4],
        platforms[5],
      ],
    },
    {
      name: "Premium",
      price: "₹399/mo",
      features: ["3 Devices", "Full HD Streaming", "Popular Content"],
      logos: [
        platforms[0],
        platforms[1],
        platforms[2],
        platforms[3],
        platforms[4],
        platforms[5],
        platforms[6],
        platforms[7],
      ],
    },
    {
      name: "Premium Pro",
      price: "₹599/mo",
      features: ["5 Devices", "4K Streaming", "All Content Access"],
      logos: platforms, // All platforms
    },
  ];
  return (
    <div className="min-h-screen bg-gray-800">
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed">
        <Sidebar
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </div>
      <div className="ml-12">
        <Mainheader />
      </div>

      <div className=" bg-gray-900 flex flex-col items-center px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-300">
          Choose the Best Ott Plans for Your Entertainment0
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {plans.map((plan, index) => (
            <div
              className={`rounded-2xl cursor-pointer shadow-lg p-7 flex flex-col items-center bg-white
                ${
                  plan.name === "premium"
                    ? "border-4 border-yellow-500 scale-105"
                    : "border border-gray-200"
                } 
                hover:shadow-2xl transition-all duration-300`}
              key={index}
            >
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-3xl font-bold mb-4 text-blue-600">
                {plan.price}
              </p>
              <div className=" flex justify-center gap-2 mb-4 flex-wrap">
                {plan.logos.map((platform, idx) => (
                  <img
                    key={idx}
                    src={platform.logo}
                    alt={platform.name + " Logo"}
                    className="w-15 h-15 object-contain rounded bg-gray-50 border hover:scale-110 transition-all duration-300
            ease-in-out "
                  />
                ))}
              </div>
              <ul className="mb-4 text-gray-700 text-sm w-full list-disc pl-5">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="text-white mt-auto px-6 py-2 rounded bg-blue-600 font-medium hover:bg-blue-700">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <ProductionHouse /> */}
      <Footer />
      <div className="md:hidden fixed">
        <MobileNav
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </div>
    </div>
  );
};

export default OttLogos;
