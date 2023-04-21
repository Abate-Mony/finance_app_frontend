import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar"
import "./styles.css";

// import required modules
import { FreeMode, Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from "swiper";
import { menulist } from "../Assests/listitems";
export default function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className="relative px-[35px] min-h-[50px] flex items-center overflow-auto">
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
                    modules={[FreeMode, Navigation, Thumbs]}
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
                        }} className={`font-sm uppercase text-sm pb-2 links-item  cursor-pointer text-center fw-semibold font-manrope `} onClick={() => {
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
                <SwiperSlide>
                    <div className="flex">

                        <div className="hidden md:block w-[300px]">



                        </div>
                        <div className="flex-1 px-2 my-5">
                            <div className="text-xl">
                                <span className="text-orange-400"> Our Services </span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                                sodales vehicula.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                                laudantium error architecto recusandae natus sapiente sit nam
                                                eaque, consectetur porro molestiae ipsam an deleniti.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                                ipsam necessitatibus incidunt, explicabo.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                                <button
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
                                </button>
                            </div>

                        </div>


                    </div>

                    {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">

                        <div className="hidden md:block w-[300px]">



                        </div>
                        <div className="flex-1 px-2 my-5">
                            <div className="text-xl">
                                <span className="text-orange-400"> Our Services </span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                                sodales vehicula.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                                laudantium error architecto recusandae natus sapiente sit nam
                                                eaque, consectetur porro molestiae ipsam an deleniti.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                                ipsam necessitatibus incidunt, explicabo.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                                <button
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
                                </button>
                            </div>

                        </div>


                    </div>

                    {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">

                        <div className="hidden md:block w-[300px]">



                        </div>
                        <div className="flex-1 px-2 my-5">
                            <div className="text-xl">
                                <span className="text-orange-400"> Our Services </span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                                sodales vehicula.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                                laudantium error architecto recusandae natus sapiente sit nam
                                                eaque, consectetur porro molestiae ipsam an deleniti.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                                ipsam necessitatibus incidunt, explicabo.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                                <button
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
                                </button>
                            </div>

                        </div>


                    </div>

                    {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">

                        <div className="hidden md:block w-[300px]">



                        </div>
                        <div className="flex-1 px-2 my-5">
                            <div className="text-xl">
                                <span className="text-orange-400"> Our Services </span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                                sodales vehicula.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                                laudantium error architecto recusandae natus sapiente sit nam
                                                eaque, consectetur porro molestiae ipsam an deleniti.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                                ipsam necessitatibus incidunt, explicabo.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                                <button
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
                                </button>
                            </div>

                        </div>


                    </div>

                    {/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">

                        <div className="hidden md:block w-[300px]">



                        </div>
                        <div className="flex-1 px-2 my-5">
                            <div className="text-xl">
                                <span className="text-orange-400"> Our Services </span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                                sodales vehicula.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                                laudantium error architecto recusandae natus sapiente sit nam
                                                eaque, consectetur porro molestiae ipsam an deleniti.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                                ipsam necessitatibus incidunt, explicabo.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                                <button
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
                                </button>
                            </div>

                        </div>


                    </div>

                    {/* <img src="https://swiperjs.com/demos/images/nature-5.jpg" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">

                        <div className="hidden md:block w-[300px]">



                        </div>
                        <div className="flex-1 px-2 my-5">
                            <div className="text-xl">
                                <span className="text-orange-400"> Our Services </span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                                sodales vehicula.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                                laudantium error architecto recusandae natus sapiente sit nam
                                                eaque, consectetur porro molestiae ipsam an deleniti.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                                ipsam necessitatibus incidunt, explicabo.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                                <button
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
                                </button>
                            </div>

                        </div>


                    </div>

                    {/* <img src="https://swiperjs.com/demos/images/nature-6.jpg" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">

                        <div className="hidden md:block w-[300px]">



                        </div>
                        <div className="flex-1 px-2 my-5">
                            <div className="text-xl">
                                <span className="text-orange-400"> Our Services </span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                                sodales vehicula.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                                laudantium error architecto recusandae natus sapiente sit nam
                                                eaque, consectetur porro molestiae ipsam an deleniti.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                                ipsam necessitatibus incidunt, explicabo.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                                <button
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
                                </button>
                            </div>

                        </div>


                    </div>

                    {/* <img src="https://swiperjs.com/demos/images/nature-7.jpg" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">

                        <div className="hidden md:block w-[300px]">



                        </div>
                        <div className="flex-1 px-2 my-5">
                            <div className="text-xl">
                                <span className="text-orange-400"> Our Services </span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                                sodales vehicula.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                                laudantium error architecto recusandae natus sapiente sit nam
                                                eaque, consectetur porro molestiae ipsam an deleniti.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                                ipsam necessitatibus incidunt, explicabo.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                                <button
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
                                </button>
                            </div>

                        </div>


                    </div>

                    {/* <img src="https://swiperjs.com/demos/images/nature-8.jpg" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">

                        <div className="hidden md:block w-[300px]">



                        </div>
                        <div className="flex-1 px-2 my-5">
                            <div className="text-xl">
                                <span className="text-orange-400"> Our Services </span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                                sodales vehicula.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                                laudantium error architecto recusandae natus sapiente sit nam
                                                eaque, consectetur porro molestiae ipsam an deleniti.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                                ipsam necessitatibus incidunt, explicabo.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                                <button
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
                                </button>
                            </div>

                        </div>


                    </div>

                    {/* <img src="https://swiperjs.com/demos/images/nature-9.jpg" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">

                        <div className="hidden md:block w-[300px]">



                        </div>
                        <div className="flex-1 px-2 my-5">
                            <div className="text-xl">
                                <span className="text-orange-400"> Our Services </span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                                sodales vehicula.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                                laudantium error architecto recusandae natus sapiente sit nam
                                                eaque, consectetur porro molestiae ipsam an deleniti.
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
                                            <h4 class="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                            <p class="mb-3 text-neutral-500 dark:text-neutral-300">
                                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                                ipsam necessitatibus incidunt, explicabo.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                                <button
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
                                </button>
                            </div>

                        </div>


                    </div>

                    {/* <img src="https://swiperjs.com/demos/images/nature-10.jpg" /> */}
                </SwiperSlide>
            </Swiper>

        </>
    );
}
