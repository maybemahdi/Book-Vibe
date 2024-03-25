import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Card = ({ book }) => {
  const {
    bookId,
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
  } = book;
  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="flex box-border flex-col gap-4 p-6 rounded-[16px] border border-[#13131326]">
        <div className="rounded-[16px] box-border bg-[#F3F3F3] p-8 h-[230px]">
          <img className="h-[166px] w-[134px] mx-auto" src={image} alt="" />
        </div>
        <div className="flex gap-4 flex-wrap item-center">
          {tags.map((tag, idx) => (
            <button
              className="text-[#23BE0A] font-medium text-base bg-[#F3F3F3] px-2 py-1 rounded-2xl"
              key={idx}
            >
              {tag}
            </button>
          ))}
        </div>
        <h3 className="font-play font-bold text-[24px] text-[#131313]">
          {bookName}
        </h3>
        <p className="font-medium text-base text-[#131313CC]">By: {author}</p>
        <hr className="border-dashed" />
        <div className="flex text-[#131313CC] font-medium text-base justify-between">
          <p>{category}</p>
          <p className="flex gap-2 items-center">
            {rating} <CiStar size={20} />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
