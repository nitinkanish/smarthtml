import React from "react";
import clutch from '../../src/images/clutch.png'
const Award = () => {
    return (
        <div className="relative">

            <div className='uppercase services perks awards'>awards</div>
            <div className=" section-awards  w-full  rounded-32 p-12 mt-12 relative">
                <h1 className="lg:text-40 md:text-35 sm:text-35 text-35 font-bold text-dark text-center mb-1"> Awards</h1>
                <p className="text-dark mb-5 text-center text-lg">
                    Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example
                </p>
                <div className="mt-16">
                    <div className="flex justify-between mr-10">
                        <div className="relative">
                            <span className="bg-dark h-12 flex items-center absolute right-0 justify-center  w-12 block text-white text-lg rounded-full font-bold">x2</span>
                            <div className="h-44 w-44 bg-white shadow-md rounded-full flex items-center justify-center">

                                <img src={clutch} alt="" className="h-24 w-24" />

                            </div>
                            <div className="text-dark font-semibold text-xl text-center mt-3">TOP QA companies</div>
                            <p className="text-grey1 text-sm text-center">Superbcompanies, 2023</p>
                        </div>
                        <div className="relative">
                            <span className="bg-dark h-12 flex items-center absolute right-0 justify-center  w-12 block text-white text-lg rounded-full font-bold">x2</span>
                            <div className="h-44 w-44 bg-white shadow-md rounded-full flex items-center justify-center">

                                <img src={clutch} alt="" className="h-24 w-24" />

                            </div>
                            <div className="text-dark font-semibold text-xl text-center mt-3">TOP QA companies</div>
                            <p className="text-grey1 text-sm text-center">Superbcompanies, 2023</p>
                        </div>
                    </div>
                    <div className="flex justify-center -mt-16">
                        <div className="relative">
                            <span className="bg-dark h-12 flex items-center absolute right-10 top-2 justify-center  w-12 block text-white text-lg rounded-full font-bold">x2</span>
                            <div className="h-80 w-80 bg-white shadow-md rounded-full flex items-center justify-center">

                                <img src={clutch} alt="" className="h-44 w-44" />

                            </div>
                            <div className="text-dark font-semibold text-xl text-center mt-3">TOP QA companies</div>
                            <p className="text-grey1 text-sm text-center">Superbcompanies, 2023</p>
                        </div>

                    </div>

                    <div className="flex justify-between ml-24 -mt-14">
                        <div className="relative">
                            <span className="bg-dark h-12 flex items-center absolute right-0 justify-center  w-12 block text-white text-lg rounded-full font-bold">x2</span>
                            <div className="h-44 w-44 bg-white shadow-md rounded-full flex items-center justify-center">

                                <img src={clutch} alt="" className="h-24 w-24" />

                            </div>
                            <div className="text-dark font-semibold text-xl text-center mt-3">TOP QA companies</div>
                            <p className="text-grey1 text-sm text-center">Superbcompanies, 2023</p>
                        </div>
                        <div className="relative">
                            <span className="bg-dark h-12 flex items-center absolute right-0 justify-center  w-12 block text-white text-lg rounded-full font-bold">x2</span>
                            <div className="h-44 w-44 bg-white shadow-md rounded-full flex items-center justify-center">

                                <img src={clutch} alt="" className="h-24 w-24" />

                            </div>
                            <div className="text-dark font-semibold text-xl text-center mt-3">TOP QA companies</div>
                            <p className="text-grey1 text-sm text-center">Superbcompanies, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Award;