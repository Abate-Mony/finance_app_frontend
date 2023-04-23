import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import 'swiper/css';
const Hero = () => {
  return (
    <div className="  container mx-auto bg-color_white dark:bg-color_black ">
      <div className="flex md:flex-row-reverse lg:py-2">
        <Swiper spaceBetween={1} slidesPerView={1} onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={
            [Navigation, Pagination, Scrollbar, A11y, Autoplay]
          }
          // navigation={{
          //   prevEl: ".arrow__box-left",
          //   nextEl: ".arrow__box-right",
          // }}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        >

          <SwiperSlide>
            <div className="mx-2  my-8 min-h-[300px] rounded-lg shadow-lg overflow-hidden relative bg-white dark:bg-slate-800 md:px-0 slide flex">

              <div className="flex-1 p-4 relative">
                <h1 className="text-2xl font-manrope leading-[1.6] font-semibold mb-2">
                  We focus on <br className="md:hidden" />
                  Your Story

                </h1>
                <p className="my-4 leading-[1.7]">


                  We know you live your life to the fullest we just help you plan for it.
                  Because making the right decision matters in life.

                </p>
                <button
                  type="button"
                  a data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded  bg-red-400 bg-opacity-30 px-6 pb-2 pt-2.5 w-fit my-4 mt-0 text-xs font-medium uppercase
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
ease-in-out hover:bg-primary-600 mx-auto
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Get Started
                </button>

              </div>
              <div className="flex-none w-[90px] "></div>

            </div>
          </SwiperSlide>
          <SwiperSlide> {/*  */}
            <div className="mx-2 my-8 min-h-[300px] rounded-lg shadow-lg before:bg-orange-400
               after:bg-orange-400 overflow-hidden relative bg-white dark:bg-slate-800 md:px-0 slide flex">

              <div className="flex-1 p-4 relative">
                <h1 className="text-2xl font-manrope leading-[1.6] font-semibold mb-2">
                  We focus on <br className="md:hidden" />
                  Your Story

                </h1>
                <p className="my-4 leading-[1.7]">


                  We know you live your life to the fullest we just help you plan for it.
                  Because making the right decision matters in life.

                </p>
                <button
                  type="button"
                  a data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded   bg-orange-400 px-6 pb-2 pt-2.5 w-fit my-4 mt-0 text-xs font-medium uppercase
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
ease-in-out hover:bg-primary-600 mx-auto
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Get Started
                </button>

              </div>
              <div className="flex-none w-[90px] "></div>

            </div>
            {/*  */}</SwiperSlide>
          <SwiperSlide> {/*  */}
            <div className="mx-2 my-8 min-h-[300px] rounded-lg shadow-lg before:bg-blue-400 after:bg-blue-400 overflow-hidden relative bg-white dark:bg-slate-800 md:px-0 slide flex">

              <div className="flex-1 p-4 relative">
                <h1 className="text-2xl font-manrope leading-[1.6] font-semibold mb-2">
                  We focus on <br className="md:hidden" />
                  Your Story

                </h1>
                <p className="my-4 leading-[1.7]">


                  We know you live your life to the fullest we just help you plan for it.
                  Because making the right decision matters in life.

                </p>
                <button
                  type="button"
                  a data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded   bg-blue-400 px-6 pb-2 pt-2.5 w-fit my-4 mt-0 text-xs font-medium uppercase
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
ease-in-out hover:bg-primary-600 mx-auto
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Get Started
                </button>

              </div>
              <div className="flex-none w-[90px] "></div>

            </div>
            {/*  */}</SwiperSlide>
        </Swiper>




        <div className="flex-none  hidden md:w-[300px] lg:w-[500px] md:block  py-6">
          <h1 className="text-2xl gradient__text mb-3 md:mb-6  lg:text-3xl leading-[1.4] lg:leading-[1.2] font-montserrat  rounded-sm font-bold px-4 ">Help your <br />  <span className="text-blue-400"> Businesses </span> growth <br />
            up to
            <span className='text-blue-500 underline italic ml-4'> high level</span>
          </h1>
<p className='leading-[1.3] md:leading-[1.6] mb-2 px-4'>Lorem ipisicing elit. Dignissimos aspernatur modi nemo facilis temporibus cupiditate expedita assumenda? Corporis, cum asperiores.</p>


        </div>

      </div>





    </div>
  )
}

export default Hero