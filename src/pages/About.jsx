import { Link } from "react-router-dom";
import bookImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="container my-5 mx-auto md:px-6">
      <section className="mb-32 text-center lg:text-left">
        <div className="px-6 py-12 md:px-12">
          <div className="flex items-center justify-between flex-col lg:flex-row lg:gap-x-12">
            <div className="mb-12 basis-1/2 lg:mb-0">
              <h2 className="my-7 lg:text-5xl text-4xl font-bold leading-tight tracking-tight">
                Who We Are?
                <br />
                <span className="text-success dark:text-success-400">
                  Want to Know!
                </span>
              </h2>
              <p className="mb-5">
                At our platform, we're passionate about literature and fostering
                a community of avid readers. Our About section provides insights
                into our mission, values, and the team behind the scenes. Dive
                into a world of literary exploration, discover new authors, and
                engage in discussions with fellow book enthusiasts. Join us on
                this journey of discovery and enrichment through the power of
                storytelling.
              </p>
              <Link
                to={"/listed"}
                className="mb-2 inline-block rounded bg-success px-12 pt-4 pb-3.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                See Saved Book
              </Link>
            </div>

            <div className="w-full h-3/4 flex items-center justify-center lg:justify-end mt-5 basis-1/2 lg:mb-0">
              <img
                src={bookImg}
                alt=""
                className="lg:w-[80%] w-full rounded-md h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
