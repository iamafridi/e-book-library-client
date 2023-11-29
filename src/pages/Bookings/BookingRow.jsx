
const BookingRow = ({ booking }) => {
    const { _id, customerName, customerEmail, customerPhone, BookedDate, BookedTime, price } = booking;


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
                    <p>{price}</p>
                </td>
                <td className="p-3 text-right">
                <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn m-1">Status</div>
                            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Pending</a></li>
                                <li><a>Done</a></li>
                            </ul>
                        </div>
                </td>
            </tr>
        
    );
};

export default BookingRow;