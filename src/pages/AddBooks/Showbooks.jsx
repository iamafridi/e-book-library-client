import { useLoaderData } from "react-router-dom";
import ShowbooksCard from "./ShowbooksCard";

const Showbooks = () => {
    const bookss = useLoaderData()
    return (
        <div className="m-20">
            <h2 className="text-3xl "> books : {bookss.length}</h2>
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