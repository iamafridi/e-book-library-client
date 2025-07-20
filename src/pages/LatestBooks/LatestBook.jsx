import { useEffect, useState } from "react";
import LatestBookCard from "./LatestBookCard";
import { Link } from "react-router-dom";

const LatestBook = () => {
  // Loading Data
  const [latestBooks, setLatestBooks] = useState([]);

  useEffect(() => {
    fetch("https://e-book-library-server.vercel.app/latestbook")
      .then((res) => res.json())
      .then((data) => setLatestBooks(data));
  }, []);

  return (
    <div className="p-10 -mt-10">
      {/* Section Heading */}
      <div className="mb-5">
        <h3
          className="
            text-3xl font-poppins uppercase text-center
            bg-gradient-to-r from-pink-900 via-gray-500 to-indigo-600
            text-transparent bg-clip-text
            border-l-8 border-pink-600
            p-5 rounded-md
            tracking-wider
            shadow-md shadow-pink-200
            select-none
          "
        >
          Latest Book
        </h3>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
        {latestBooks.map((latestBook) => (
          <LatestBookCard key={latestBook._id} latestBook={latestBook} />
        ))}
      </div>

      {/* See All Button */}
      <div className="flex justify-center">
        <Link to="/showbooks">
          <button
            type="button"
            className="btn bg-gradient-to-r from-pink-800 via-gray-500 to-gray-500 hover:text-orange-200 text-white px-8 py-2 rounded-xl transition"
          >
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestBook;
