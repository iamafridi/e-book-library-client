import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    console.log(bookings);
    console.log(user);

    const url =`http://localhost:5000/bookings?customerEmail=${user?.email}`;
    useEffect(() => {
      if(user?.email){
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
      }
    }, [url,user?.email])

    return (
        <div>
            <h3>Bookings : {bookings.length}</h3>
        </div>
    );
};

export default Bookings;