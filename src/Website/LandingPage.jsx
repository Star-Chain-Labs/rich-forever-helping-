import React from "react";
import Footer from "./Footer";
import HomePageAnimation from "./HomePageAnimation";
import LandingSlider from "./LandingSlider";
import NavBar from "./NavBar";
import Testimonials from "./Testimonials";

import Products from "./Products";
import VeganMeaning from "./VeganMeaning";
import TextSlider from "./TextSlider";
import Banner from "./Banner";
import MarqueeDemo from "./Marque/MarqueDemo";

const LandingPage = () => {
    return (
        <div className=" flex flex-col gap-4">
            <NavBar />
            <div className="">
                <LandingSlider />
                <VeganMeaning />
                {/* <TextSlider /> */}
                <MarqueeDemo />
                <Products />
                {/* <HomePageAnimation /> */}
                {/* <Testimonials /> */}
                <Banner />
                
                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;
