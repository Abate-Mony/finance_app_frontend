import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useScroll } from "framer-motion"
const ApplyService = () => {
    const elm = useRef(null)
    const [fixed, setFixed] = useState(true)
    const [selected, setSelected] = useState(true)
   
    const { service_id } = useParams()
    return (
        <div className=" py-4 pb-20 max-w-screen-xl mx-1 md:mx-auto px-2 md:px-6 md:flex">
            <div className="hidden md:block w-[300px] lg:w-[600px]">
                left side

            </div>
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





                <p className="md:mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi consectetur fuga reprehenderit! Corporis architecto aspernatur asperiores eius distinctio tenetur consequatur quod totam saepe quo suscipit rem officiis autem, mollitia, reprehenderit obcaecati explicabo vel optio qui ullam eum vitae laborum?</p>

                <button
                    type="button"
                    a data-te-ripple-init
                    data-te-ripple-color="light"
                    className={`inline-block rounded ${fixed ? "fixed" : ""} bottom-4 left-[50%] translate-x-[-50%] md:hidden w-[400px] max-w-[90vw]   bg-blue-400 px-6 pb-2 pt-2.5  my-4 mt-0 text-xs font-medium uppercase
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
                        type="button"
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


                <p ref={elm}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi consectetur fuga reprehenderit! Corporis architecto aspernatur asperiores eius distinctio tenetur consequatur quod totam saepe quo suscipit rem officiis autem, mollitia, reprehenderit obcaecati explicabo vel optio qui ullam eum vitae laborum?</p>
            </div>
        </div>
    )
}

export default ApplyService