import { Link, NavLink } from "react-router-dom";
import logo from '../../../../src/logo.png'


const Navbar = () => {

    const navlink = <>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/about' >About Us</NavLink></li>
    </>

    return (
        <div className="h-14">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                            <li>
                                <a>Dashboard</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    {/* <button>elara</button> */}
                    {/* <link rel="icon" type="image/svg+xml" href="/logo.png" /> */}
                    <Link to='/' className="btn btn-ghost w-22 h-16 hover:bg-orange-400 rounded-full text-xl">
                        <img className="w-22 h-16 " src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                        <li tabIndex={0}>
                            <details>
                                <summary>Dashboard</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link to='/login'>
                    <button className="btn rounded-es-full rounded-se-full bg-red-400 hover:text-black text-white">Login</button>
             </Link>
                      </div>
            </div>
        </div>
    );
};

export default Navbar;