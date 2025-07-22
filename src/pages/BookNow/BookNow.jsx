import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const BookNow = () => {
  const service = useLoaderData();
  const { _id, title, description, price, image_url } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const address = form.address.value;
    const time = form.time.value;
    const city = form.city.value;
    const zip = form.zip.value;
    const due = form.due.value;
    const topic = form.topic.value;
    const phone = form.phone.value;
    const describe = form.describe.value;

    const booking = {
      service: title,
      serviceId: _id,
      image_url,
      customerName: name,
      email,
      customerPhone: phone,
      BookedDate: date,
      BookedTime: time,
      customerAddress: address,
      customerCity: city,
      customerZipPostal: zip,
      price: price,
      customerDueAmount: due,
      customerAdditionalTopic: topic,
      customerAdditionalDescription: describe,
    };

    // Sending Data
    fetch("https://e-book-library-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // Using toast instead of alert for better UX
          toast.success("Service Added Successfully!");
          form.reset();
        }
      })
      .catch((err) => {
        toast.error("Failed to add service. Please try again.");
        console.error(err);
      });
  };

  return (
    <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-gray-700 font-bold mb-8">
        <span className="border border-blue-400 p-5 rounded-se-full rounded-es-full px-10 inline-block">
          Book Service: {title}
        </span>
      </h2>

      <section className="p-6 rounded-xl bg-gray-500 text-gray-900">
        <form
          onSubmit={handleBookService}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 md:col-span-1">
              <p className="font-medium">{title}</p>
              <p className="text-xs border rounded-xl p-5 font-semibold">
                {description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:col-span-3">
              <div className="col-span-full">
                <label htmlFor="name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  defaultValue={user?.displayName || ""}
                  type="text"
                  placeholder="Name Here"
                  name="name"
                  required
                  className="w-full p-2 text-xs rounded-md focus:outline-none focus:ring focus:ring-blue-400 border border-blue-300 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="date" className="text-sm font-medium">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  required
                  className="w-full rounded-md p-2 text-xs focus:outline-none focus:ring focus:ring-blue-400 border border-blue-300 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue={user?.email || ""}
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full rounded-md text-xs p-2 focus:outline-none focus:ring focus:ring-blue-400 border border-blue-300 text-gray-900"
                  readOnly
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="time" className="text-sm font-medium">
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  required
                  className="w-full rounded-md p-2 text-xs focus:outline-none focus:ring focus:ring-blue-400 border border-blue-300 text-gray-900"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="address" className="text-sm font-medium">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  required
                  className="w-full rounded-md text-xs p-2 focus:outline-none focus:ring focus:ring-blue-400 border border-blue-300 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm font-medium">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  name="city"
                  required
                  className="w-full rounded-md text-xs p-2 focus:outline-none focus:ring focus:ring-blue-400 border border-blue-300 text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm font-medium">
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  placeholder=""
                  required
                  className="w-full rounded-md text-xs p-2 focus:outline-none focus:ring focus:ring-blue-400 border border-blue-300 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="due" className="text-sm font-medium">
                  Due Amount
                </label>
                <input
                  id="due"
                  type="text"
                  defaultValue={"$" + price}
                  name="due"
                  placeholder=""
                  required
                  className="w-full rounded-md text-xs p-2 focus:outline-none focus:ring focus:ring-blue-400 border border-blue-300 text-gray-900"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 md:col-span-1">
              <p className="font-medium">Additional Service</p>
              <p className="text-xs">
                If you have any request, you can add it here.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:col-span-3">
              <div className="col-span-full">
                <label htmlFor="topic" className="text-sm font-medium">
                  Topic Name
                </label>
                <input
                  id="topic"
                  type="text"
                  placeholder="Topic Name"
                  name="topic"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400 border border-gray-300 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+088"
                  className="w-full rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400 border border-gray-300 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="describe" className="text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="describe"
                  name="describe"
                  placeholder="Describe it here"
                  className="w-full rounded-md p-4 focus:outline-none focus:ring focus:ring-blue-400 border border-gray-300 text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label className="text-sm font-medium block mb-2">Photo</label>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://source.unsplash.com/30x30/?random"
                    alt="User"
                    className="w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-200"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md border-gray-800"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </fieldset>

          <div className="m-5">
            <input
              className="btn w-full bg-gray-700 text-white hover:text-black cursor-pointer"
              type="submit"
              value="Confirm Booking"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookNow;
