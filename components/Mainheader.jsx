import React from "react";

const Mainheader = () => {
  return (
    <>
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-black text-white text-center py-2 px-4 text-sm rounded-lg ">
          <a href="/mainplans" target="_blank" className="text-white">
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
      </div>
    </>
  );
};

export default Mainheader;
