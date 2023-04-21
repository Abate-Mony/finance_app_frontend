import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,FreeMode, Thumbs  } from 'swiper'
// import { } from "swiper";

import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css"
import "swiper/css/scrollbar"
import React from "react";
import { ServiceGroup } from "./";
const OurServices = () => {
    return (
        <div className='container mx-auto py-10 my-5 px-2 overflow-hidden rounded-lg bg-color_white dark:bg-color_black ' id="our-services">
            <h1 className="text-2xl text-center mb-2">Our Services</h1>
            <span className="h-[5px] w-[100px] bg-red-400 block mb-4 mx-auto rounded-lg "></span>
        
<ServiceGroup
 />

        </div>
    )
}

export default OurServices