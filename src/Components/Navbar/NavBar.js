import React, { useState } from "react";
import logo from '../../assets/images/logo.png';
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Tooltip, Button } from "@material-tailwind/react";
import { signIn } from "../../Features/Slices/authSlice";
import { filterProducts } from "../../Features/Slices/productsSlice";
import { Link } from "react-router-dom";


const NavBar = () => {

    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const user = useSelector((state) => state.user.user);
    const { name, image } = user;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    };

    const buttons = [
        "Hoodies",
        "Dresses",
        "Suits",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags"
    ];

    const dispatch = useDispatch();

    return (
        <div>

            <div className="bg-[#3C1A5B] p-4 w-full flex justify-around"> {/*promotion banner*/}
                <div className="text-[#FAD744] font-inter text-xl font-medium tracking-normal leading-none text-center">
                    Free shipping and returns
                </div>
            </div>

            <div className="flex justify-around items-center pb-4"> {/* navbar: logo, logout, wishlist, shopping cart*/}
                <div> {/*logo*/}
                    <a href="/"><img className="h-20 w-50 pr-96 pt-5" src={logo} alt="store"></img></a>
                </div>
                {/* shopping cart */}
                <div
                    className="flex flex-row items-center cursor-pointer pl-20"
                    onClick={handleOpen}
                >
                    {/* shopping cart: dialog*/}
                    {totalAmount > 0 ? (
                        <span className="rounded-full bg-[#3C1A5B] text-[#FAD744] px-2 font-inter text-sm mr-1">
                            {totalAmount}
                        </span>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    )}
                    <p className="font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
                        Shopping Cart
                    </p>
                    <div>
                        {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
                    </div>
                    {/*login avatar*/}
                    <div className="flex flex-row items-center cursor-pointer pl-4">
                        {image && (
                            <Avatar
                                src={image}
                                alt="avatar"
                                size="sm"
                                className="mr-2"
                            ></Avatar>
                        )}
                    </div>
                    <div onClick={() => dispatch(signIn())}>
                        <Tooltip content="Sign Out" placement="bottom">
                            <p className="font-inter text-sm font-medium tracking-normal leading-none">
                                Hi {name.charAt("0").toUpperCase() + name.slice(1)}
                            </p>
                        </Tooltip>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-4 pb-4"> {/*navigation buttons*/}
                {buttons.map((button, index) => {

                    console.log(button);

                    return (
                        <div key={index} className="mx-2">
                            <Link to={"/FilteredProducts/" + button}>
                                <Button
                                    color="white"
                                    size="lg"
                                    ripple={true}
                                    className="text-black hover:bg-[#3C1A5B] hover:text-[#FAD744] duration-300 ease-in-out "
                                    onClick={() => dispatch(filterProducts(button))}
                                >
                                    {button}
                                </Button>
                            </Link>
                        </div>
                    );
                })}
            </div>
            {/* Divider */}
            <div className="mx-16 pb-4"> 
                <hr className="border-t border-[#3C1A5B] my-4" />
            </div>
        </div>
    )
};

export default NavBar;