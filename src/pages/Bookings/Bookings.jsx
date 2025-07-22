import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // get ID from URL if present
  const [bookings, setBookings] = useState([]);

  // URL changes depending on if we want a single booking or all
  const url = id
    ? `https://e-book-library-server.vercel.app/bookings/${id}`
    : `https://e-book-library-server.vercel.app/bookings?customerEmail=${user?.email}`;

  useEffect(() => {
    if ((!user?.email && !id) || !url) return;

    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (id) {
          // single booking view — wrap in array for map rendering
          setBookings([data]);
        } else {
          // list view
          setBookings(data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch bookings:", error);
        setBookings([]); // clear bookings on error
      });
  }, [url, user?.email, id]);

  const handleDelete = (bookingId) => {
    const proceed = confirm("Are You Sure?");
    if (!proceed) return;

    fetch(`https://e-book-library-server.vercel.app/bookings/${bookingId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "DELETED!",
            text: "You have Deleted Successfully",
            icon: "success",
          });
          const remaining = bookings.filter((booking) => booking._id !== bookingId);
          setBookings(remaining);
        }
      });
  };

  const handleBookingConfirm = (bookingId) => {
    fetch(`https://e-book-library-server.vercel.app/bookings/${bookingId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== bookingId);
          const updated = bookings.find((booking) => booking._id === bookingId);
          if (updated) updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h3 className="text-xl sm:text-2xl mt-10 text-center">
        <span className="inline-block border p-3 px-6 bg-pink-100 rounded-full">
          {id ? "Booking Details" : `Bookings: ${bookings.length}`}
        </span>
      </h3>

      <section>
        <div className="container mx-auto text-gray-800">
          {!id && (
            <h2 className="mb-4 text-lg sm:text-2xl font-semibold">Invoices</h2>
          )}

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
                  {!id && <th className="p-3 whitespace-nowrap">Actions</th>}
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <BookingRow
                      key={booking._id}
                      booking={booking}
                      handleDelete={id ? null : handleDelete}
                      handleBookingConfirm={id ? null : handleBookingConfirm}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan={id ? 6 : 7} className="text-center p-6 text-gray-500">
                      No bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bookings;
