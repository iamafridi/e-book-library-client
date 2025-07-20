import { Link, NavLink } from "react-router-dom";
import logo from "../../../../src/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-gray-500" : "hover:text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-gray-500" : "hover:text-black"
          }
        >
          About Us
        </NavLink>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className="hover:text-pink-500">Dashboard</summary>
          <ul className="p-2 text-black rounded-box w-52">
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><Link to="/showbooks">All Books</Link></li>
            <li><Link to="/addbooks">Add Books</Link></li>
          </ul>
        </details>
      </li>
    </>
  );



  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="navbar px-4 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn border-0 bg-pink-950 text-white lg:hidden hover:bg-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black rounded-box w-52 bg-pink-100"
            >
              <li className="flex justify-center mb-2 lg:hidden">
                <Link to="/">
                  <img src={logo} alt="Elara" className="w-10 h-10 rounded-full" />
                </Link>
              </li>
              {navLinks}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost normal-case text-xl hidden lg:flex">
            <img src={logo} alt="Elara" className="w-20 h-12 bg-gray-300 rounded-full" />
          </Link>
        </div>

        <div className="navbar-center text-black hidden lg:flex">
          <ul className="menu menu-horizontal bg-gray-300 rounded-full px-10">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <button
              onClick={handleLogout}
              className="btn bg-gray-300 hover:bg-gray-900 text-black hover:text-white rounded-full px-6"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn bg-gray-300 hover:bg-gray-900 text-black hover:text-white rounded-full px-6">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
