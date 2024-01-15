import React from "react";
import ProductSectionItem from "./ProductSectionItem";
import { storeData } from "../../assets/data";

const ProductSection = () => {

    return (
        <div>
            <div className="bg-[#3C1A5B] tracking-wide p-5 w-[90%] mx-auto rounded-md">
                <h3 className="text-[#FAD744] text-center text-lg font-inter font-bold tracking-normal leading-none">
                    !!! SUMMER SALE ON T-SHIRTS !!!
                </h3>
            </div>
            <div
            className="grid grid-cols-3 justify-items-center py-9 gap-3 mx-auto max-w-7xl">
                {storeData.slice(0,6).map((product, index) => {
                    return (
                    <div key={index}>
                        <ProductSectionItem 
                        id={product.id}
                        name={product.name}
                        img={product.img}
                        text={product.text}
                        price={product.price}
                        color={product.color}
                        size={product.size}
                        ></ProductSectionItem>

                    </div>)
                })}
            </div>
            
        </div>
    )
};

export default ProductSection;

