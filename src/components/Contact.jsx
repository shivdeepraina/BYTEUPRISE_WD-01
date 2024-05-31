const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-500 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl inline font-bold border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col w-full md:w-1/2 md:pr-8">
            <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
            <p className="mb-2">
              <strong>Email:</strong> shivdeepraina@gmail.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>600-605-3750
            </p>
            <p className="mb-2">
              <strong>Address:</strong> Treli P.O Naran District Samba,184141,
              J&K.
            </p>
          </div>
          <form
            action="https://getform.io/f/pbqgdxrb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              type="text"
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-blue-500 to-cyan-500 rounded-md px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
