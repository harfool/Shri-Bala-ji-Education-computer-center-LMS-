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
      <section className="mb-2 text-lg sm:mb-0">
        © {year} | All rights reserved
      </section>
      <div className="flex items-center justify-center gap-5 text-2xl socialMediaIcons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-yellow-500">
          <BsFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-yellow-500">
          <BsInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-yellow-500">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-yellow-500">
          <BsTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:text-yellow-500">
          <BsYoutube />
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
