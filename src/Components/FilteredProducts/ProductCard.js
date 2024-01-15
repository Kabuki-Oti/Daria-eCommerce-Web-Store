import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../Features/Slices/productsSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, text, img, price, color }) => {

    const dispatch = useDispatch();
    const { type } = useParams();

    return (
        <div>
            <Link to={`/filteredProducts/${type}/` + id}>
                <Card className="w-100" onClick={() => dispatch(singleProduct(id))}>
                    <CardHeader color="blue-gray" className="relative h-96">
                        <img
                            src={img}
                            alt="card-image"
                            className="h-full w-full"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {name}
                        </Typography>
                        <Typography>
                            {text}
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                        <Typography variant="medium" color="blue-gray">
                            £{price}
                        </Typography>
                        <Typography variant="small" color="blue-gray" className="flex gap-1">
                            {color?.map((color, index) => {
                                return (
                                    <i
                                        className="fas-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                                        key={index}
                                        style={{ backgroundColor: color }}
                                    ></i>
                                );
                            })}
                        </Typography>
                    </CardFooter>
                </Card>
            </Link >
        </div >
    )
};

export default ProductCard;