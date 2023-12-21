import Swal from "sweetalert2";


const AddBooks = () => {

const handleAddbooks =e =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const author_name = form.author_name.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const newBook = {
        name,author_name,description,photo
    }
    console.log(newBook);

    // Sending Data to the server 
    fetch('https://e-book-library-server.vercel.app/books',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: "Book Added!",
                text: "Book Added Successfully!",
                icon: "success"
              });
        }
    })
}


    return (
        <div>

            <div className="mx-auto max-w-xl mt-10">
            <h2 className="text-center text-gray-700 font-bold m-10 "> <span className="border border-blue-400 p-5 rounded-se-full rounded-es-full px-10">Book Service : Add Books here </span></h2>

                <form onSubmit={handleAddbooks} className="space-y-5">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-6">
                            <label htmlFor="example7" className="mb-1 block text-sm font-medium text-gray-700">Book Name</label>
                            <input type="text" name="name" id="example7" className="block w-full rounded-md border-gray-300 text-sm p-4 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Book Name Here" />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="example8" className="mb-1 block text-sm font-medium text-gray-700">Author Name</label>
                            <input type="text" name="author_name" id="example8" className="block w-full rounded-md text-sm border-gray-300 p-4 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Author Name" />
                        </div>
                        <div className="col-span-12">
                            <label htmlFor="example9" className="mb-1 block text-sm font-medium text-gray-700">Description</label>
                            <input type="text" name="description" id="example9" className="block text-sm w-full rounded-md border-gray-300 p-4 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Book Description Here" />
                        </div>
                        <div>
                            <fieldset className="w-full space-y-1 text-gray-800">
                                <label htmlFor="files" className="block text-sm font-medium">Attachments</label>
                                <div className="flex">
                                    <input type="file" name="photo" id="files" className="px-8 py-12 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100" />
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