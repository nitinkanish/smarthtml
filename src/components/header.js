import React from "react";
import { Link } from "react-router-dom";
import websiteLogo from '../../src/images/logo.png'
const Header = () => {

    return (
        <div>
            <div className="header bg-white  z-50 shadow-md py-4 px-5 fixed xl:w-65% lg:w-80% w-90% left-0 right-0 rounded-lg top-0 m-auto mt-6">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left Section - Logo */}
                    <div className="flex items-center cursor-pointer">
                        <img src={websiteLogo} alt="Logo" className="h-10 w-10" />
                        <span className="text-black text-lg ml-2">Logo</span>
                    </div>

                    {/* Middle Section - Navigation Menus */}
                    <nav className="space-x-4">
                        <Link to="/" className="hover:bg-slate-100 py-2 px-6 rounded-md">Home</Link>
                        <Link to="/about" className="hover:bg-slate-100 py-2 px-6 rounded-md">About</Link>
                        <Link to="/services" className="hover:bg-slate-100 py-2 px-6 rounded-md">Services</Link>
                        <Link to="/contact" className="hover:bg-slate-100 py-2 px-6 rounded-md">Cases</Link>
                        <Link to="/contact" className="hover:bg-slate-100 py-2 px-6 rounded-md">Innovation</Link>
                    </nav>
                    <div>
                        <button className="bg-green-400 text-white hover:bg-white hover:text-green-400 border border-green-400 transition ease-in duration-300 px-4 py-2 w-32 rounded-md">Contact</button>
                    </div>
                </div>
            </div>




        </div>
    )
}
export default Header;