import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message.");
        }
      );

    e.target.reset(); // Reset form
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">
      {/* Form and Info */}
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Side */}
        <div className="p-10 bg-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Send Your <span className="text-red-500">Query</span>
          </h2>

          <p className="text-gray-700 mb-6">
            Have a question, suggestion, or need assistance? We're here to help!
            Fill out the form and our team will get back to you soon.
          </p>

          <ul className="space-y-6 text-gray-700 text-sm">
            {/* Location Section */}
            <li>
              <h3 className="text-xl font-semibold mb-2 flex items-center space-x-2 text-gray-900">
                <span className="text-2xl">📍</span>
                <span>Location</span>
              </h3>
              <p>
                523, Zest Business Spaces,
                <br />
                Next to Doshi Nursing Home,
                <br />
                M.G Road, Ghatkopar (E),
                <br />
                Mumbai - 400077
              </p>
            </li>

            {/* Contact Section */}
            <li>
              <h3 className="text-xl font-semibold mb-2 flex items-center space-x-2 text-gray-900">
                <span className="text-2xl">📞</span>
                <span>Contact</span>
              </h3>
              <p>+91-9820545774 | +91-8655657557</p>
              <p className="flex items-center space-x-2 mt-1">
                <span>nshah@srcounsellingind.com</span>
              </p>
            </li>

            {/* Response Time Message */}
            <li className="flex items-center space-x-3 mt-6 bg-red-500 text-white rounded-md p-3 max-w-sm">
              <span className="text-3xl animate-pulse">⏳</span>
              <span className="font-medium">
                We will revert back within <strong>24 hours</strong>!
              </span>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <form
          className="p-10 space-y-6 bg-white rounded-r-xl shadow-inner"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="first_name"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-3 py-2 
                hover:border-red-500 focus:border-red-500 focus:ring-red-500 transition duration-200 focus:outline-none"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-3 py-2 
                hover:border-red-500 focus:border-red-500 focus:ring-red-500 transition duration-200 focus:outline-none"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="reply_to"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-3 py-2 
              hover:border-red-500 focus:border-red-500 focus:ring-red-500 transition duration-200 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-3 py-2 
              hover:border-red-500 focus:border-red-500 focus:ring-red-500 transition duration-200 focus:outline-none"
              placeholder="+91 12345 67890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-3 py-2 
              hover:border-red-500 focus:border-red-500 focus:ring-red-500 transition duration-200 focus:outline-none"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 cursor-pointer transition duration-300"
            >
              Send message
            </button>
          </div>
        </form>
      </div>

      {/* Map */}
      <div
        className="relative bg-gray-900 text-white overflow-hidden"
        style={{ height: "450px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1470&auto=format&fit=crop')",
          }}
        ></div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get In <span className="text-red-500">Touch</span>
            </h1>
            {/* Content remains unchanged */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
