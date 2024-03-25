import { CiLocationOn } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";

const DefaultCard = ({ book }) => {
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
    <div className="flex box-border flex-col lg:flex-row gap-8 p-6 rounded-[16px] border border-[#13131326]">
      <div className="rounded-[16px] box-border bg-[#F3F3F3] p-8 h-[230px]">
        <img className="h-[166px] w-[134px] mx-auto" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-play font-bold text-[24px] text-[#131313]">
          {bookName}
        </h3>
        <p className="font-medium text-base text-[#131313CC]">By: {author}</p>

        <div className="flex items-center font-bold gap-4 flex-wrap item-center">
          Tags:
          {tags.map((tag, idx) => (
            <button
              className="text-[#23BE0A] font-medium text-base bg-[#F3F3F3] px-2 py-1 rounded-2xl"
              key={idx}
            >
              {tag}
            </button>
          ))}
          <span className="font-medium ml-4 flex gap-2 items-center text-[#131313CC]">
            {" "}
            <CiLocationOn size={20} /> Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <div className="flex text-[#13131399] font-normal text-base justify-start gap-8">
          <p className="flex items-center gap-2">
            <GoPeople />
            Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2">
            <GrDocumentText />
            Pages: {totalPages}
          </p>
        </div>
        <hr className="border-dashed" />
        <div className="flex flex-wrap item-center gap-4">
          <p className="bg-[#328EFF26] p-2 rounded-[30px] text-[#328EFF] text-base font-normal">
            Category: {category}
          </p>
          <p className="bg-[#FFAC3326] p-2 rounded-[30px] text-[#FFAC33] text-base font-normal">
            Rating: {rating}
          </p>
          <Link to={`/book-details/${bookId}`}>
            <button className="bg-[#23BE0A] hover:bg-[#41ad30] p-2 rounded-[30px] text-[#ffffff] text-base font-normal">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DefaultCard;
