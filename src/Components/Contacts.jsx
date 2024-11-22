import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons

const ContactSection = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_19xs75r",  // Replace with your Service ID
        "template_4bfacsq", // Replace with your Template ID
        form.current,
        "6dNWzPG_cRUPpe1ZU"   // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setError("");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600">
      <h2 className="text-4xl font-bold text-center text-white">
        Contact Me 📬
      </h2>
      <div className="mt-8 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <label className="text-xl font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <label className="text-xl font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="text-xl font-semibold text-gray-700">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg mt-4 transition-all duration-200"
          >
            Send Message ✉️
          </button>
        </form>

        {isSent && (
          <p className="mt-4 text-green-600 font-semibold">
            🎉 Message sent successfully!
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-600 font-semibold">{error}</p>
        )}

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <p className="text-xl text-gray-800">Connect with me:</p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/himanshigpt14/"  // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-600 hover:text-blue-800 transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/hodophile014"  // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-800 hover:text-gray-900 transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/your-username"  // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-400 hover:text-blue-600 transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/your-username"  // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-pink-600 hover:text-pink-800 transition-all"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
