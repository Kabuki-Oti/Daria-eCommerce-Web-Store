import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import NavBar from "../Navbar/NavBar";
import { Select, Option, Button } from "@material-tailwind/react";
import Error from "../Error/Error"
import { colorFilter, filterProducts, sizeFilter, sortByPriceFilter } from "../../Features/Slices/productsSlice"
import Footer from "../Footer/Footer";

const FilteredProducts = () => {

    const products = useSelector((state) => state.products.FilteredProducts);
    const { type } = useParams();

    console.log("products", products);
    console.log("params", type);
    console.log("type:", type);

    const colorButtons = Array.from(new Set(products.flatMap((product) => product.color)));
    const sizeButtons = Array.from(new Set(products.flatMap((product) => product.size)));
    const error = useSelector((state) => state.products.error);

    const dispatch = useDispatch();
    const handleColorClick = (selectedColor) => {
        dispatch(colorFilter(selectedColor));
        console.log("Selected Colour:", selectedColor);
    };

    return (
        <div>
            <div className="w-full"> {/*navbars*/}
                <NavBar></NavBar>
            </div>
            <div className="pl-24 pr-24">
            <div className="pl-4 pt-4 pb-0"> {/*product content*/}
                <h1
                    className="text-5xl text-center font-inter text-[#3C1A5B] font-bold tracking-normal leading-none">
                    {type}
                </h1>
            </div>
            <div className="flex items-center justify-center pl-4 py-8"> {/*filters*/}
                <div className="flex items-center"> {/*filter buttons*/}
                    {/*colour filter button*/}
                    <div className="w-40 pr-5 flex-col items-center mr-20">
                        <Select label="Colour">
                            {colorButtons.map((color, index) => (
                                <Option key={index}>
                                    <div
                                        key={index}
                                        className="pb-2"
                                        onClick={() => handleColorClick(color)}
                                    >
                                        {color}
                                    </div>
                                </Option>
                            ))}
                        </Select>
                    </div>
                    {/*size filter button*/}
                    <div
                        className="w-40 pr-5 flex-col items-center mr-20">
                        <Select label="Size" disabled={type === "Bags"}>
                            {sizeButtons.map((size, index) => (
                                <Option key={index} >
                                    <div
                                        key={index}
                                        className="pb-2"

                                        onClick={() => dispatch(sizeFilter)}
                                    >
                                        {size}
                                    </div>
                                </Option>
                            ))}
                        </Select>
                    </div>
                    {/*low/high filter button*/}
                    <div className="w-40 pr-5 flex-col items-center mr-20">
                        <Select
                            label="Sort By Price"
                            onClick={() => dispatch(sortByPriceFilter)}
                        >
                            <Option>High to Low</Option>
                            <Option>Low to High</Option>
                        </Select>
                    </div>
                    {/*clear filters button*/}
                    <div className="pr-5 flex-end">
                        <Button
                            onClick={() => dispatch(filterProducts(type))}
                            className="bg-[#3C1A5B] text-[#FAD744]"
                        >
                            Clear Filters
                        </Button>
                    </div>
                </div>
            </div>
            {error ? (
                <Error></Error>
            ) : (
                <div
                    className="grid grid-cols-3 justify-items-center py-8 gap-10">
                    {products.filter((product) => product.type === type).map((product, index) => {
                        return (
                            <div key={index}>
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    text={product.text}
                                    img={product.img}
                                    price={product.price}
                                    color={product.color}
                                ></ProductCard>
                            </div>
                        );
                    })}
                </div>
            )}
            </div>
            <div> {/*footer*/}
                <Footer></Footer>
            </div>
        </div>
    )
};

export default FilteredProducts;