import { HiPlay } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center p-4 md:p-8">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight">
            LIONSGATE PLAY YOUR FRIENDS & NEIGHBOURS
          </h1>
          <p className="text-gray-200 text-sm md:text-lg mb-4 md:mb-6 max-w-lg hidden md:block">
            Experience the latest blockbuster with stunning visuals and immersive storytelling
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm md:text-base">
            <HiPlay className="w-4 h-4 md:w-5 md:h-5" />
            Watch now
          </button>
        </div>
      </div>
      
      {/* Thumbnail Previews - Hidden on mobile */}
      <div className="absolute bottom-4 right-4 flex gap-2 hidden md:flex">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-16 h-20 bg-gray-700 rounded-md border-2 border-white/20 hover:border-white/40 transition-colors duration-200 cursor-pointer overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero; 