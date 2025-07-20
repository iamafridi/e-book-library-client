const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const {
    _id,
    customerName,
    customerEmail,
    customerPhone,
    BookedDate,
    BookedTime,
    price,
    status,
  } = booking;

  return (
    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 text-sm md:text-base">
      {/* ID */}
      <td className="p-3 break-words max-w-[150px]">
        <p className="truncate">{_id}</p>
      </td>

      {/* Name */}
      <td className="p-3 whitespace-nowrap">
        <p>{customerName}</p>
      </td>

      {/* Date & Time */}
      <td className="p-3">
        <div className="flex flex-col gap-1">
          <p>{BookedDate}</p>
          <p className="text-gray-500 text-sm">{BookedTime}</p>
        </div>
      </td>

      {/* Phone & Email */}
      <td className="p-3">
        <div className="flex flex-col gap-1">
          <p>{customerPhone}</p>
          <p className="text-gray-500 text-sm break-all">{customerEmail}</p>
        </div>
      </td>

      {/* Price */}
      <td className="p-3 text-right whitespace-nowrap">
        <p>{price} $</p>
      </td>

      {/* Actions */}
      <td className="p-3 text-right">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-sm m-1">
            {status === "confirm" ? (
              <span className="text-green-600 font-medium">Confirmed</span>
            ) : (
              <span className="text-yellow-500 font-medium">Pending</span>
            )}
          </div>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-36 space-y-2">
            {status === "confirm" ? (
              <li>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-sm bg-red-500 text-white w-full"
                >
                  Delete
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button
                    onClick={() => handleBookingConfirm(_id)}
                    className="btn btn-sm bg-green-500 text-white w-full"
                  >
                    Confirm
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-sm bg-red-500 text-white w-full"
                  >
                    Delete
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default BookingRow;
