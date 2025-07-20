import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // for loading state

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const name = user.displayName || "there";
        toast.success(`Welcome back, ${name}!`);
        navigate("/"); // redirect to homepage
      })
      .catch((error) => {
        toast.error(error.message || "Login failed");
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="flex flex-col-reverse lg:flex-row max-w-6xl w-full bg-white rounded-lg overflow-hidden shadow-2xl">
        
        {/* Image (hidden on small) */}
        <div className="hidden md:block w-full lg:w-1/2">
          <img
            src="https://i.ibb.co/bJYjX8J/login-removebg-preview.png"
            alt="Login Illustration"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white py-2 rounded-md transition`}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>

            {/* OR Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Social Logins */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md transition"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              Continue with Facebook
            </button>

            <button
              type="button"
              className="w-full mt-2 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md transition"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 ..." />
              </svg>
              Continue with Twitter
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            New here?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
