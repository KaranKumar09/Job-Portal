import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-6 bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">
            Job<span className="text-[#6A38C2]">Wize</span>
          </h2>
          <p className="text-sm">© {year} JobWize. All rights reserved.</p>
          <p className="text-sm text-gray-700">
            Developed by{" "}
            <a
              href="https://github.com/KaranKumar09"
              className="text-blue-500 hover:text-blue-700 hover:font-medium"
            >
              Karan Kumar
            </a>
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/KaranKumar09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/imkaran_15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/karankumar12218376/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
