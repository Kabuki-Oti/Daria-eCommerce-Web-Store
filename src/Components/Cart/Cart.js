import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "@material-tailwind/react";
import { removeFromCart } from "../../Features/Slices/cartSlice"


const Cart = ({ openModal, setOpen }) => {

    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const dispatch = useDispatch();

    return (
        <div>
            {/* cart: full */}
            {cart && cart.length > 0 ?
                (
                    <div>
                        <Dialog
                            className="border-0 outline-0"

                            open={openModal}
                            handler={() => setOpen(false)}
                        >
                            <DialogHeader>Shopping Cart</DialogHeader>
                            <DialogBody
                                divider
                                className="flex flex-col justify-center items-start pt-10"
                                style={{ maxHeight: "400px", overflowY: "auto" }}
                            >
                                {cart.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="grid grid-cols-2 py-4">
                                                {/*col 1: img, name*/}
                                                <div>
                                                    <div> {/*item image*/}
                                                        <img
                                                            className="h-[125px] rounded-md"
                                                            src={item.img}
                                                            alt={item.name}
                                                        ></img>
                                                    </div>
                                                    <div className="flex flex-col items-start">   {/*item name*/}
                                                        <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                                                            {item.name}
                                                        </h4>
                                                    </div>
                                                </div>
                                                {/*col 2: size, color, amount, prices, amounts, remove button*/}
                                                <div>
                                                    {/*items size*/}
                                                    <p className="text-black text-sm font-inter font-bold tracking-normal leading-none pt-2">
                                                        Selected size:{" "}
                                                        <span className="ml-2">{item.size}</span>
                                                    </p>
                                                    {/*items color*/}
                                                    <p className="text-black text-sm font-inter font-bold tracking-normal leading-none pt-2">
                                                        Selected colour:{" "}
                                                        <span
                                                            className=" text-s ml-2 rounded-full px-2"
                                                            style={{ backgroundColor: item.color }}
                                                        >
                                                        </span>
                                                    </p>
                                                    {/*items amount*/}
                                                    <p className="text-black text-sm font-inter font-bold tracking-normal leading-none pt-2">
                                                        Amount: <span className="ml-2">{item.amount}</span>
                                                    </p>
                                                    {/*single time price*/}
                                                    <p className="text-black text-sm font-inter font-bold tracking-normal leading-none pt-2">
                                                        Single Item Price: <span className="ml-2">£{item.price}</span>
                                                    </p>
                                                    {/*total cart amount*/}
                                                    <p className="text-black text-sm font-inter font-bold tracking-normal leading-none pt-2">
                                                        Total Cart Amount: <span className="ml-2">£{item.totalPrice}</span>
                                                    </p>
                                                    {/*remove item button*/}
                                                    <div className="pt-4">
                                                        <Tooltip
                                                            content="Remove from cart"
                                                            Placement="bottom"
                                                        >
                                                            <Button
                                                                onClick={() => dispatch(removeFromCart(item))}
                                                                className="bg-[#3C1A5B] text-[#FAD744]"
                                                            >
                                                                Remove
                                                            </Button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </DialogBody>
                            <DialogFooter className="flex justify-start items-center">
                                <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                                    Total Price:{" "}
                                    <span className="ml-2">£{totalPrice}</span>
                                </p>
                            </DialogFooter>
                        </Dialog>
                    </div>
                ) :
                {/* cart: empty */ }
                    (
                        <div>
                            <Dialog
                                className="border-0 outline-0"
                                open={openModal}
                                handler={() => setOpen(false)}
                            >
                                <DialogHeader>Shopping Cart</DialogHeader>
                                <DialogBody divider>
                                    <div>
                                        <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                                            Your cart is empty
                                        </h1>
                                        <p className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                                            Add some items

                                        </p>
                                    </div>
                                </DialogBody>
                            </Dialog>
                        </div>
                    )}

        </div >
    )
};

export default Cart;