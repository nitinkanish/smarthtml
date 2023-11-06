import React from "react";

const TopSection = () => {
    return (
        <div className="clear pt-52 px-5">
            <div className="w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 sm:gap-20 sm:text-left text-center">
                <h1 className="lg:text-40 md:text-35 sm:text-35 text-35 font-bold text-secondary md:text-right leading-normal">A Top-Notch <br className="sm:block hidden" />Software Development Company</h1>
                <h1 className="lg:text-40 md:text-35 sm:text-35 text-35 font-bold text-dark">Innovating  <br className="sm:block hidden" />the <br className="sm:block hidden" /> Future</h1>
            </div>
            <div className="relative w-full text-center -mt-16">
                <div className="relative z-10 flex gap-3 justify-center">
                    <span className="drop-shadow-xl text-300  text-shadow font-bold">C</span>
                    <span className="drop-shadow-xl text-300  text-shadow font-bold">o</span>
                    <span className="drop-shadow-xl text-300  text-shadow font-bold">d</span>
                    <span className="drop-shadow-xl text-300  text-shadow font-bold">e</span>
                </div>
                <div className="absolute top-1 z-0 left-0 right-0 flex gap-3 justify-center">
                    <span className="drop-shadow-xl text-300  text-shadow2 font-bold">C</span>
                    <span className="drop-shadow-xl text-300  text-shadow2 font-bold">o</span>
                    <span className="drop-shadow-xl text-300  text-shadow2 font-bold">d</span>
                    <span className="drop-shadow-xl text-300  text-shadow2 font-bold">e</span>
                </div>
            </div>

        </div>
    )
}
export default TopSection