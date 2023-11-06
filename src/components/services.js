import React from "react";
import design from '../../src/images/design.svg'
import seo from '../../src/images/seo.png'
import appDevelopment from '../../src/images/app-development.png'
import partners from '../../src/images/partners.png'

const Services = () => {
    return (
        <div className="relative">
            <div className='uppercase perks services'>services</div>
            <div className=" section-features w-full  rounded-32 p-12   mt-24">


                <h1 className="lg:text-40 md:text-35 sm:text-35 text-35 font-bold text-dark text-center mb-1"> Our core <span className="text-green-500">services</span></h1>
                <p className="text-dark mb-5 text-center text-lg">Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example</p>
                <div className="mt-14 w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 sm:gap-10 sm:text-left text-center ">
                    <div className=" w-full md:mt-0 mt-5  w-full  rounded-32 p-12 bg-grey2 transition ease-in duration-300 hover:shadow-custom relative  text-center grid justify-center cursor-pointer">
                        <div className="rounded-full h-24 w-24 flex items-center justify-center border border-dark text-center m-auto">
                            <img src={design} alt="dsign" className="m-auto" />
                        </div>

                        <h1 className="text-dark font-bold text-25 mb-3 mt-4">Design & Developement</h1>
                        <p className="text-dark mb-5">Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example:</p>

                    </div>
                    <div className=" w-full md:mt-0 mt-5  w-full cursor-pointer rounded-32 p-12 bg-grey2 transition ease-in duration-300 hover:shadow-custom relative text-center grid justify-center">
                        <div className="rounded-full h-24 w-24 flex items-center justify-center border border-dark text-center m-auto">
                            <img src={seo} alt="dsign" className="m-auto h-14 w-14" />
                        </div>

                        <h1 className="text-dark font-bold text-25 mb-3 mt-4">Seo & Marketing</h1>
                        <p className="text-dark mb-5">Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example:</p>

                    </div>
                    <div className=" w-full md:mt-0 mt-5  w-full cursor-pointer  rounded-32 p-12 bg-grey2 transition ease-in duration-300 hover:shadow-custom relative text-center grid justify-center">
                        <div className="rounded-full h-24 w-24 flex items-center justify-center border border-dark text-center m-auto">
                            <img src={appDevelopment} alt="dsign" className="m-auto h-14 w-14" />
                        </div>

                        <h1 className="text-dark font-bold text-25 mb-3 mt-4">App Development</h1>
                        <p className="text-dark mb-5">Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example:</p>

                    </div>
                    <div className=" w-full md:mt-0 mt-5  w-full  cursor-pointer rounded-32 p-12 bg-grey2 transition ease-in duration-300 hover:shadow-custom relative text-center grid justify-center">
                        <div className="rounded-full h-24 w-24 flex items-center justify-center border border-dark text-center m-auto">
                            <img src={partners} alt="dsign" className="m-auto h-14 w-14" />
                        </div>

                        <h1 className="text-dark font-bold text-25 mb-3 mt-4">Dedicated Team</h1>
                        <p className="text-dark mb-5">Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example:</p>

                    </div>
                </div>
                <div className="w-full text-center mt-16">
                    <button className="bg-green-400 text-white text-lg hover:bg-grey3 hover:text-green-400 border border-green-400 transition ease-in duration-300 px-12 py-4 rounded-l-2xl rounded-tr-2xl">See all features</button>
                </div>
            </div>
        </div>

    )
}
export default Services;