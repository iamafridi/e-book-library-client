import { useLoaderData } from "react-router-dom";
import ShowbooksCard from "./ShowbooksCard";

const Showbooks = () => {
  const bookss = useLoaderData();

  return (
    <div className="py-20">
      <h2 className="text-center text-gray-700 font-bold my-10">
        <span className="border border-blue-400 p-5 rounded-se-full rounded-es-full px-10 inline-block">
          Total Books Available : {bookss.length}
        </span>
      </h2>

      <div className="grid px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bookss.map((book) => (
          <ShowbooksCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Showbooks;
