import { useEffect, useState } from "react";
import LatestBookCard from "./LatestBookCard";

const LatestBook = () => {
    // Loading Data
    const [latestBooks, setLatestBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/latestbook')
            .then(res => res.json())
            .then(data => setLatestBooks(data))
    }, [])

    return (
        <div>
            <div className="p-10">
            <div className="m-5 mb-16  ">
                <h3 className="text-3xl font-bold text-center text-black">Popular Services</h3>
            </div>
            <div className="grid grid-cols-2  mb-10 items-center  justify-center md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                            latestBooks.map(latestBook => <LatestBookCard
                                key={latestBook._id}
                                latestBook={latestBook}
                            ></LatestBookCard>)
                        }
            </div>
        </div>
        </div>
    );
};

export default LatestBook;