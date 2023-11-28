import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BookNow = () => {
    const service = useLoaderData();
    const { _id, title, description, price, image_url } = service;
    const { user } = useContext(AuthContext)

    const handleBookService = e => {
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

        }
        console.log(booking);

        // Sending Data 
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('Service Added')
                }
            })

    }


    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-gray-700 font-bold m-10 "> <span className="border border-blue-400 p-5 rounded-se-full rounded-es-full px-10">Book Service : {title}</span></h2>

            <section className="p-6 rounded-xl mt-5 bg-gray-500 text-gray-900">
                <form onSubmit={handleBookService} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">{title}</p>
                            <p className="text-xs border rounded-xl p-5 font-semibold">{description}</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-semibold">Name</label>
                                <input id="name" defaultValue={user?.displayName} type="text" placeholder="Name Here" name="name" className="w-full p-2 text-xs rounded-md focus:ring focus:ri focus:ri border border-blue-300 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="date" className="text-sm font-medium">Date</label>
                                <input id="date" type="date" placeholder="date" name="date" className="w-full rounded-md p-2 text-xs focus:ring focus:ri focus:ri border border-blue-300 text-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input id="email" type="email" defaultValue={user?.email} placeholder="Email" name="email" required className="w-full rounded-md text-xs p-2 focus:ring focus:ri focus:ri border border-blue-300 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="time" className="text-sm font-medium">Time</label>
                                <input id="time" type="time" placeholder="Time" name="time" className="w-full rounded-md p-2 text-xs focus:ring focus:ri focus:ri border border-blue-300 text-gray-300" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm font-medium">Address</label>
                                <input id="address" type="text" name="address" placeholder="" className="w-full rounded-md text-xs p-2 focus:ring focus:ri focus:ri border border-blue-300 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm font-medium">City</label>
                                <input id="city" type="text" placeholder="" name="city" className="w-full rounded-md text-xs p-2 focus:ring focus:ri focus:ri border border-blue-300 text-gray-900" />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm font-medium">ZIP / Postal</label>
                                <input id="zip" type="text" name="zip" placeholder="" className="w-full rounded-md text-xs p-2 border focus:ring focus:ri focus:ri border-blue-300 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm font-medium">Due Amount</label>
                                <input id="state" type="text" defaultValue={'$' + price}
                                    name="due" placeholder="" className="w-full rounded-md text-xs p-2 border focus:ring focus:ri focus:ri border-blue-300 text-gray-900" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Additonal Service</p>
                            <p className="text-xs">If you have any request , you can add it here .</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Topic Name" className="text-sm font-medium">Topic Name</label>
                                <input id="Topic_Name" type="text" placeholder="Topic Name" name="topic" className="w-full p-2 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Phone Number" className="text-sm font-medium">Phone Number</label>
                                <input id="Phone_Number" name="phone" type="phone" placeholder="+088" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="Description" className="text-sm font-medium">Description</label>
                                <textarea id="Description" name="describe" placeholder="Describe it here" className="w-full rounded-md p-4 focus:ring focus:ri focus:ri border-gray-300 text-gray-900"></textarea>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="Description" className="text-sm font-medium">Photo</label>
                                <div className="flex items-center space-x-2">
                                    <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-200" />
                                    <button type="button" className="px-4 py-2 border rounded-md border-gray-800">Change</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="m-5 ">
                        <input className="btn  w-full bg-gray-700 text-white hover:text-black" type="submit" value="Confirm Booking" />
                    </div>
                </form>

            </section>


        </div>
    );
};

export default BookNow;