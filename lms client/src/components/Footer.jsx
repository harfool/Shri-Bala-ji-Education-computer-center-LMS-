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
  const year = currentDate.getFullYear;
  return (
    <>
      <footer className="relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row justify-center text-white bg-gray-800  py-6 sm:px-20">
        <section className="text-lg">
          copyright {year} | All rights reserved
        </section>
        <div className="socialMediaIcons flex items-center justify-center gap-5 text-2xl text-white px-2">
          <a
            href=""
            className="hover:text-yellow-500 transition-all  ease-in-out duration-300"
          >
            
            <BsFacebook />
          </a>
          <a
            href=""
            className="hover:text-yellow-500 transition-all  ease-in-out duration-300"
          >
            <BsInstagram />
          </a>
          <a
            href=""
            className="hover:text-yellow-500 transition-all  ease-in-out duration-300"
          >
            <BsLinkedin />
          </a>
          <a
            href=""
            className="hover:text-yellow-500 transition-all  ease-in-out duration-300"
          >
            
            <BsTwitter />
          </a>
          <a
            href=""
            className="hover:text-yellow-500 transition-all  ease-in-out  duration-300"
          >
            
            <BsYoutube />
          </a>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
