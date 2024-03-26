import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="my-10">
      <div className="flex font-work item-center my-5 rounded-xl p-[33px] bg-[#1313130D] justify-center">
        <h3 className="text-[#131313] font-bold text-[28px]">Books</h3>
      </div>
      
      <div className="flex mt-20 md:mt-10 items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
        <Link
          to={""}
          onClick={() => setTabIndex(0)}
          className={`flex rounded-t-md items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } border-gray-400 text-gray-400`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to={"wishlist"}
          onClick={() => setTabIndex(1)}
          className={`flex rounded-t-md items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } border-gray-400 text-gray-400`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ListedBooks;
