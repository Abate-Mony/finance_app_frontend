import { useNavigate, useParams } from 'react-router-dom'
import { useState } from "react"

const CheckOut = () => {
    const navigate = useNavigate()
    //   const gotoInfo = () => navigate("/information");
    const [selected, setSelected] = useState(true)
    const { service_id } = useParams()

    return (

        <div className='flex container mx-auto  overflow-y-hidden'>

            <div className="hidden lg:block mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="w-full"
                    alt="Phone image" />
            </div>
            <div className="md:w-8/12  lg:w-5/12 pb-[100px] max-h-[calc(100vh-60px)] scroll-bar pt-10 overflow-y-auto h-screen px-4">

                <div className="flex-1">

                    <div className="bg-blue-400 flex py-4 shadow-lg  rounded-md  gap-4 ">
                        <div className="flex-none"></div>
                        <div className="flex-1">
                            <h1 className="text-lg md:text-xl text-center md:text-start">service for  {service_id}</h1>
                            <p></p>
                        </div>
                        <div className="flex-none"></div>

                    </div>
                    <h1 className="font-[500] text-lg md:text-xl mt-4 leading-[3]">Select  Date</h1>
                    <div className="min-h-[300px] max-h-screen bg-orange-400  rounded-lg "></div>
                    <h1 className="font-[500] text-lg md:text-xl mt-8 leading-[3]">Select  Date</h1>
                    <div className="flex flex-wrap">

                        {
                            Array.from({ length: 6 }, (arr, i) => (<div key={i} className="w-1/3  px-4 py-2">
                                <div className={`shadow rounded-lg px-4 py-2 ${selected === i ? "bg-blue-300" : ""}`} onClick={() => setSelected(i)}> 9:00 am</div>
                            </div>))
                        }

                    </div>



                  

                </div>
                <form  className='px-4 py-5 shadow-md'>


                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full 
  rounded 
  border-2
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
  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="fullname"
                            placeholder="Full Names" required />
                        <label
                            htmlFor="fullname"
                            className="pointer-events-none 
  absolute left-3
  top-0 mb-0
  max-w-[90%]
  origin-[0_0]
  truncate 
  pt-[0.37rem] 
  leading-[2.15]
  text-neutral-500
  transition-all duration-200  
  ease-out 
  peer-focus:-translate-y-[1.15rem]
  peer-focus:scale-[0.8]
  peer-valid:scale-[0.8]
  peer-valid:text-blue-400
  peer-valid:-translate-y-[1.15rem]
  peer-focus:text-blue-400
  peer-focus:bg-color_light
  peer-valid:bg-color_light
  dark:peer-focus:bg-color_dark
  dark:peer-valid:bg-color_dark
  px-0
  bg-transparent
  peer-data-[te-input-state-active]:-translate-y-[1.15rem]
   rounded-sm
   peer-data-[te-input-state-active]:scale-[0.8]
  motion-reduce:transition-none
  dark:text-neutral-200
  dark:peer-focus:text-primary"

                        >
                            Full Names
                        </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="number"
                            className="peer block min-h-[auto] w-full 
  rounded 
  border-2
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
  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="phonenumber"
                            placeholder="Phone number" required />
                        <label
                            htmlFor="phonenumber"
                            className="pointer-events-none 
  absolute left-3
  top-0 mb-0
  max-w-[90%]
  origin-[0_0]
  truncate 
  pt-[0.37rem] 
  leading-[2.15]
  text-neutral-500
  transition-all duration-200  
  ease-out 
  peer-focus:-translate-y-[1.15rem]
  peer-focus:scale-[0.8]
  peer-valid:scale-[0.8]
  peer-valid:text-blue-400
  peer-valid:-translate-y-[1.15rem]
  peer-focus:text-blue-400
  peer-focus:bg-color_light
  peer-valid:bg-color_light
  dark:peer-focus:bg-color_dark
  dark:peer-valid:bg-color_dark
  px-0
  bg-transparent
  peer-data-[te-input-state-active]:-translate-y-[1.15rem]
   rounded-sm
   peer-data-[te-input-state-active]:scale-[0.8]
  motion-reduce:transition-none
  dark:text-neutral-200
  dark:peer-focus:text-primary"

                        >
                            Phone Number
                        </label>
                    </div>

                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full 
  rounded 
  border-2
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
  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput3"
                            placeholder="Email address" required />
                        <label
                            htmlFor="exampleFormControlInput3"
                            className="pointer-events-none 
  absolute left-3
  top-0 mb-0
  max-w-[90%]
  origin-[0_0]
  truncate 
  pt-[0.37rem] 
  leading-[2.15]
  text-neutral-500
  transition-all duration-200  
  ease-out 
  peer-focus:-translate-y-[1.15rem]
  peer-focus:scale-[0.8]
  peer-valid:scale-[0.8]
  peer-valid:text-blue-400
  peer-valid:-translate-y-[1.15rem]
  peer-focus:text-blue-400
  peer-focus:bg-color_light
  peer-valid:bg-color_light
  dark:peer-focus:bg-color_dark
  dark:peer-valid:bg-color_dark
  px-0
  bg-transparent
  peer-data-[te-input-state-active]:-translate-y-[1.15rem]
   rounded-sm
   peer-data-[te-input-state-active]:scale-[0.8]
  motion-reduce:transition-none
  dark:text-neutral-200
  dark:peer-focus:text-primary"

                        >Email address
                        </label>
                    </div>
                    <div className="mb-6 flex items-center justify-between select-none ">
                        <div className="mb-[0.125rem] pb-0
                  block min-h-[50px]  border-2 mr-4  relative pl-[1.5rem] flex-1">
                            <span className="absolute left-[15px] px-2
                      rounded-sm h-[30px] bg-color_light
                  dark:bg-color_dark top-[-15px]">
                                user gender
                            </span>
                            <div className="px-2 w-fit mt-4 flex gap-2">
                                <div className="flex items-center">

                                    <input
                                        className="pb-0"
                                        type="radio"
                                        value="male"
                                        id="male"
                                        name="gender"
                                        checked
                                    />
                                    <label
                                        className="inline-block  pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor="gender">
                                        Male
                                    </label>
                                </div>
                                <div className="flex items-center">

                                    <input
                                        type="radio"
                                        value="female"
                                        id="female"
                                        name="gender"
                                    />
                                    <label
                                        className="inline-block  pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor="gender">
                                        female
                                    </label>
                                </div>

                            </div>

                        </div>

                        <div className="relative w-[80px] flex-none" data-te-input-wrapper-init>
                            <input
                                type="number"
                                className="peer block min-h-[auto] w-full 
  rounded
  border-2
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
  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="age"
                                placeholder="age" required />
                            <label
                                htmlFor="age"
                                className="pointer-events-none 
  absolute left-3
  top-0 mb-0
  max-w-[90%]
  origin-[0_0]
  truncate 
  pt-[0.37rem] 
  leading-[2.15]
  text-neutral-500
  transition-all duration-200  
  ease-out 
  peer-focus:-translate-y-[1.15rem]
  peer-focus:scale-[0.8]
  peer-valid:scale-[0.8]
  peer-valid:text-blue-400
  peer-valid:-translate-y-[1.15rem]
  peer-focus:text-blue-400
  peer-focus:bg-color_light
  peer-valid:bg-color_light
  dark:peer-focus:bg-color_dark
  dark:peer-valid:bg-color_dark
  px-0
  bg-transparent
  peer-data-[te-input-state-active]:-translate-y-[1.15rem]
   rounded-sm
   peer-data-[te-input-state-active]:scale-[0.8]
  motion-reduce:transition-none
  dark:text-neutral-200
  dark:peer-focus:text-primary"

                            >
                                Age
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        a data-te-ripple-init
                        data-te-ripple-color="light"
                        className={`
  inline-block rounded fixed bottom-4 left-[50%] z-10 translate-x-[-50%] md:hidden w-[400px] max-w-[90vw]   bg-blue-400 px-6 pb-2 pt-2.5  my-4 mt-0 text-xs font-medium uppercase
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
ease-in-out hover:bg-primary-600 mx-auto
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
                    >
                        Confirm Appointment
                    </button>
                    <div className="flex items-center justify-center" >

                        <button
                            type="submit"
                            a data-te-ripple-init
                            data-te-ripple-color="light"
                            className={` md:inline-block rounded hidden  bottom-4    w-[400px] max-w-[90vw]   bg-blue-400 px-6 pb-2 pt-2.5  my-4 mt-0 text-xs font-medium uppercase
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
ease-in-out hover:bg-primary-600 mx-auto
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
                        >
                            Confirm Appointment
                        </button>

                    </div>
                </form>

            </div>

        </div>
    )
}

export default CheckOut