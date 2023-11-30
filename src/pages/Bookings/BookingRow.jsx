
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, customerName, customerEmail, customerPhone, BookedDate, BookedTime, price, status } = booking;



    return (
      

        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
            <td className="p-3">
                <p>{_id}</p>
            </td>
            <td className="p-3">
                <p>{customerName}</p>
            </td>
            <td className="p-3">
                <p>{BookedDate}</p>
                <p className="text-gray-600">{BookedTime}</p>
            </td>
            <td className="p-3">
                <p>{customerPhone}</p>
                <p className="text-gray-600">{customerEmail}</p>
            </td>
            <td className="p-3 text-right">
                <p>{price} $</p>
            </td>
            <td className="p-3 text-right">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1">
                        {
                            status === 'confirm' ? <button className="btn btn-sm bg-blue-400"><a>Confirmed</a></button>
                                :
                                <button className="btn btn-sm"><a>Pending</a></button>
                        }
                    </div>
                    <ul className="dropdown-content z-[1] menu p-2 shadow rounded-box w-32 space-y-2">
                        {
                            status === 'confirm' ?
                                <button onClick={() => handleDelete(_id)} className="btn btn-sm  bg-orange-400 text-white "><a>Delete</a></button>
                                :
                           <span className="p-4 space-y-3 rounded-se-xl rounded-es-xl bg-orange-400">
                             <button onClick={() => handleBookingConfirm(_id)} className="btn btn-sm  "><a>Confirm</a></button> 
                             <button onClick={() => handleDelete(_id)} className="btn btn-sm  "><a>Delete</a></button>
                           </span>
}
                    </ul>
                </div>
            </td>
        </tr>

    );
};

export default BookingRow;