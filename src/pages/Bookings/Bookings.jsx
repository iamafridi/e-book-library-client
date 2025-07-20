import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://e-book-library-server.vercel.app/bookings?customerEmail=${user?.email}`;

  useEffect(() => {
    if (user?.email) {
      fetch(url, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }
  }, [url, user?.email]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You Sure?");
    if (proceed) {
      fetch(`https://e-book-library-server.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "DELETED!",
              text: "You have Deleted Succesfully",
              icon: "success",
            });
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`https://e-book-library-server.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h3 className="text-xl sm:text-2xl mt-10 text-center">
        <span className="inline-block border p-3 px-6 bg-pink-100 rounded-full">
          Bookings: {bookings.length}
        </span>
      </h3>

      <section>
        <div className="container mx-auto text-gray-800">
          <h2 className="mb-4 text-lg sm:text-2xl font-semibold">Invoices</h2>

          <div className="overflow-x-auto shadow rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-300 text-gray-700 text-left">
                <tr>
                  <th className="p-3 whitespace-nowrap">Invoice #</th>
                  <th className="p-3 whitespace-nowrap">Client</th>
                  <th className="p-3 whitespace-nowrap">Issued</th>
                  <th className="p-3 whitespace-nowrap">Due</th>
                  <th className="p-3 text-right whitespace-nowrap">Amount</th>
                  <th className="p-3 whitespace-nowrap">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <BookingRow
                    key={booking._id}
                    handleDelete={handleDelete}
                    handleBookingConfirm={handleBookingConfirm}
                    booking={booking}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile fallback message */}
          {bookings.length === 0 && (
            <p className="text-center mt-6 text-sm text-gray-500">
              No bookings found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Bookings;
