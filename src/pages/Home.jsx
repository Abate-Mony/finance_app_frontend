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
      
      
      {/* <div className="container- space-y-10 mx-0 bg-slate-600 text-white dark:text-white flex   flex-col-reverse md:flex-row-reverse md:mx-auto md:px-[2rem] shadow -mt-[30px] pb-[100px] pt-[30px] md:pt-[100px] lg:px-[4rem]">

        <div className="flex-1">
          <div
            class="block w-[400px] max-w-[calc(100%-30px)] mx-auto rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                alt="" />
            </a>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>

              <button
                type="submit"
                className="inline-block bg-blue-400 w-fit 
            rounded bg-primary px-10
            pb-2.5 pt-3 text-sm font-medium
            uppercase leading-normal
            text-white
            shadow-[0_4px_9px_-4px_#3b71ca]
            transition duration-150
            ease-in-out hover:bg-primary-600
            hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
            focus:bg-primary-600 
            focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 active:bg-primary-700 
            active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] 
            dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
            dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                continue
              </button>



            </div>
          </div>

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
      </div> */}

      <Testimonials />
      <Footer />


    </div>
  )
}

export default Home