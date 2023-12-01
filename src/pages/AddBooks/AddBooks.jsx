

const AddBooks = () => {
    return (
        <div>

            <div className="mx-auto max-w-xl mt-10">
                <form action="" className="space-y-5">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-6">
                            <label htmlFor="example7" className="mb-1 block text-sm font-medium text-gray-700">Book Name</label>
                            <input type="text" name="book" id="example7" className="block w-full rounded-md border-gray-300 text-sm p-4 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Book Name Here" />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="example8" className="mb-1 block text-sm font-medium text-gray-700">Author Name</label>
                            <input type="text" name="author" id="example8" className="block w-full rounded-md text-sm border-gray-300 p-4 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Author Name" />
                        </div>
                        <div className="col-span-12">
                            <label htmlFor="example9" className="mb-1 block text-sm font-medium text-gray-700">Description</label>
                            <input type="text" id="example9" className="block text-sm w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Book Description Here" />
                        </div>
                        <div>
                            <fieldset className="w-full space-y-1 text-gray-800">
                                <label htmlFor="files" className="block text-sm font-medium">Attachments</label>
                                <div className="flex">
                                    <input type="file" name="files" id="files" className="px-8 py-12 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100" />
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-span-12">
                            <input className="btn rounded-lg border w-full px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm bg-gray-700 hover:bg-gray-300 hover:text-black" type="submit" value="Add Book " />
                        </div>

                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddBooks;