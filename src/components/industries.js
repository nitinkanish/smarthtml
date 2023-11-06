import React from "react";
import { BiCartAdd } from 'react-icons/bi'
import { GiTakeMyMoney } from 'react-icons/gi'
import { LuComputer } from 'react-icons/lu'
import { PiHardDrives } from 'react-icons/pi'
import { MdOutlineSocialDistance } from 'react-icons/md'

const Industries = () => {
    return (
        <div className=" section-industries  w-full  rounded-32 p-12 pb-36 mt-1 relative overflow-hidden">
            <div className="absolute bg-gradient-to-t from-[#f5f5f5] to-[#fff] h-full w-96 left-41% z-0">
                <h1 className='uppercase text-dark fixed-text3 fixed-text'>industries</h1>
            </div>
            <div className="mt-24 mb-24 relative z-40 ">
                <p className="text-center text-secondary mb-0 text-md uppercase">Be on the top everywhere!</p>
                <h1 className="lg:text-40 md:text-35 sm:text-35 text-35 font-bold text-dark text-center mb-4"> Code covers a wide range of <span className="text-green-500"> industries</span></h1>

            </div>
            <div className="pr-24 relative z-40 flex items-start gap-4 xl:w-1/2 lg:w-3/5 md:w-2/3 sm:w-5/6 w-full">
                <div className="">
                    <BiCartAdd className="text-greyFade text-45" />
                </div>
                <div className="">
                    <h1 className="text-dark font-bold text-2xl mb-3 mt-0 leading-2 mb-0">Retail & E-commerce</h1>
                    <p className="text-grey1 mb-5 -mt-2">Build a user-friendly eCommerce platform and enhance it for your target audience with a personalized approach, an intuitive interface, search filters, and other trendy features.</p>
                </div>
            </div>
            <div className="pl-24 relative z-40 flex items-start justify-end gap-4 xl:w-1/2 lg:w-3/5 md:w-2/3 sm:w-5/6 w-full float-right mt-16">
                <div className="">
                    <GiTakeMyMoney className="text-greyFade text-45" />
                </div>
                <div className="">
                    <h1 className="text-dark font-bold text-2xl mb-3 mt-0 leading-2 mb-0">Financial Services</h1>
                    <p className="text-grey1 mb-5 -mt-2">Build a user-friendly eCommerce platform and enhance it for your target audience with a personalized approach, an intuitive interface, search filters, and other trendy features.</p>
                </div>
            </div>
            <div className="pr-24 relative z-40 flex items-start justify-end gap-4 xl:w-1/2 lg:w-3/5 md:w-2/3 sm:w-5/6 w-full float-left clear-right mt-16">
                <div className="">
                    <LuComputer className="text-greyFade text-40" />
                </div>
                <div className="">
                    <h1 className="text-dark font-bold text-2xl mb-3 mt-0 leading-2 mb-0">Software & Hi-Tech</h1>
                    <p className="text-grey1 mb-5 -mt-2">Build a user-friendly eCommerce platform and enhance it for your target audience with a personalized approach, an intuitive interface, search filters, and other trendy features.</p>
                </div>
            </div>
            <div className="pl-24  relative z-40 flex items-start justify-end gap-4 xl:w-1/2 lg:w-3/5 md:w-2/3 sm:w-5/6 w-full float-right clear-left mt-16">
                <div className="">
                    <MdOutlineSocialDistance className="text-greyFade text-45" />
                </div>
                <div className="">
                    <h1 className="text-dark font-bold text-2xl mb-3 mt-0 leading-2 mb-0">Social Media</h1>
                    <p className="text-grey1 mb-5 -mt-2">Build a user-friendly eCommerce platform and enhance it for your target audience with a personalized approach, an intuitive interface, search filters, and other trendy features.</p>
                </div>
            </div>
            <div className="pr-24 relative z-40 flex items-start justify-end gap-4 xl:w-1/2 lg:w-3/5 md:w-2/3 sm:w-5/6 w-full float-left clear-right mt-16">
                <div className="">
                    <PiHardDrives className="text-greyFade text-45" />
                </div>
                <div className="">
                    <h1 className="text-dark font-bold text-2xl mb-3 mt-0 leading-2 mb-0">Autonomous Driving & Logistics</h1>
                    <p className="text-grey1 mb-5 -mt-2">Build a user-friendly eCommerce platform and enhance it for your target audience with a personalized approach, an intuitive interface, search filters, and other trendy features.</p>
                </div>
            </div>
        </div>
    )
}
export default Industries;