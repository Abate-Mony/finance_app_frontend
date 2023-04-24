import React, {  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar"
import "./styles.css";


import {motion} from 'framer-motion'
import { FreeMode, Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from "swiper";
import { menulist } from "../Assests/listitems";
export default function App() {
    const animateOpacity = {

        offscreen: { opacity: 0, x: 50 },
        onscreen: { opacity: 1, y: 0, x:0 },duration:2
    
    }
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const navigate = useNavigate()
    const gotoservicepage = (service ="education") => {
        navigate(`/service/${service}`)
    }
    return (
        <>
            <div className="relative service-links px-[35px] min-h-[50px] flex items-center overflow-auto">
                <div className="absolute disabled:bg-green-300 btn z-10 swiper-button-pre top-[7px] hover:bg-slate-200 w-[30px] h-[30px] shadow-2xl flex items-center justify-center  left-0 rounded-full">

                    <BsChevronLeft size={30} />

                </div>
                <div className="absolute z-10 swiper-button-nxt  hover:bg-slate-200 btn top-[7px] w-[30px] h-[30px] shadow-2xl  right-0 rounded-full">
                    <BsChevronRight size={30} />

                </div>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={2}
                    freeMode={true}
                    watchSlidesProgress={true}
                    scrollbar={{ draggable: true }}

                    modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        786: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        }, 1024: {
                            slidesPerView: 5,
                        },


                    }}
                >
                    {menulist.map((item, index) => (<SwiperSlide key={index}>
                        <p style={{
                            flex: "none"
                        }} className={`font-sm uppercase text-xs md:text-sm pb-2 links-item  cursor-pointer text-center fw-semibold font-manrope `} onClick={() => {
                        }}>
                            {item}
                        </p>
                    </SwiperSlide>))}
                </Swiper>
            </div>

            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                navigation={{
                    prevEl: ".swiper-button-pre",
                    nextEl: ".swiper-button-nxt",
                }}
                modules={
                    [Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode, Thumbs]
                }
                spaceBetween={10}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                scrollbar={true}
                // modules={[FreeMode,  Thumbs]}
                className="mySwiper2"
            >
                {

                    menulist.map((item, index) => (<SwiperSlide key={index}>
                        <div className="flex md:px-2 lg:px-6 md:pt-6 md:gap-2 lg:gap-4">

                            <div className="hidden md:block w-[300px] lg:w-[500px]">

<img src="https://th.bing.com/th/id/OIP.pA1W6gV9KG94cCMwj1WRTgHaE8?pid=ImgDet&rs=1" className="h-full rounded-sm w-full objective-fit" alt="finance" />

                            </div>
                            <div className="flex-1 px-2 my-5 md:mt-0">
                                <div className="text-xl">
                                    <span className="text-orange-400"> {item} Services </span>
                                    are  design to accomdate a variaty of individuals  and business all around the world
                                    <ol class="border-l text-sm border-neutral-300 dark:border-neutral-500">
                                        <li>
                                            <div class="flex-start flex items-center pt-3">
                                                <div
                                                    class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                                <p class="text-sm text-neutral-500 dark:text-neutral-300">
                                                    01.07.2021
                                                </p>
                                            </div>
                                            <div class="mb-6 ml-4 mt-2">
                                                <h4 class="mb-1.5 text-lg font-semibold">Founding budget and coaching </h4>
                                                <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque

                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="flex-start flex items-center pt-2">
                                                <div
                                                    class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                                <p class="text-sm text-neutral-500 dark:text-neutral-300">
                                                    13.09.2021
                                                </p>
                                            </div>
                                            <div class="mb-6 ml-4 mt-2">
                                                <h4 class="mb-1.5 text-lg font-semibold">financial and planning </h4>
                                                <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                    Libero expedita explicabo eius fugiat quia aspernatur autem
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="flex-start flex items-center pt-2">
                                                <div
                                                    class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                                <p class="text-sm text-neutral-500 dark:text-neutral-300">
                                                    25.11.2021
                                                </p>
                                            </div>
                                            <div class="ml-4 mt-2 pb-5">
                                                <h4 class="mb-1.5 text-lg font-semibold">porfolio management for all business and personal acounts </h4>
                                                <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                    Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                    natus! Eum corporis illum nihil officiis tempore. Excepturi illo

                                                </p>
                                            </div>
                                        </li>
                                    </ol>
                                    <motion.button      
                                    variants={animateOpacity}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                        
                                    
                                    onClick={()=>gotoservicepage(item)}
                                        type="button"
                                        a data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className="inline-block rounded  bg-blue-400 px-6 pb-2 pt-2.5 w-fit my-4 mt-0 text-xs font-medium uppercase
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
ease-in-out hover:bg-primary-600 mx-auto
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                        Appy for Service
                                    </motion.button>
                                </div>

                            </div>


                        </div>

                        {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
                    </SwiperSlide>))

                }

            </Swiper>

        </>
    );
}
