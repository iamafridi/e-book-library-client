import { useLoaderData } from "react-router-dom";

const BookNow = () => {
    const service = useLoaderData();
    const { title ,description } = service;

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-gray-700 font-bold m-10 "> <span className="border border-blue-400 p-5 rounded-se-full rounded-es-full px-10">Book Service : {title}</span></h2>
           
                <section className="p-6 rounded-xl mt-5 bg-gray-500 text-gray-900">
                    <form  action="" className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">{title}</p>
                                <p className="text-xs border rounded-xl p-5 font-semibold">{description}</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="name" className="text-sm font-semibold">Name</label>
                                    <input id="name" type="text" placeholder="Name Here" name="name" className="w-full p-2 text-xs rounded-md focus:ring focus:ri focus:ri border border-blue-300 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="time" className="text-sm">Time</label>
                                    <input id="time" type="text" placeholder="Time" name="time" className="w-full rounded-md p-2 text-xs focus:ring focus:ri focus:ri border border-blue-300 text-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm">Email</label>
                                    <input id="email" type="email" placeholder="Email" name="email" required  className="w-full rounded-md text-xs p-2 focus:ring focus:ri focus:ri border border-blue-300 text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Address</label>
                                    <input id="address" type="text" name="address" placeholder="" className="w-full rounded-md text-xs p-2 focus:ring focus:ri focus:ri border border-blue-300 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="city" className="text-sm">City</label>
                                    <input id="city" type="text" placeholder="" className="w-full rounded-md text-xs p-2 focus:ring focus:ri focus:ri border border-blue-300 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="state" className="text-sm">State / Province</label>
                                    <input id="state" type="text" placeholder="" className="w-full rounded-md text-xs p-2 border focus:ring focus:ri focus:ri border-blue-300 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                    <input id="zip" type="text" placeholder="" className="w-full rounded-md text-xs p-2 border focus:ring focus:ri focus:ri border-blue-300 text-gray-900" />
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
                                    <label htmlFor="Topic Name" className="text-sm">Topic Name</label>
                                    <input id="Topic_Name" type="text" placeholder="Topic Name" className="w-full p-2 rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="Phone Number" className="text-sm">Phone Number</label>
                                    <input id="Phone_Number" type="text" placeholder="+088" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="Description" className="text-sm">Description</label>
                                    <textarea id="Description" placeholder="Describe it here" className="w-full rounded-md p-4 focus:ring focus:ri focus:ri border-gray-300 text-gray-900"></textarea>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="Description" className="text-sm">Photo</label>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-200" />
                                        <button type="button" className="px-4 py-2 border rounded-md border-gray-800">Change</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>
        
        </div>
    );
};

export default BookNow;