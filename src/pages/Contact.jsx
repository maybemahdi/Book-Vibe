import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div>
      <div className="flex font-work w-full items-center justify-center rounded-xl my-6 h-[550px] bg-[#38d76f]">
        <div
          className="rounded-lg text-card-foreground"
          data-v0-t="card"
        >
          <div className="p-6 lg:w-[85%] w-full mx-auto bg-[#38d76f] shadow-sm">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold">Contact Us</h2>
                <p className="text-[#434242]">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="first-name"
                        placeholder="Enter your first name" required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  {/* More form inputs */}
                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="Message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex w-full h-40 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="last-name"
                      placeholder="Write Your FeedBack Here" required
                    ></textarea>
                  </div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-800 text-white"
                    type="submit"
                  >
                    Send message
                  </button>
                </div>
              </form>{" "}
              {/* Form ends here */}
            </div>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Thanks for your Feedback!</h3>
          <p className="py-4">We will Connect you soon!!!</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Contact;
