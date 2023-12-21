import { useLoaderData } from "react-router-dom";
import ShowbooksCard from "./ShowbooksCard";

const Showbooks = () => {
    const bookss = useLoaderData()
    return (
        <div className="m-20">
             <h2 className="text-center text-gray-700 font-bold m-10 "> <span className="border border-blue-400 p-5 rounded-se-full rounded-es-full px-10"> Total Books Available : {bookss.length}</span></h2>

            
            <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3">
                {
                    bookss.map(book=> <ShowbooksCard
                    key={book._id}
                    book={book}
                    ></ShowbooksCard>)
                }
            </div>
        </div>
    );
};

export default Showbooks;