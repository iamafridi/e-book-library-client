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
    fetch("public/upcomingEvents.json")
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
    <div className="text-center mt-10 mb-10 text-white bg-pink-950 rounded-xl p-6 sm:p-8 md:p-10 max-w-7xl mx-auto">
      <h2
        className="text-3xl sm:text-4xl font-poppins uppercase bg-gradient-to-r from-pink-600 via-gray-100 to-indigo-600 
          text-transparent bg-clip-text border-l-8 border-pink-600 p-4 rounded-md tracking-wider 
          shadow-md shadow-pink-200 select-none mb-8"
      >
        Upcoming Events
      </h2>

      {/* Slide buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 px-2">
        {slidesData.map(({ date, time }, idx) => (
          <button
            key={idx}
            onClick={() => {
              swiperRef.current?.slideTo(idx);
              setActiveIndex(idx);
            }}
            aria-label={`Go to event ${idx + 1} on ${date} at ${time}`}
            className={`btn btn-outline px-4 py-2 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] rounded-md
              transition-colors duration-300 ${activeIndex === idx
                ? "bg-[#5f5257] text-white border-[#A25772]"
                : "text-white border-white"
              }`}
            style={{ touchAction: "manipulation" }}
          >
            {date} <br /> {time}
          </button>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
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
            <div className="lg:m-8 md:m-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

              <div className="lg:m-5">
                <h3 className="text-xl font-semibold mb-3 md:mb-5">{title}</h3>

                {/* Short description on small screens */}
                <p className="text-sm md:hidden text-left max-w-full mx-auto break-words mb-4">
                  {short_description || description}
                </p>

                {/* Full description on medium and up */}
                <p className="hidden md:block text-base text-left max-w-lg mx-0 break-words mb-4">
                  {description}
                </p>

                <p className="lg:text-start font-semibold text-sm mb-1">Date: {date}</p>
                <p className="lg:text-start font-semibold text-sm">Time: {time}</p>
              </div>

              <div>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 md:h-64 object-cover rounded-md shadow-lg mx-auto"
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
