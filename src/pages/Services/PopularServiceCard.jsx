import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const PopularServiceCard = ({ service }) => {

    const {_id,title, short_description, date, image_url, time, price } = service
    return (
        <div>
            <div className="bg-white border rounded-xl shadow-sm sm:flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
                    <img className="w-full h-80 absolute top-0 start-0 object-cover" src={image_url} alt="Image Description" />
                </div>
                <div className="flex flex-wrap">
                    <div className="p-4 flex flex-col h-full sm:p-7">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                            {title}
                        </h3>
                        <p className="mt-1 text-gray-500 dark:text-gray-400">
                            {short_description}
                        </p>
                        <div className="mt-5 flex-1 sm:mt-auto">
                            <div className="mt-5">
                                <p className="text-xs text-gray-500 dark:text-gray-500">
                                    Time : {time}
                                </p>
                                <p className="text-xs font-bold text-gray-500 dark:text-gray-500">
                                    Available at : {date}
                                </p>
                                <p className="text-xs font-bold text-gray-500 dark:text-gray-500">
                                    Only : {price} $
                                </p>
                            </div>
                            <div className="mt-2">
                                <Link to={`/booknow/${_id}`}>
                                    <button className="btn btn-sm bg-gray-500 text-white text-xs" type="button">Book Now <FaArrowRight /></button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default PopularServiceCard;