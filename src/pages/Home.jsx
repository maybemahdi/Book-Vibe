import { Link } from "react-router-dom";
import bannerImg from "../assets/pngwing 1 (1).png";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setBooks(data);
    };
    fetchData();
  }, []);
  return (
    <main className="my-10 font-work">
      <section className="text-black p-5 lg:p-24 bg-[#1313130D] rounded-[24px] bg-cover bg-center py-20 my-5">
        <div className="flex gap-8 flex-col lg:flex-row justify-center items-center">
          <div className="basis-[60%] text-center lg:text-left">
            <div className="">
              <h2 className="text-5xl lg:text-6xl font-play font-bold text-gradient mb-6">
                Books to freshen up your bookshelf
              </h2>
              <div className="rounded-lg">
                <Link
                  to={"/listed"}
                  className="my-6 inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white whitespace-no-wrap rounded-md shadow-sm bg-[#23BE0A] focus:outline-none"
                  data-rounded="rounded-md"
                  data-primary="blue-600"
                  data-primary-reset="{}"
                >
                  View The List
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-[40%] flex flex-col items-center justify-center w-full">
            <img className="w-full h-full" src={bannerImg} alt="" />
          </div>
        </div>
      </section>
      <section className="my-10">
        <div className="flex item-center mt-14 mb-8 justify-center">
          <h3 className="font-play text-4xl text-[#131313] font-bold">Books</h3>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {
            books.map(book => <Card key={book.bookId} book={book}></Card>)
          }
        </div>
      </section>
    </main>
  );
};

export default Home;
