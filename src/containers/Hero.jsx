import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import {motion} from  "framer-motion"
const Hero = () => {
const navigate=useNavigate();

  return (
    <div className=" md:text-xl font-manrope container mx-auto bg-color_white dark:bg-color_black ">
      <motion.div
      initial={{y:10,opacity:0,x:-100}}
      whileInView={{y:0,opacity:1,x:0}}
      transition={{duration:0.5}}
      
      className="flex hero-swiper mt-5 md:flex-row-reverse lg:py-2">
        <Swiper spaceBetween={1} slidesPerView={1} onSlideChange={() =>0}
          onSwiper={(swiper) => 0}
          modules={
            [Navigation, Pagination, Scrollbar, A11y, Autoplay]
          }
         

          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
        >

          <SwiperSlide>
            <div className="mx-2    my-8 min-h-[18.75rem]- rounded-lg shadow-lg overflow-hidden relative bg-white dark:bg-slate-800 md:px-0 slide flex">

              <div className="flex-1 p-4 relative">
                <h1 className="text-xl md:text-2xl font-manrope leading-5 font-semibold mb-2">
                  We focus on <br className="md:hidden" />
                  Your Story

                </h1>
                <p className="my-4 leading-5 md:text-lg lg:text-xl ">
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
                onClick={()=>navigate("/service/self growth")}
                >
                  Get Started
                </button>

              </div>
              <div className="flex-none w-[2.625rem] md:w-[3.65rem] lg:w-[4.5rem] "></div>

            </div>
          </SwiperSlide>
          <SwiperSlide> {/*  */}
            <div className="mx-2 my-8 min-h-[18.75rem]- rounded-lg shadow-lg before:bg-orange-400 
               after:bg-orange-400 overflow-hidden relative bg-white dark:bg-slate-800 md:px-0 slide flex">

              <div className="flex-1 p-4 relative">
                <h1 className="text-xl md:text-2xl font-manrope leading-5 font-semibold mb-2">
                  We make you choose <br className="md:hidden" />
                 the right path

                </h1>
                <p className="my-4 leading-5 md:text-lg lg:text-xl">

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
onClick={()=>navigate("/service/self growth")}
                
                >
                  Get Started
                </button>

              </div>
              <div className="flex-none w-[2.625rem] md:w-[3.65rem] lg:w-[4.5rem] "></div>

            </div>
            {/*  */}</SwiperSlide>
          <SwiperSlide> {/*  */}
            <div className="mx-2 my-8 min-h-[18.75rem]- rounded-lg shadow-lg before:bg-blue-400 after:bg-blue-400 overflow-hidden relative bg-white dark:bg-slate-800 md:px-0 slide flex">

              <div className="flex-1 p-4 relative">
                <h1 className="text-xl md:text-2xl font-manrope leading-5 font-semibold mb-2">
                  The results speaks  <br className="md:hidden" />
            for themeselves

                </h1>
                <p className="my-4 leading-5 md:text-lg lg:text-xl">


                  We know you live your life to the fullest we just help you plan for it.
                  Because making the right decision matters in life.

                </p>
                <button
                onClick={()=>navigate("/service/self growth")}
                
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
              <div className="flex-none w-[2.625rem] md:w-[3.65rem] lg:w-[4.5rem] "></div>

            </div>
            {/*  */}</SwiperSlide>
        
        </Swiper>

        <div className="flex-none  hidden md:w-[18.75rem] lg:w-[31.25rem] md:block  py-6">
          <h1 className="text-2xl gradient__text mb-3 md:mb-6  lg:text-3xl leading-5 lg:leading-[1.2] font-montserrat  rounded-sm font-bold px-4 ">Help your <br />  <span className="text-blue-400"> Businesses </span> growth <br />
            up to
            <span className='text-blue-500 underline italic ml-4'> high level</span>
          </h1>
<p className='leading-[1.3] md:leading-[1.6] mb-2 px-4'>Lorem ipisicing elit. Dignissimos aspernatur modi nemo facilis temporibus cupiditate expedita assumenda? Corporis, cum asperiores.</p>


        </div>

      </motion.div>





    </div>
  )
}

export default Hero