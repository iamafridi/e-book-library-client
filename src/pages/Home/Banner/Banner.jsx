import { Link } from 'react-router-dom';
import video from '../../../assets/video/VideoBackgroundLibrary.mp4';
import img from '../../../assets/image/logo.png';

const Banner = () => {
  return (
    <section className="relative w-full min-h-[5vh] sm:min-h-[55vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center backdrop-brightness-75">
        {/* Logo */}
        <img
          src={img}
          alt="Logo"
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 rounded-full mb-6 shadow-lg"
        />

        {/* Search Bar */}
        <div className="relative w-full max-w-xl px-2">
          <input
            type="text"
            placeholder="Search the book you are looking for..."
            className="w-full px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-md"
          />
          <button
            className="absolute right-3 top-1 sm:top-2.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-pink-950 text-white text-xs sm:text-sm rounded-xl shadow"
            type="button"
          >
            Search
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 mb-10 flex flex-wrap justify-center gap-4 px-2">
          <Link to="/login">
            <button className="bg-gray-950 text-white px-4 sm:px-6 py-2 rounded-xl text-sm hover:bg-gray-700 transition">
              Get Started
            </button>
          </Link>
          <Link to="/about">
            <button className="border border-white text-white px-4 sm:px-6 py-2 rounded-xl text-sm hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
