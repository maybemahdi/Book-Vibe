import { getLocal } from "../utils/local";
import DefaultCard from "./DefaultCard";

const Read = () => {
  const readBooks = getLocal();
  return (
    <div className="my-10 gap-5 flex flex-col">
      {readBooks.map((book) => (
        <DefaultCard key={book.bookId} book={book}></DefaultCard>
      ))}
    </div>
  );
};

export default Read;
