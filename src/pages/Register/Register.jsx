import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // loading state

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        toast.success("Now you are one of us!");
        form.reset();
        navigate("/"); // redirect to homepage
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || "Registration failed!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-6xl w-full gap-10 py-10">
        
        {/* Left Image - hidden on small screens */}
        <div className="hidden md:block w-full lg:w-1/2">
          <img
            src="https://i.ibb.co/T1pt0NY/loginb-removebg-preview.png"
            alt="Register"
            className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md mx-auto"
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleRegister}
            className="bg-white shadow-md rounded-lg p-6 sm:p-10 space-y-5"
          >
            <h2 className="text-2xl font-bold text-center">Register</h2>

            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" defaultChecked />
                Remember me
              </label>
              <a href="#!" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold py-2 rounded transition duration-200`}
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <div className="flex items-center gap-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-sm text-gray-400">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <div className="space-y-3">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-2 rounded"
              >
                {/* Facebook icon */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Continue with Facebook
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white py-2 rounded"
              >
                {/* Twitter icon */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                </svg>
                Continue with Twitter
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
