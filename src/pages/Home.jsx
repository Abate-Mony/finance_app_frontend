// import { Cookies } from "../components"

import Marquee from 'react-fast-marquee'
import { Advert, Footer, Hero, OurServices, Testimonials } from "../containers"
import { motion, } from 'framer-motion'
import { possibility } from "../Assests/images"
import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
const Home = () => {
  const icons = useRef(null)
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (icons.current) {
        const _icons = [...icons.current.querySelectorAll(".icon")];
        _icons.forEach((item, index) => {
          if (item.getBoundingClientRect().top< (window.innerHeight * 0.8)) {
            if (!item.classList.contains("active")) {
              item.classList.add("active")
            }
          } else {
            item.classList.remove("active")
          }
        })}
  })


  return () => {

  }
}, [])
return (
  <div className="overflow-y-auto  h-screen-" >
    {/* <Cookies /> */}
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">We invest in the world’s potential</h1>
        <p className="mb-8 text-sm font-normal text-gray-500 dark:text-white- lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at {process.env.REACT_APP_MY_APP_NAME} we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <NavLink to={"/service/self education and personal health"} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </NavLink>
          <NavLink to={"/about-us"} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Learn more
          </NavLink>
        </div>
      </div>
    </section>

    {/* <Cookies /> */}
    {/* {process.env.REACT_APP_BASE_LOCAL_URL} */}

    <Hero />
    <Advert />
    <OurServices />
    <div className="max-w-[50rem] shadow-2xl mx-4  px-2 md:mx-auto pb-6 z-1  mt-[3rem] rounded-lg  relative   bg-color_white dark:bg-color_black">
      <motion.div
      
      initial={{ opacity: 0, scale: 0.5,x:"-2.5rem" }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
        className=" bg-slate-400 w-[5rem] h-[5rem] mx-auto rounded-full shadow-xl peer overflow-hidden translate-y-[-2.5rem] 
        ">

        <img src="https://web-assets.zendesk.com/images/p-contact-us/avatar1.svg" alt="user" className="h-full w-full hover:scale-110 duration-700 transition-[scale] scale-105 peer-hover:scale-125" />


      </motion.div>


      <motion.h1

        initial={{

          scale: 0.7
        }}
        whileInView={{
          scale: 1
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.8 }}

        className="text-lg md:text-xl text-center leading-6 font-montserrat  rounded-sm ">Grow   <span className="text-orange-400"> Faster</span> with help your customers and save time for your business and personal life</motion.h1>


    </div>


    <div className="container- space-y-10 mx-0 bg-slate-600 text-white dark:text-white flex   flex-col-reverse md:flex-row md:mx-auto md:px-[2rem] shadow -mt-[30px] pb-[100px] pt-[30px] md:pt-[100px] lg:px-[4rem]">

      <div className="flex-1">

        <img src={possibility} alt="user" className="h-full w-full object-fill max-h-[500px]" />

      </div>
      <div className="flex-1">

        <motion.h1

          initial={{

            scale: 0.7
          }}
          whileInView={{
            scale: 1
          }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.8 }}

          className="text-xl md:text-3xl font-[600] text-center leading-[1.6] font-montserrat  rounded-sm ">Take your    <span className="text-orange-400"> financial ability </span> to the next level  with our coaching advice and  ideas for a better tomorrow</motion.h1>
        <p className="px-4 md:px-2 text-center py-6 md:text-start md:pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempore eaque, quidem qui dolore aut omnis distinctio, numquam velit pariatur quam vitae eos officia iusto, perspiciatis recusandae quae repellendus suscipit?</p>


      </div>
    </div>


    <div className="container my-24 px-6 mx-auto">

      <section className="mb-32 text-gray-800 dark:text-white text-center icons-container" ref={icons}>
        <h2 className="text-2xl font-montserrat leading-6 lg:text-3xl font-bold mb-12 gradient__text">Why our services are so <u className="text-blue-600"> great?</u></h2>
        <div className="grid md:grid-cols-3 lg:gap-x-12">
          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-blue-600 rounded-lg shadow-lg inline-block mb-6 icon">
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                </path>
              </svg>
            </div>
            <h5 className="text-lg font-bold mb-4">Support 24/7</h5>
            <p className="text-gray-500 dark:text-white">
              Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Reiciendis
              optio minus mollitia rerum labore facilis inventore voluptatem ad, quae quia sint.
              Ullam.
            </p>
          </div>

          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-blue-600 rounded-lg shadow-lg inline-block mb-6 icon">
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
                </path>
              </svg>
            </div>
            <h5 className="text-lg font-bold mb-4">Safe and solid</h5>
            <p className="text-gray-500 dark:text-white">
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam aspernatur odio
              soluta, quisquam dolore animi mollitia a omnis praesentium, expedita nobis!
            </p>
          </div>

          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-blue-600 rounded-lg shadow-lg inline-block mb-6 icon">
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="currentColor"
                  d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
                </path>
              </svg>
            </div>
            <h5 className="text-lg font-bold mb-4">Extremely fast</h5>
            <p className="text-gray-500 dark:text-white">
              Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic
              voluptatibus dolores exercitationem? Facilis debitis aspernatur amet nisi?
            </p>
          </div>
        </div>
      </section>

    </div>
    <h2 className="text-2xl lg:text-3xl font-montserrat font-bold mb-6 gradient__text text-center mdtext-start">Trusted by</h2>
    <div className="flex justify-center gap-4">
      <Marquee play pauseOnClick pauseOnHover className="text-xl py-6 pt-3">
        <div className="mb-12  mx-4 ">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/8.png"
            className="img-fluid grayscale max-w-[90px]"

          />
        </div>

        <div className="mb-12  mx-4 ">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/2.png"
            className="img-fluid grayscale max-w-[90px]"

          />
        </div>

        <div className="mb-12  mx-4 ">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/7.png"
            className="img-fluid grayscale max-w-[90px]"

          />
        </div>

        <div className="mb-12  mx-4 ">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/1.png"
            className="img-fluid grayscale max-w-[90px]"

          />
        </div>

        <div className="mb-12  mx-4 ">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/4.png"
            className="img-fluid grayscale max-w-[90px]"

          />
        </div>

        <div className="mb-12  mx-4 ">
          <img
            src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/5.png"
            className="img-fluid grayscale max-w-[90px]"

            alt="Sony - logo"
          />
        </div>


      </Marquee>




    </div>



    <section>



    </section>
    <Testimonials />
    <Footer />


  </div>
)
}

export default Home