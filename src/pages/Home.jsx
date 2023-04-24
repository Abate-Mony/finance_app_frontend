// import { ChatBtn, Cookies } from "../components"

import { Advert, Footer, Hero, OurServices, Testimonials } from "../containers"
import { motion, } from 'framer-motion'
import { possibility } from "../Assests/images"
const Home = () => {
  // const pic

  return (
    <div className="home__wrapper h-scre overflow-y-auto" style={{ height: "calc(100vh - 60px)" }}>

      {/* <Cookies /> */}


      <Hero />
      <Advert />
      <OurServices />
      <div className="max-w-[50rem] shadow-2xl mx-4  px-2 md:mx-auto pb-6 z-1  mt-[60px] rounded-lg  relative   bg-color_white dark:bg-color_black">
        <div
          className=" bg-slate-400 w-[80px] h-[80px] mx-auto rounded-full shadow-xl peer overflow-hidden translate-y-[-40px] 
        ">

          <img src="https://web-assets.zendesk.com/images/p-contact-us/avatar1.svg" alt="user" className="h-full w-full hover:scale-110 duration-700 transition-[scale] scale-105 peer-hover:scale-125" />


        </div>


        <motion.h1

          initial={{

            scale: 0.7
          }}
          whileInView={{
            scale: 1
          }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.8 }}

          className="text-xl md:text-2xl text-center leading-[1.6] font-montserrat  rounded-sm ">Grow   <span className="text-orange-400"> Faster</span> with help your customers and save time for your business and personal life</motion.h1>


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

          <div className="flex px-4 mb-6 w-full items-center mt-4 shadow-lg">
            <div className="relative flex-1" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full 
              rounded 
              border-2
              text-white
              border-slate-600
              focus:border-2
              focus:border-blue-400
              valid:border-blue-400
              bg-transparent
              px-3 py-[0.32rem]
              leading-[2.15] 
              outline-none
              transition-all 
              duration-200
              ease-linear
              focus:placeholder:opacity-100
              data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  "
                id="exampleFormControlInput3"
                placeholder="Email address" required />

            </div>

            <div className="flex-none min-h-[50px] flex items-center -ml-1 z-[5] w-fit bg-orange-400 px-4 rounded-e-lg">
              Get Started

            </div>

          </div>
        </div>
      </div>


      <div class="container my-24 px-6 mx-auto">

        <section class="mb-32 text-gray-800 text-center">
          <h2 class="text-3xl font-bold mb-12 gradient__text">Why our services are so <u class="text-blue-600"> great?</u></h2>
          <div class="grid md:grid-cols-3 lg:gap-x-12">
            <div class="mb-12 md:mb-0">
              <div class="p-4 bg-blue-600 rounded-lg shadow-lg inline-block mb-6">
                <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                  </path>
                </svg>
              </div>
              <h5 class="text-lg font-bold mb-4">Support 24/7</h5>
              <p class="text-gray-500">
                Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Reiciendis
                optio minus mollitia rerum labore facilis inventore voluptatem ad, quae quia sint.
                Ullam.
              </p>
            </div>

            <div class="mb-12 md:mb-0">
              <div class="p-4 bg-blue-600 rounded-lg shadow-lg inline-block mb-6">
                <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
                  </path>
                </svg>
              </div>
              <h5 class="text-lg font-bold mb-4">Safe and solid</h5>
              <p class="text-gray-500">
                Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam aspernatur odio
                soluta, quisquam dolore animi mollitia a omnis praesentium, expedita nobis!
              </p>
            </div>

            <div class="mb-12 md:mb-0">
              <div class="p-4 bg-blue-600 rounded-lg shadow-lg inline-block mb-6">
                <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path fill="currentColor"
                    d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
                  </path>
                </svg>
              </div>
              <h5 class="text-lg font-bold mb-4">Extremely fast</h5>
              <p class="text-gray-500">
                Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic
                voluptatibus dolores exercitationem? Facilis debitis aspernatur amet nisi?
              </p>
            </div>
          </div>
        </section>

      </div>


      <Testimonials />
      <Footer />


    </div>
  )
}

export default Home