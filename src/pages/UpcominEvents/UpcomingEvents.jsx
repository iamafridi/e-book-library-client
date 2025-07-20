import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const UpcomingEvents = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    fetch("/upcomingEvents.json")
      .then((res) => res.json())
      .then((data) => setSlidesData(data.events))
      .catch((err) => console.error("Failed to load events:", err));
  }, []);

  if (slidesData.length === 0) {
    return (
      <div className="text-center text-white p-10 bg-pink-950 rounded-xl max-w-7xl mx-auto">
        Loading events...
      </div>
    );
  }

  return (
    <div className="text-center shadow-lg shadow-pink-800 mt-10 mb-10 text-white bg-pink-950 rounded-xl p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-poppins uppercase bg-gradient-to-r from-pink-600 via-gray-100 to-indigo-600 text-transparent bg-clip-text border-l-8 border-pink-600 p-4 rounded-md tracking-wider shadow-md shadow-pink-200 select-none mb-8">
        Upcoming Events
      </h2>

      {/* Navigation Buttons */}
      <div className="flex  flex-wrap justify-center gap-3 mb-8 px-2">
        {slidesData.map(({ date, time }, idx) => (
          <button
            key={idx}
            onClick={() => {
              swiperRef.current?.slideTo(idx);
              setActiveIndex(idx);
            }}
            className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 
              min-w-[100px] sm:min-w-[140px] md:min-w-[180px]
              text-xs sm:text-sm md:text-base rounded-md border
              transition-colors duration-300 ${activeIndex === idx
                ? "bg-[#5f5257] text-white border-[#A25772]"
                : "text-white border-white"
              }`}
          >
            <span className="font-medium">{date}</span>
            <div className="border-t border-gray-400 my-1 w-full" />
            <span>{time}</span>
          </button>
        ))}
      </div>

      {/* Swiper Slides */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={24}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper max-w-full"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {slidesData.map(({ title, short_description, description, image, date, time }, idx) => (
          <SwiperSlide key={idx} className="p-4">
            <div className="grid grid-cols-1 px-10 md:grid-cols-2 gap-6 items-center">
              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold mb-3 ">{title}</h3>
                <p className="text-sm md:hidden text-left mb-3">{short_description}</p>
                <p className="text-sm hidden md:block text-left mb-3">{description}</p>
                <div className="mt-4 uppercase border-t border-pink-300 p-4 bg-pink-900/40 rounded-lg shadow-inner text-left">
                  <p className="text-sm font-mono text-pink-100 mb-1">
                    📅 <span className="font-semibold">Date:</span> {date}
                  </p>
                  <p className="text-sm font-mono text-pink-100">
                    ⏰ <span className="font-semibold">Time:</span> {time}
                  </p>
                </div>

              </div>
              {/* Image */}
              <div>
                <img
                  src={image}
                  alt={title}
                  className="w-full max-h-64 object-cover rounded-md shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpcomingEvents;
