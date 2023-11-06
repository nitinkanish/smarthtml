import React from "react";


const About = () => {
    return (

        <div className="section-award bg-white  w-full  rounded-32 p-12 bg-grey2 shadow-lg mt-20">
            <h1 className="lg:text-40 md:text-35 sm:text-35 text-35 font-bold text-dark text-center mb-12"> About our Top-Notch <span className="text-green-500">Company</span></h1>
            <div className="flex items-start md:justify-between justify-center mt-0 md:flex-nowrap flex-wrap ">

                <div>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-1 overflow-hidden p-3">
                            <img className="inline-block h-12 w-12 rounded-full ring-4 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-12 w-12 rounded-full ring-4 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-12 w-12 rounded-full ring-4 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-12 w-12 rounded-full ring-4 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="">
                            <h5 className="text-green-500 text-lg font-bold m-0">780+</h5>
                            <h6 className="text-secondary text-sm -mt-2">employees</h6>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-1 overflow-hidden p-3">
                            <img className="inline-block h-10 w-10 rounded-full ring-4 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-10 w-10 rounded-full ring-4 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-10 w-10 rounded-full ring-4 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-10 w-10 rounded-full ring-4 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="">
                            <h5 className="text-green-500 text-lg font-bold m-0">20+</h5>
                            <h6 className="text-secondary text-sm -mt-2">awards</h6>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full md:mt-0 mt-5">

                    <p className="text-dark mb-5">Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example:</p>
                    <ul className="list-disc list-inside">
                        <li className="text-dark mb-2">Product Development</li>
                        <li className="text-dark mb-2">Cloud & DevOps</li>
                        <li className="text-dark mb-2">Design & Development</li>
                        <li className="text-dark mb-2">Data & Machine Learning</li>
                        <li className="text-dark mb-2">Quality Engineering</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default About