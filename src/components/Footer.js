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
                    I have integrated the OpenAI GPT API and used the Netflix logo in this 
                    project for non-commercial use. No copyright or trademark infringement is 
                    intended, and I will not utilize this project for business purpose.
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