import { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { GrNotification } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs'
import { useNavigate, NavLink } from 'react-router-dom';
const Navbar = () => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (isOpen) {
                setIsOpen(false)
            }
        })
        if (localStorage.theme === 'white') {
            setDarkTheme(false)
            return
        }
        else if (localStorage.theme === 'dark' || (
            window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setDarkTheme(true)

        } else {
            document.documentElement.classList.remove('dark')
            setDarkTheme(false)

        }

    }, [])
    const [notification, setNotification] = useState(false)
    const navigate = useNavigate()


    const [isOpen, setIsOpen] = useState(false)
    const [darkTheme, setDarkTheme] = useState(false)
    const toggleNavBar = () => {
        setIsOpen(c => !c)

    }
    const toggleDarkTheme = () => {
        changeTheme()

    }
    const navigateToHome = () => navigate("/")
    const changeTheme = () => {
        if (!darkTheme) {
            localStorage.setItem("theme", "dark")
        } else {
            localStorage.setItem("theme", "white")
        }
        document.documentElement.classList.toggle('dark')
        setDarkTheme(c => !c)
    }
    return (
        <div className="sticky top-0 left-0 shadow-lg select-none bg-color_light  dark:bg-color_dark dark:text-white z-20">
            <div className="container mx-auto  h-[3.75rem] items-center  px-4 flex justify-between relative  ">
                <div className="text-2xl font-montserrat cursor-pointer hover:text-slate-950 hover:font-light transition-[color] " onClick={navigateToHome}>
                    {process.env.REACT_APP_MY_APP_NAME}
                </div>
                <ul className="hidden flex-col md:flex-row  md:flex items-center">
                    <li className='links-item  mx-4 md:mx-2  my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300' onClick={() => navigate("/")}><a href="#our-services">Our Service</a></li>
                    <li className='links-item  border-b-2 mx-4 md:mx-2 my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300' ><NavLink
                        to="/about-us"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-500" : ""}
                    >About Us</NavLink></li> <li className='links-item mx-4 md:mx-2 my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300'>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-500" : ""}
                    >Contact Us</NavLink></li>
                </ul>

                <ul className={`${!isOpen ? " max-h-0" :
                    " max-h-screen"} overflow-hidden transition-[max-height] duration-500  shadow
                    md:hidden absolute top-[3.75rem] left-0 bg-color_light  dark:bg-color_dark dark:text-white  w-full `}>
                    <li className='links-item-  border-b-2 mx-4 md:mx-2  my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300' >
                        <form className="px-1 my-2 rounded-l-lg overflow-hidden" onSubmit={e=>e.preventDefault()}>
                            <div className="flex relative min-h-[40px] rounded-l-lg">
                                <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                                <div className="relative w-full">
                                    <input type="search" id="search-dropdown" className="block outline-none focus:outline-none p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Services " required />
                                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </li>
                    <li className='links-item  border-b-2 mx-4 md:mx-2  my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300' onClick={() => {
                        navigate("/");
                        setIsOpen(!isOpen)
                    }}><a href="#our-services">Our Service</a></li>
                    <li className='links-item  border-b-2 mx-4 md:mx-2 my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300' onClick={()=> setIsOpen(!isOpen)}><NavLink
                        to="/about-us"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-500" : ""}
                    >About Us</NavLink></li>
                    <li className='links-item  border-b-2 mx-4 md:mx-2 my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300' onClick={()=> setIsOpen(!isOpen)}><NavLink
                        to="/contact-us"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-500" : ""}
                    >Contact Us</NavLink></li>
                   
                </ul>
                <div className='hidden md:flex gap-3 items-center'>
                <div className='hover:bg-slate-300  w-[2.5rem] h-[2.5rem] transition-bg flex items-center justify-center rounded-full ' >
                       <BsSearch size={20}/>
                    </div>
                    <div className='hover:bg-slate-300  w-[2.5rem] h-[2.5rem] transition-bg flex items-center justify-center rounded-full ' onClick={toggleDarkTheme}>
                        {
                            darkTheme ? <BsMoonStars size={20} /> : <BsSun size={20} />
                        }
                    </div>
                    <div className='hover:bg-slate-300 
                    relative  w-[2.5rem] h-[2.5rem] transition-bg   flex items-center justify-center rounded-full '
                        onClick={() => setNotification(!notification)}


                    >
                        <GrNotification size={20} />
                        <div class={`w-48 absolute top-[52px] ${notification ? "max-h-screen border" : "max-h-0"}  overflow-hidden transition-[max-height] duration-700
text-gray-900
bg-white  border-gray-200 rounded-lg dark:bg-gray-700
dark:border-gray-600 dark:text-white`}>
                            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                Profile
                            </button>
                            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                                Settings
                            </button>
                            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
                                Messages
                            </button>
                            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                                Download
                            </button>
                        </div>
                        <div className="absolute top-[6px] right-[9px] h-[10px] w-[10px] rounded-full bg-red-600 "></div>
                    </div>
                </div>

                <div className='flex md:hidden  items-center' >
                    <div className='hover:bg-slate-300 
                    relative  w-[2.5rem] h-[2.5rem] transition-bg   flex items-center justify-center rounded-full ' onClick={() => setNotification(!notification)}

                    >
                        <GrNotification size={20} />
                        <div className="absolute top-[6px] right-[9px] h-[10px] w-[10px] rounded-full bg-red-600 "></div>


                        <div class={`w-48 absolute top-[52px] ${notification ? "max-h-screen border" : "max-h-0"}  overflow-hidden transition-[max-height] duration-700
text-gray-900
bg-white  border-gray-200 rounded-lg dark:bg-gray-700
dark:border-gray-600 dark:text-white`}>
                            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                Profile
                            </button>
                            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                                Settings
                            </button>
                            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
                                Messages
                            </button>
                            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                                Download
                            </button>
                        </div>
                    </div>
                    <div className='hover:bg-slate-300  w-[2.5rem] h-[2.5rem] transition-bg flex items-center justify-center rounded-full ' onClick={toggleDarkTheme}>
                        {
                            darkTheme ? <BsMoonStars size={25} /> : <BsSun size={25} />
                        }
                    </div>
                    <div className="md:hidden h-[2.5rem] w-[2.5rem] rounded-full flex items-center justify-center hover:bg-slate-300" onClick={toggleNavBar}>
                        {
                            !isOpen ? <AiOutlineMenu size={20} /> : <IoMdClose size={27} />

                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar