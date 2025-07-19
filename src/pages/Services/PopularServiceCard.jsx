import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const PopularServiceCard = ({ service }) => {
  const { _id, title, short_description, date, image_url, time, price } = service;

  return (
    <div className="bg-white dark:bg-slate-900 border dark:border-gray-700 rounded-xl shadow-md flex flex-col sm:flex-row overflow-hidden">
      {/* Image */}
      <div className="relative w-full sm:w-1/3 h-64 sm:h-auto">
        <img
          src={image_url}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col justify-between">
        {/* Title & Description */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {short_description}
          </p>
        </div>

        {/* Meta Info & Button */}
        <div className="mt-5 space-y-2">
          <p className="text-xs text-gray-500">⏰ Time: {time}</p>
          <p className="text-xs font-medium text-gray-500">📅 Available: {date}</p>
          <p className="text-xs font-medium text-gray-500">💵 Only: {price} $</p>

          <Link to={`/booknow/${_id}`}>
            <button
              className="mt-3 btn btn-sm bg-gray-700 hover:bg-pink-950 text-white flex items-center gap-2"
              type="button"
            >
              Book Now <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
