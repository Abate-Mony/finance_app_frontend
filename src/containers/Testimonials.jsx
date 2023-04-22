import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
const Testimonials = () => {
    const testimonials = useRef(null)
    useEffect(() => {
        const children = [...testimonials.current.querySelectorAll(".testimonial")]
        window.addEventListener("scroll", function () {
            children.forEach((testimonial) => {
                if (testimonial) {
                    const top = testimonial.getBoundingClientRect().top
                    if (top < window.innerHeight * 0.75) {
                        if (!testimonial.classList.contains("active")) {
                            testimonial.classList.add("active")
                        }
                    } else {
                        testimonial.classList.remove("active")

                    }
                }
            })

            // const { pageYOffset } = window
            // // if (pageYOffset < 0.25 * window.innerHeight ) return
            // if (pageYOffset >= counter) {
            //     setUp(1)
            // } else if (pageYOffset < counter) {
            //     setUp(0)
            // }
            // counter = pageYOffset <= 0 ? 0 : pageYOffset
        })
    }, [])

    return (

        <section class="text-neutral-700 dark:text-neutral-300 bg-color_white dark:bg-color_black container px-4  py-10 md:px-2 mx-auto mb-20" ref={testimonials}>
            <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3 class="mb-6 text-3xl font-bold">Testimonials</h3>
                <p class="mb-6 pb-2 md:mb-12 md:pb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                </p>
            </div>
            <Swiper className='' spaceBetween={2.2} slidesPerView={1} onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                modules={
                    [Navigation, Pagination, Scrollbar, A11y, Autoplay]
                }
                navigation={{
                  prevEl: ".arrow__box-left",
                  nextEl: ".arrow__box-right",
                }}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    786: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },

                }}
            >
   <SwiperSlide> {/*  */}
                <div>
                    <div
                        class="block rounded-lg testimonial bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                        <div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                        <div
                            class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="testimonials" />
                        </div>
                        <div class="p-6">
                            <h4 class="mb-4 text-2xl font-semibold">John Smith</h4>
                            <hr />
                            <p class="mt-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    class="inline-block h-7 w-7 pr-2"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg>
                                Delectus impedit saepe officiis ab aliquam repellat rem unde
                                ducimus.
                            </p>
                        </div>
                    </div>
                </div>
                    {/*  */}</SwiperSlide>
                {/* <SwiperSlide></SwiperSlide> */}
                <SwiperSlide>
                <div>
                    <div
                        class="block rounded-lg testimonial bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                        <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                        <div
                            class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="testimonials" />
                        </div>
                        <div class="p-6">
                            <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                            <hr />
                            <p class="mt-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    class="inline-block h-7 w-7 pr-2"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg>
                                Lorem ipsum dolor sit amet eos adipisci, consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide> {/*  */}
                <div>
                    <div
                        class="block rounded-lg testimonial bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                        <div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                        <div
                            class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="testimonials" />
                        </div>
                        <div class="p-6">
                            <h4 class="mb-4 text-2xl font-semibold">John Smith</h4>
                            <hr />
                            <p class="mt-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    class="inline-block h-7 w-7 pr-2"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg>
                                Delectus impedit saepe officiis ab aliquam repellat rem unde
                                ducimus.
                            </p>
                        </div>
                    </div>
                </div>
                    {/*  */}</SwiperSlide>
                <SwiperSlide> {/*  */}
                <div>
                    <div
                        class="block rounded-lg testimonial bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                        <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                        <div
                            class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="testimonials" />
                        </div>
                        <div class="p-6">
                            <h4 class="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                            <hr />
                            <p class="mt-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    class="inline-block h-7 w-7 pr-2"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg>
                                Neque cupiditate assumenda in maiores repudi mollitia
                                architecto.
                            </p>
                        </div>
                    </div>
                </div>

                    {/*  */}</SwiperSlide>
                    <SwiperSlide>
                <div>
                    <div
                        class="block rounded-lg testimonial bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                        <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                        <div
                            class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="testimonials" />
                        </div>
                        <div class="p-6">
                            <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                            <hr />
                            <p class="mt-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    class="inline-block h-7 w-7 pr-2"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg>
                                Lorem ipsum dolor sit amet eos adipisci, consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide> {/*  */}
                <div>
                    <div
                        class="block rounded-lg testimonial bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                        <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                        <div
                            class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="testimonials" />
                        </div>
                        <div class="p-6">
                            <h4 class="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                            <hr />
                            <p class="mt-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    class="inline-block h-7 w-7 pr-2"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                </svg>
                                Neque cupiditate assumenda in maiores repudi mollitia
                                architecto.
                            </p>
                        </div>
                    </div>
                </div>

                    {/*  */}</SwiperSlide>
            </Swiper>

        </section>

    )
}

export default Testimonials