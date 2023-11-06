import React from "react";
import { Link } from "react-router-dom";
import clutch from '../../src/images/clutch.png'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedin, FaYoutube } from 'react-icons/fa'
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>


            <div className="py-2">

                <div className="  px-44 mt-14 w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-20 sm:text-left text-center">
                    <div className="">
                        <div className=" mb-7">
                            <img src={clutch} alt="Logo" className="h-16 w-16" />
                            <p class="text-white1 mb-5 text-left text-lg">Lorem ipsum is a dummy text.</p>
                        </div>
                        <ul className="flex items-center gap-3  justify-start">
                            <li>
                                <Link to="/"><BiLogoFacebookSquare className="text-white1 text-2xl cursor-pointer hover:text-white" /></Link>
                            </li>
                            <li>
                                <Link to="/"> <AiOutlineTwitter className="text-white1 text-2xl cursor-pointer hover:text-white" /></Link>
                            </li>
                            <li>
                                <Link to="/">  <FaLinkedin className="text-white1 text-xl cursor-pointer hover:text-white" /></Link>
                            </li>
                            <li>
                                <Link to="/">   <FaYoutube className="text-white1 text-2xl cursor-pointer hover:text-white" /> </Link>
                            </li>
                            <li>
                                <Link to="/"><BsInstagram className="text-white1 text-xl cursor-pointer hover:text-white" /> </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="">
                        <h1 className="textxl font-bold text-white mb-4">Product</h1>
                        <ul>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer mb-2">Control</li>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer mb-2">Scalability &  Efficiency</li>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer mb-2">Supported By Experts</li>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer">Supported By Experts</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="textxl font-bold text-white mb-4">Solutions</h1>
                        <ul>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer mb-2">Control</li>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer mb-2">Scalability &  Efficiency</li>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer mb-2">Supported By Experts</li>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer">Supported By Experts</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="textxl font-bold text-white mb-4">Company</h1>
                        <ul>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer mb-2">Abour</li>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer mb-2">Blogs</li>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer mb-2">Terms & Condition</li>
                            <li className="text-white1 text-md font-normal hover:text-white cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        {/* <div className="h-36 w-full bg-dark1 rounded-tl-32 rounded-br-32 p-5">
            <p className="text-white1 text-md font-normal  mb-2">Contact:  <a href="tel:+91-9834758745798" className="text-green-500 cursor-pointer hover:text-white ">+91-9834758745798</a></p>
                <p className="text-white1 text-md font-normal  mb-2">Email:  <a href="mailto:abc@gmail.com" className="text-green-500 cursor-pointer hover:text-white ">abc@gmail.com</a></p>
                <p className="text-white1 text-md font-normal  mb-2">Address: 0999-588 Avenue SE Calgty, AB T54 0376</p>
            </div> */}

                    </div>

                </div>
            </div>
            <div className="w-full bg-dark2 h-10 mt-8 flex items-center justify-center">
                <p className="text-white1 text-center text-md font-normal">© 2022 code. All rights reserved.</p>
            </div>
        </>

    )
}
export default Footer;
