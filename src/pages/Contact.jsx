import React, { useState } from "react";
import "../assets/css/Conatct.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="">
      <div className="container mx-auto">
        <p className="text-4xl my-3 font-bold">Contact us</p>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <p className="my-3 text-3xl ">
              Fill out the form below to send us a message:
            </p>
            <form>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-4 md:mr-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="md:w-1/2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <p className="my-3 text-3xl">Or you can reach us at:</p>
            <ul
              className="list-disc ml-10 text-2xl"
              style={{ listStyle: "none" }}
            >
              <li>Address: Cái Khế, Ninh Kiều Cần Thơ</li>
              <li>Phone: 01684708361</li>
              <li>Email: Nhuttruong2261@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="">
          <p className="text-4xl my-3 font-bold">Blog</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
