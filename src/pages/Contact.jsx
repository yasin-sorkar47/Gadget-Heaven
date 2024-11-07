const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("thank's for submitting.");
  };

  return (
    <section id="contact" className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 max-w-2xl mx-auto text-center space-y-4 text-gray-700">
          <p>
            Email:{" "}
            <a className="text-blue-600 hover:underline">
              yacinsorkar@gmail.com
            </a>
          </p>
          <p>
            Phone: <a className="text-blue-600 hover:underline">01789461747</a>
          </p>
          <p>Address: 123 , demra, Dhaka</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
