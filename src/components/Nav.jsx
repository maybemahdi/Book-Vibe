import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="my-4 font-work">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown -ml-7 lg:ml-0">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/listed">Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="/read">Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="font-bold text-[18px] lg:text-[25px]">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-[#131313CC] font-semibold gap-5 text-base px-1">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border focus:bg-[#fff] focus:text-[#23BE0A] text-[#23BE0A] border-[#23BE0A] bg-white"
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border focus:bg-[#fff] focus:text-[#23BE0A] text-[#23BE0A] border-[#23BE0A] bg-white"
                    : ""
                }
                to="/listed"
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border focus:bg-[#fff] focus:text-[#23BE0A] text-[#23BE0A] border-[#23BE0A] bg-white"
                    : ""
                }
                to="/read"
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <NavLink
            to="/"
            className="inline-flex items-center justify-center px-2 py-2 md:px-5 md:py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#23BE0A] rounded-md shadow-sm hover:bg-[#3faa2e] focus:outline-none"
            data-rounded="rounded-md"
            data-primary="blue-600"
            data-primary-reset="{}"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/"
            className="inline-flex items-center justify-center px-2 py-2 md:px-5 md:py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#59C6D2] rounded-md shadow-sm hover:bg-[#3ea8b4] focus:outline-none"
            data-rounded="rounded-md"
            data-primary="blue-600"
            data-primary-reset="{}"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
