import {
  Link,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { getLocal, save, saveForWishlist } from "../utils/local";
import toast from "react-hot-toast";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const selected = books.find((book) => book.bookId === +id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = selected;
  const handleRead = (selectedItem) => {
    save(selectedItem);
  };
  const handleWishlist = (item) => {
    const readItems = getLocal();
    const isExist = readItems.find((i) => i.bookId === item.bookId);
    if (isExist) {
      return toast.error("You cant add read items to Wishlist");
    }
    saveForWishlist(item);
  };
  return (
    <div className="flex lg:flex-row flex-col box-border gap-8 p-6 rounded-[16px] border border-[#13131326]">
      <div className="basis-1/2 rounded-[16px] box-border bg-[#F3F3F3] p-8 lg:h-[500px]">
        <img className="h-[400px] w-[full] mx-auto" src={image} alt="" />
      </div>
      <div className="basis-1/2 flex flex-col gap-4">
        <h3 className="font-play font-bold text-[24px] text-[#131313]">
          {bookName}
        </h3>
        <p className="font-medium text-base text-[#131313CC]">By: {author}</p>
        <hr className="border-dashed" />
        <div className="flex text-[#131313CC] font-medium text-base justify-between">
          <p>{category}</p>
        </div>
        <hr className="border-dashed" />
        <p className="font-bold">
          Review: <span className="font-normal">{review}</span>
        </p>
        <div className="flex gap-4 items-center flex-wrap item-center">
          <span className="text-[#131313] font-bold">Tag</span>
          {tags.map((tag, idx) => (
            <button
              className="text-[#23BE0A] font-medium text-base bg-[#F3F3F3] px-2 py-1 rounded-2xl"
              key={idx}
            >
              {tag}
            </button>
          ))}
        </div>
        <hr className="border-dashed" />
        <p className="flex gap-10 font-medium text-[#131313B2]">
          Number of Pages:{" "}
          <span className="text-[#131313] ml-10 font-bold">{totalPages}</span>
        </p>
        <p className="flex gap-10 font-medium text-[#131313B2]">
          Publisher:{" "}
          <span className="text-[#131313] ml-24 font-bold">{publisher}</span>
        </p>
        <p className="flex gap-10 font-medium text-[#131313B2]">
          Year of Publishing:{" "}
          <span className="text-[#131313] ml-[34px] font-bold">
            {yearOfPublishing}
          </span>
        </p>
        <p className="flex gap-10 font-medium text-[#131313B2]">
          Rating:{" "}
          <span className="text-[#131313] ml-[118px] font-bold">{rating}</span>
        </p>

        <div className="flex gap-4 items-center mt-1">
          <Link
            onClick={() => handleRead(selected)}
            className="inline-flex items-center justify-center px-5 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap hover:bg-[#23BE0A] rounded-md shadow-sm border border-[#23BE0A] hover:outline-none bg-[#ffffff] focus:outline-none"
            data-rounded="rounded-md"
            data-primary="blue-600"
            data-primary-reset="{}"
          >
            Read
          </Link>
          <Link
            onClick={() => handleWishlist(selected)}
            className="inline-flex items-center justify-center px-5 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#59C6D2] rounded-md shadow-sm hover:bg-[#3ea8b4] focus:outline-none"
            data-rounded="rounded-md"
            data-primary="blue-600"
            data-primary-reset="{}"
          >
            Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
