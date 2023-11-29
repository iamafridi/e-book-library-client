import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    console.log(bookings);
    console.log(user);

    const url = `http://localhost:5000/bookings?customerEmail=${user?.email}`;
    useEffect(() => {
        if (user?.email) {
            fetch(url)
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    }, [url, user?.email])

    return (
        <div>
            <h3>Bookings : {bookings.length}</h3>
            <section>
                <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                    <h2 className="mb-4 text-2xl font-semibold leadi">Invoices</h2>
                    <div className="overflow-x-auto">
                    <table className="table">
                          
                            <thead className="bg-gray-300">
                                <tr className="text-left">
                                    <th className="p-3">Invoice #</th>
                                    <th className="p-3">Client</th>
                                    <th className="p-3">Issued</th>
                                    <th className="p-3">Due</th>
                                    <th className="p-3 text-right">Amount</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings.map(booking => <BookingRow
                                        key={booking._id}
                                        booking={booking}
                                    ></BookingRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bookings;