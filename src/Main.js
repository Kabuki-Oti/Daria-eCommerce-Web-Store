import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Slider from "./Components/Slider/Slider";
import ProductSection from "./Components/ProductSection/ProductSection";
import Footer from "./Components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <ProductSection></ProductSection>
            <Footer></Footer>
        </div>
    )
};

export default Main;