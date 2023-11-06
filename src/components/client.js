import React from "react";
import { AiFillStar } from 'react-icons/ai'
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const Client = () => {
    return (
        <div className=" section-clients  w-full  rounded-32 p-12 mt-12 relative">
            <h1 className="lg:text-40 md:text-35 sm:text-35 text-35 font-bold text-dark text-center mb-1">What our <span className="text-green-500">clients </span> say</h1>
            <p className="text-dark mb-5 text-center text-lg">Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example</p>
            <div className="">
                <h1 className='uppercase text-dark fixed-text4 fixed-text'>happy Clients</h1>
            </div>
            <div className=" shadow-lg w-full mt-24 xl:w-3/5 lg:w-2/3 md:w-4/5 sm:w-5/6 p-5 pb-7 bg-grey2 transition ease-in duration-300 hover:shadow-custom relative text-center grid justify-center m-auto rounded-xl">
                <div className="absolute -top-9 left-0 right-0">
                    <img className="inline-block h-20 w-20 rounded-full ring-4 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <h5 className="capitalize font-semibold text-dark text-2xl text-center mt-10">Johnson</h5>
                <p className="text-grey1 text-sm font-medium">HR Associate</p>
                <div className="flex items-center justify-center gap-1 mt-4">
                    <AiFillStar className="bg-green-500 rounded-sm p-1 text-2xl text-white" />
                    <AiFillStar className="bg-green-500 rounded-sm p-1 text-2xl text-white" />
                    <AiFillStar className="bg-green-500 rounded-sm p-1 text-2xl text-white" />
                    <AiFillStar className="bg-green-500 rounded-sm p-1 text-2xl text-white" />
                    <AiFillStar className="bg-green-500 rounded-sm p-1 text-2xl text-white" />
                </div>
                <FaQuoteLeft className="text-grey3 absolute top-0 left-2 text-100" />
                <p className="text-grey1 mt-5 text-xl relative z-40"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                <FaQuoteRight className="text-grey3 absolute bottom-0 right-2 text-100 z-0" />
            </div>
            <div className="arrows">
                <IoIosArrowBack className="text-grey1 text-3xl absolute top-20% left-15% cursor-pointer hover:text-dark  transition ease-in duration-300" />
                <IoIosArrowForward className="text-grey1 text-3xl absolute top-20% right-15% cursor-pointer hover:text-dark transition ease-in duration-300 " />
            </div>
            <div className="indicator w-full mt-5 xl:w-3/5 lg:w-2/3 md:w-4/5 sm:w-5/6 flex items-center m-auto justify-center gap-2">
                <span className="bg-green-500 h-3 w-3 block rounded-full"></span>
                <span className="bg-slate-300 h-3 w-3 block rounded-full"></span>
                <span className="bg-slate-300 h-3 w-3 block rounded-full"></span>
            </div>
        </div>
    )
}
export default Client;