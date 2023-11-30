import { Link } from "react-router-dom";
import errorimg from "../../assets/image/error.png"

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full sm:p-16 bg-gray-50 text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img src={errorimg} alt="" />
                    <p className="text-3xl">Looks like our services are currently offline</p>
                    <Link to='/'>
                    <button rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-orange-600 text-gray-50">Back to homepage</button></Link>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;