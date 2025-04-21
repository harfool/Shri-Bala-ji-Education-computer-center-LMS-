import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";

const FooterComponent = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row justify-between items-center text-white bg-gray-800 py-6 px-4 sm:px-20">
      <section className="text-lg mb-2 sm:mb-0">
        © {year} | All rights reserved
      </section>
      <div className="socialMediaIcons flex items-center justify-center gap-5 text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all duration-300">
          <BsFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all duration-300">
          <BsInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all duration-300">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all duration-300">
          <BsTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-all duration-300">
          <BsYoutube />
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
