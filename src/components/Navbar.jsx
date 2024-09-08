import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home/Home";

function Navbar() {
return (

    // Nav Start............................................................................................
<nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
        >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            >
            <path
                stroke-linecap="round"
                strokeLineJoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
            </svg>

            <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            >
            <path
                stroke-linecap="round"
                strokeLineJoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
            </svg>
        </button>
        </div>
        <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-shrink-0 items-center">
           <Link to = "/">
           <img
            className="h-8 w-auto"
            src="https://roshanabhandari.com.np/wp-content/uploads/2023/11/logo.png"
            alt="Your Company"
            />
           </Link>
        </div>
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 justify-center">
            <Link to="/create" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
            >
                + ADD PRODUCT
            </Link>
           
            <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
                Product Management System
            </a>
            </div>
        </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            >
            <path
                stroke-linecap="round"
                strokeLineJoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
            </svg>
        </button>
        </div>
    </div>
    </div>

    <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
        <Link to="/create" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
        aria-current="page"
        >
        + ADD
        </Link>
        <a
        href="#"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
        Create
        </a>
        <a
        href="#"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
        Read
        </a>
        <a
        href="#"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
        Update
        </a>
        <a
        href="#"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
        Delete
        </a>
    </div>
    </div>
</nav>
//.......................Nav End..................................................................................................
);
}
export default Navbar;
