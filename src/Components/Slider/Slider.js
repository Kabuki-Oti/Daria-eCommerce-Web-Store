import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../../Features/Slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data";

const Slider = () => {

    const slideIndex = useSelector((state) => state.slider.value);
    console.log("slideIndex", slideIndex);
    const dispatch = useDispatch();

    return (
        <div className="relative pb-4">
            {/*slider images and text*/}
            {sliderData.map((item) => (
                <div
                    key={item.id}
                    className={
                        parseInt(item.id) === slideIndex
                            ? "opacity-100 duration-700 ease-in-out scale-100"
                            : "opacity-0 duration-700 ease-in-out scale-95"
                    }
                >
                    {/*slider images*/}
                    {parseInt(item.id) === slideIndex && (
                        <div>
                            <img
                                className="h-screen w-full"
                                src={item.img}
                                alt="shoes" />
                        </div>
                    )}
                    {/*slider text*/}
                    <div className="absolute top-10 text-center mx-auto inset-x-1/4">
                        <p className="text-white text-3xl font-inter font-bold tracking-normal leading-none">
                            {parseInt(item.id) === slideIndex && item.text}
                        </p>
                    </div>
                </div>
            ))}
            {/*slider dots*/}
            <div className="flex absolute bottom-12 left-[45%]">
                {sliderData.map((dot, index) => (
                    <div className="mr-4" key={index}>
                        <div
                            className={
                                index === slideIndex
                                    ? "bg-[#FAD744] rounded-full p-4 cursor-pointer"
                                    : "bg-white rounded-full p-4 cursor-pointer"
                            }
                            onClick={() => dispatch(dotSlide(index))}
                        ></div>
                    </div>
                ))}
            </div>
            <div>
                {/*right button*/}
                <button
                    className="absolute top-[50%] right-4 bg-[#FAD744] rounded-full p-2 hover:bg-[#3C1A5B] hover:text-white"
                    onClick={() => dispatch(nextSlide(slideIndex + 1))}
                >
                    {
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    }
                </button>
                {/*left button*/}
                <button
                    className="absolute top-[50%] left-4 bg-[#FAD744] rounded-full p-2 hover:bg-[#3C1A5B] hover:text-white"
                    onClick={() => dispatch(prevSlide(slideIndex - 1))}
                >
                    {
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    }
                </button>
            </div>
        </div>
    );
};

export default Slider;