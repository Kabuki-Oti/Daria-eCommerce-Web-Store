import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/Slices/cartSlice";

const ProductSectionItem = ({ id, img, name, text, size, color, price, totalPrice }) => {

    const dispatch = useDispatch();
    const defaultSize = size[0];
    const defaultColor = color[0];
    const [showNotification, setShowNotification] = useState(false);

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: id,
                name: name,
                img: img,
                text: text,
                size: size,
                color: color,
                price: price,
                amount: 1,
                totalPrice: totalPrice
            })
        );
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    };

    return (
        <div>
            <Card className="w-96">
                <Typography variant="h4" className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-[#3C1A5B] bg-[#FAD744]">
                    30% OFF
                </Typography>
                <CardHeader floated={false} className="h-96">
                    <img src={img} alt={name} />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        {text}
                    </Typography>
                    <div className="flex justify-between items-center pt-4">
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            Size left: {defaultSize}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            Color:
                            <span
                                className="relative inline-block h-4 w-4 !rounded-full object-cover object-center ml-1"
                                style={{ backgroundColor: defaultColor }}></span>
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            £{price}
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Add to Cart" placement="bottom">
                        <Button
                            color="gray"
                            size="lg"
                            variant="outlined"
                            ripple={true}
                            className="w-full"
                            onClick={handleAddToCart}
                        >
                            ADD TO CART
                        </Button>
                    </Tooltip>
                </CardFooter>
            </Card>

            {showNotification && (
                <div
                    className="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white p-2 rounded"
                    style={{ zIndex: 1000 }}>
                    Item added to cart!
                </div>
            )}
        </div>
    )
};

export default ProductSectionItem;