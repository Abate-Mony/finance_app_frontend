import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { CiCalendarDate, CiTimer } from 'react-icons/ci'
import { BsChevronLeft } from 'react-icons/bs'
import { appimage } from '../Assests/images'
import { menulist } from "../Assests/listitems";
import axios from 'axios'
import { Alert } from '../components'
import Select from 'react-select'
import { countryListAlpha2 } from '../Assests/country'
const CheckOut = () => {
    const [fx, setFx] = useState(false)
    const navigate = useNavigate()
    const [active, setActive] = useState(false)
    const [error, setError] = useState(false)
    const sideContainer = useRef(null)
    const availableTimes = ["10: am", "12:am", "3:35pm", "7:00 am", "5:50pm", "8:30pm"];
    const [selected, setSelected] = useState(null)
    const { service_id } = useParams()
    const [startDate, setStartDate] = useState(new Date());
    const [update, setUpdate] = useState(0)
    const [message, setMessage] = useState("");
    const [sex, setSex] = useState("male");
    const [fullname, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("")
    const [options, setOptions] = useState([]);
    const btn = useRef(null);
    const p = useRef(null);
    const [toggle,setToggle]=useState(false)
    useEffect(() => {
        const _options = Object.values(countryListAlpha2).map((item) => ({
            value: item, label: item

        }));
        setOptions([..._options]);

        const _btn = btn.current
        const _p = p.current;

        sideContainer.current.addEventListener("scroll", function () {
            if (_btn && _p) {
                // const top = _p.getBoundingClientRect().bottom
                // if (top > window.innerHeight) return setFx(false)
                // return setFx(true)
            }
        })

    }, [])
    const reset = () => {
        setAge("")
        setFullName("")
        setPhone("")
        setEmail("")
        setMessage("")
        setSelected(null)
        setActive(false)
        console.log("resting value")
        setToggle(true)
        sideContainer.current.scrollTo({
            top: 100000,
            behavior: "smooth"
        })

    }
    useEffect(() => {
        sideContainer.current.scrollTo({

            top: 0,
            behavior: "smooth"
        })

    }, [update])


    const baseUrl = process.env.REACT_APP_BASE_PROD_URL + "/application"
    const handleSubmit = async (e) => {
        setActive(true)
        e.preventDefault()
        try {
            const response = await axios.post(baseUrl, {
                service_type: service_id,
                time: availableTimes[selected],
                date: startDate,
                fullname,
                phone,
                age, sex, email

            })
            console.log(response)
            reset()
            

        } catch (err) {
            console.log(err)
            setActive(false)
            setError(err.response.data)
            setTimeout(() => {
                setError(false)
            }, 4000);

        }


    }

    return (

        <div className='flex container mx-auto  overflow-y-hidden'>
            <Alert toggle={toggle} setToggle={setToggle} />
            <div className="hidden lg:block mb-[100px] max-h-[calc(100vh-60px)] md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                    // src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    src={appimage}
                    className="w-full h-full"
                    alt="Phone image" />
            </div>
            <div className="md:w-8/12  lg:w-5/12 md:mx-auto pb-[100px] max-h-[calc(100vh-60px)] scroll-bar pt-10 overflow-y-auto h-screen px-4" ref={sideContainer}>

                <div className="flex-1">

                    <div className="bg-blue-400 bg-opacity-75 flex py-2 shadow-lg  rounded-md  gap-4 ">
                        <div className="flex-none ml-2 w-[1.875rem] mr-1 h-[1.875rem] flex items-center rounded-full hover:bg-slate-100 duration-300 transition-colors" onClick={() => navigate("/")}><BsChevronLeft size={25} /></div>
                        <div className="flex-1">
                            <h1 className="text-lg md:text-xl text-center- leading-5  md:text-start"><span className='gradient__text- font-medium'>{service_id === "no-service-selected" ? "no selected" : service_id}</span></h1>
                            <p></p>
                        </div>
                        {/* <div className="flex-none"></div> */}

                    </div>
                    <h1 className="font-[500] text-lg md:text-xl mt-4 leading-[3] flex items-center gap-2 uppercase"><span>Select date</span> <CiTimer size={25} /> </h1>


                    <div className="flex flex-nowrap flex-row flex-1 max-h-screen justify-center  rounded-lg ">
                        <DatePicker className="react-container"
                            fixedHeight
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            inline
                        />
                    </div>

                    <h1 className="font-[500] text-lg md:text-xl mt-8 leading-[3] flex  gap-2 items-center uppercase"><span>Select Time </span> <CiCalendarDate size={25} /></h1>
                    <div className="flex flex-wrap">

                        {
                            availableTimes.map((time, i) => (<div key={i} className="w-1/3  flex justify-center px-2 py-2 ">

                                <button type="button" class={` text-xs mx-auto transition-colors duration-500 ${selected === i ? "bg-blue-800  text-white shadow-2xl " : "text-blue-700"}
                                hover:text-white border border-blue-700
                                hover:bg-blue-800
                                focus:ring-4 
                                focus:outline-none
                                focus:ring-blue-300 font-medium rounded-lg
                                px-5 py-2 text-center 
                                dark:border-blue-500 dark:text-blue-500
                                dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800`}
                                    onClick={() => {
                                        setSelected(i)
                                        window.navigator.vibrate([50])
                                    }}
                                >
                                    {time}

                                </button>

                            </div>))
                        }

                    </div>

                </div>
                <h1 className="font-[500] text-lg md:text-xl mt-4 leading-[3] flex
                items-center gap-2 uppercase"><span>Select Country</span> <CiTimer size={25} /> </h1>

                <Select className="dark:text-black" options={options} onChange={(e) => e} />
                <form className='px-4 py-5 shadow-md' onSubmit={handleSubmit} ref={p}>


                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="text"
                            value={fullname}
                            onChange={e => setFullName(e.target.value)}
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
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
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

                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            <input value={age}
                                onChange={e => setAge(e.target.value)}
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

                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea id="message"

                        value={message}
                        onChange={e => setMessage(e.target.value)}

                        rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    <span className={`py-4 text-2xl mx-auto block text-center ${error ? "block" : "hidden"}`}>{error}</span>
                    <button ref={btn}
                        type="submit"
                        a data-te-ripple-init
                        data-te-ripple-color="light"
                        className={` task-btn ${active ? "active" : ""}
  inline-block rounded ${fx ? "block mt-4 w-full" : "fixed translate-x-[-50%]"} bottom-4 left-[50%] z-10  md:hidden w-[400px] max-w-[90vw]   bg-blue-400 px-6 pb-2 pt-2.5  my-4 mt-0 text-xs font-medium uppercase
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition- duration-150-
ease-in-out hover:bg-primary-600 mx-auto
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
                    >
                        Confirm Appointment
                    </button>
                    <div className="flex items-center justify-center mt-6" >

                        <button
                            type="submit"
                            a data-te-ripple-init
                            data-te-ripple-color="light"
                            className={` md:inline-block task-btn ${active ? "active" : ""} relative rounded hidden  bottom-4    w-[400px] max-w-[90vw]   bg-blue-400 px-6 pb-2 pt-2.5  my-4 mt-0 text-xs font-medium uppercase
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
                <h1 className="text-xl md:text-2xl font-manrope uppercase text-center gradient__text mt-10 mb-4">{service_id} </h1>
                <p  className="text-lg md:text-xl  ">Our service for <span className="gradient__text"> {service_id}</span> is design to make the best out of the best in a way the user
                    ake your financial ability to the next level with our coaching advice and ideas for a better tomorrow

                </p>

                <h1 className="text-lg md:text-xl text-center md:text-start uppercase mb-4 gradient__text font-medium ">related services</h1>
                {

                    menulist.slice(3).sort(() => 0.5 - Math.random()).map((item, index) => item !== service_id ? (<div
                        onClick={() => {
                            setUpdate(Math.random());
                            navigate(`/service/${item}`)
                        }}
                        className="bg-green-300 px-6 w-fit mb-2 py-2 inline-block mx-4 rounded-md" key={index}>{item} </div>) : "")
                }
            </div>
            <div className="mb-[200px]" />

        </div>
    )
}

export default CheckOut