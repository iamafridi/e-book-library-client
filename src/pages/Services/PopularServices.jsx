import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";

const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://e-book-library-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div className="p-10">
      <div className="mb-5">
        <h3
          className="
            text-3xl font-poppins uppercase text-center
            bg-gradient-to-r from-pink-600 via-gray-600 to-indigo-600
            text-transparent bg-clip-text
            border-l-8 border-pink-600
            p-5 rounded-md
            tracking-wider
            shadow-md shadow-pink-200
            select-none
          "
        >
          Our Services
        </h3>
      </div>
      <div className="grid grid-cols-1 mb-10 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <PopularServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
