import React from 'react';
import "./myNav.css"
import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <div>
            <div className="container flex pt-14 px-14 justify-evenly bg-footer-bg">
                <div className="items-center row">
                    <div className="col-sm-6">
                        <div className="text-4xl text-white logo font-logo">
                            Aadi
                        </div>
                    </div>
                    <div className="ml-auto text-center col-sm-6">
                        <div className="flex gap-2 social-icons ">
                            <a className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 text-white hover:bg-white  border-white rounded-full  " href="https://www.linkedin.com/in/aditya-sharma-b70a6a230/">
                                <AiFillLinkedin
                                    className='text-lg ' />
                            </a>
                            <a className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full  text-white  hover:bg-white  " href="https://github.com/giteadi">
                                <AiOutlineGithub
                                    className='text-lg ' />
                            </a>
                            <a className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full   text-white  hover:bg-white  " href="https://leetcode.com/adityasharma10102000/">
                                <SiLeetcode
                                    className='text-lg ' />
                            </a>
                            <a className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-opacity-75 border-white rounded-full   text-white  hover:bg-white  " href="https://www.instagram.com/i_amzeer/">
                                <AiFillInstagram
                                    className='text-lg ' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
