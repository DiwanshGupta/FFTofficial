import React from "react";

const Contact = () => {
  return (
    <div
      className="p-2 container  items-center justify-center  m-auto"
      id="contact"
    >
      <div className="items-center flex font-semibold m-auto text-4xl text-white justify-center">
        Contact
      </div>
      <div className=" flex-col lg:gap-4  m-auto md:flex-row grid grid-rows-1 md:grid-cols-2 items-center justify-center ">
        <div
          className="cursor-pointer items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="hot-line-contact-us-call-center-search-interface_53876-124009.avif"
            alt="contact Image"
            className="m-auto items-center rounded-xl w-96 hidden md:block"
          />
        </div>

        <div className="text-yellow-300 md:w-96  m-auto">
          <div className="text-xl  items-center justify-center">
            <form
              // ref={form}
              // onSubmit={sendEmail}
              className="flex-col flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-3 py-1 text-base bg-yellow-100 border border-gray-300 rounded-md focus:outline-none text-gray-800"
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-3 py-1 text-base bg-yellow-100 border border-gray-300 rounded-md focus:outline-none text-gray-800"
              />
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                className="w-full px-3 py-1 text-base bg-yellow-100 border border-gray-300 rounded-md focus:outline-none text-gray-800"
              />
              <label>Message</label>
              <textarea
                name="message"
                id="message"
                required
                className="w-full my-4 px-3 py-1 text-base bg-yellow-100 border border-gray-300 rounded-md focus:outline-none text-gray-800"
              />
              <button className="button-50 my-3" type="submit" value="Send">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
