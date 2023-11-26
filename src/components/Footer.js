import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    // console.log("Footer");
    return (
        <footer className=" py-[50px] w-full text-white  bg-black">
            <div className="flex items-center flex-col">
                <ul className="list-none flex items-center justify-center gap-[15px] mb-[20px]">
                    <li className="cursor-pointer text-[12px] transition-all ease duration-300 hover:text-red-600">Terms Of Use</li>
                    <li className="cursor-pointer text-[12px] transition-all ease duration-300 hover:text-red-600">Privacy-Policy</li>
                    <li className="cursor-pointer text-[12px] transition-all ease duration-300 hover:text-red-600">About</li>
                    <li className="cursor-pointer text-[12px] transition-all ease duration-300 hover:text-red-600">Blog</li>
                    <li className="cursor-pointer text-[12px] transition-all ease duration-300 hover:text-red-600">FAQ</li>
                </ul>
                <div className="text-[12px] opacity-50 text-center max-w-[800px] mb-[2px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="flex items-center justify-center gap-[10px]">
                    <span className="w-[50px] h-[50px] rounded-[50%]  flex items-center justify-center cursor-pointer transition-all ease duration-300 hover:shadow-red-600 hover:shadow-sm">
                        <FaFacebookF />
                    </span>
                    <span className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center cursor-pointer transition-all ease duration-300 hover:shadow-red-600 hover:shadow-sm">
                        <FaInstagram />
                    </span>
                    <span className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center cursor-pointer transition-all ease duration-300 hover:shadow-red-600 hover:shadow-sm">
                        <FaTwitter />
                    </span>
                    <span className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center cursor-pointer transition-all ease duration-300 hover:shadow-red-600 hover:shadow-sm">
                        <FaLinkedin />
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;