import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    console.log(bookings);
    console.log(user);

    const url = `http://localhost:5000/bookings?customerEmail=${user?.email}`;
    useEffect(() => {
        if (user?.email) {
            fetch(url,{
                credentials: 'include'
            })
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    }, [url, user?.email])

    const handleDelete = id => {
        const proceed = confirm('Are You Sure?');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "DELETED!",
                            text: "You have Deleted Succesfully",
                            icon: "success"
                        });
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount >0){
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking=> booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings);
                }
            })
    }

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
                                        handleDelete={handleDelete}
                                        handleBookingConfirm={handleBookingConfirm}
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