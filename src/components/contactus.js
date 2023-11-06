import React from "react";
import ContactForm from "./conatctform";
const Contact = () => {
    return (
        <div className="relative">
            <div className="contact section-contact w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 sm:gap-10 items-center justify-between mt-24 pb-24">
                <div className="bg-div absolute z-0 left-0">

                </div>
                <div className="relative z-40">
                    <h1 className="lg:text-40 md:text-35 sm:text-35 text-35 font-bold text-dark text-left mb-1"> Let's <span className="text-green-500">Talk!</span> </h1>
                    <p class="text-dark mb-5 text-left text-lg">Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example</p>
                    <ContactForm />
                </div>
                <div className="relative z-40 ml-16">
                    <div>
                        <h5 className="text-dark text-sm">Find Us:</h5>
                        <p className="text-dark text-lg mt-2">
                            0999-588 Avenue SE Calgty, <br></br> AB T54 0376
                        </p>
                    </div>
                    <div className="mt-7">
                        <h5 className="text-dark text-sm">Email Us:</h5>
                        <a href="mailto:abc@gmail.com" className="text-lg mt-2 text-dark cursor-pointer hover:text-green-500 ">abc@gmail.com</a>

                    </div>
                    <div className="mt-7">
                        <h5 className="text-dark text-sm">Call Us:</h5>
                        <a href="tel:+91-9834758745798" className="text-lg mt-2 text-dark cursor-pointer hover:text-green-500">+91-9834758745798</a>

                    </div>
                </div>

            </div>
        </div>



    )
}
export default Contact;