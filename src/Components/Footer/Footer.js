import React from "react";
import { Typography } from "@material-tailwind/react";

import logo from "../../assets/images/logo.png"


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className="px-12">
            <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-[#3C1A5B] py-6 text-center- md:justify-between">
                <div>
                <a href="/"><img className="pl-20 h-10" src={logo} alt="store"></img></a>
                </div>
                <Typography color="blue-gray" className="font-normal">
                    &copy; {year} by Kabuki Oti
                </Typography>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-bold transition-colors hover:text-[#3C1A5B] focus:text-blue-500"
                        >
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-bold transition-colors hover:text-[#3C1A5B] focus:text-blue-500"
                        >
                            License
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-bold transition-colors hover:text-[#3C1A5B] focus:text-blue-500"
                        >
                            Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-bold transition-colors hover:text-[#3C1A5B] focus:text-blue-500"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </footer>
        </div>
    )
};

export default Footer;