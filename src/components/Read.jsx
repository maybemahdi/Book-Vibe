import { useEffect, useState } from "react";
import { getLocal } from "../utils/local";
import DefaultCard from "./DefaultCard";
import { IoIosArrowDown } from "react-icons/io";
const Read = () => {
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const readBooks = getLocal();
    setFilter(readBooks);
  }, []);
  const handleFilter = (filterText) => {
    if (filterText === "rating") {
      setFilter(books => [...books].sort((a, b) => b.rating - a.rating));
    } else if (filterText === "pages") {
      setFilter(books => [...books].sort((a, b) => b.totalPages - a.totalPages));
    } else if(filterText === 'year'){
      setFilter(books => [...books].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing));
    }
  };
  
  return (
    <div>
      <div className="dropdown w-fit mx-auto -mt-[120px] h-20 md:-mt-[80px] flex my-10 items-center justify-center">
        <div
          tabIndex={0}
          role="button"
          className="px-7 py-2 flex items-center rounded-lg text-white font-bold gap-2 bg-green-600"
        >
          Short By <IoIosArrowDown />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content p-1 mt-44 z-[1] menu shadow bg-[#e3e3e3] rounded-box"
        >
          <li onClick={() => handleFilter("rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleFilter("pages")}>
            <a>Number of Pages</a>
          </li>
          <li onClick={() => handleFilter("year")}>
            <a>Publisher Year</a>
          </li>
        </ul>
      </div>
      <div className="lg:my-10 my-14 gap-5 flex flex-col">
        {filter.map((book) => (
          <DefaultCard key={book.bookId} book={book}></DefaultCard>
        ))}
      </div>
    </div>
  );
};

export default Read;
