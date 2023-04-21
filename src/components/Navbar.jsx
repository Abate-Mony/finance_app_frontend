import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { GrNotification } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [isLogin, setIslogin] = useState(true)
    const navigate = useNavigate()
    const gotoLoginPage = () => {
        // navigate("/login")
        setIsOpen(false)

    }
    const gotoRegisterPage = () => {
        navigate("/register")
        setIsOpen(false)

    }
    const [isOpen, setIsOpen] = useState(false)
    const [darkTheme, setDarkTheme] = useState(false)
    const toggleNavBar = () => {
        setIsOpen(c => !c)

    }
    const toggleDarkTheme = () => {
        setDarkTheme(c => !c)
        changeTheme()

    }
    const navigateToHome = () => navigate("/")
    const changeTheme = () => {

        // if (localStorage.theme === 'dark' || (!('theme' in localStorage)
        // && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        //     document.documentElement.classList.add('dark')


        //   } else {
        //     document.documentElement.classList.remove('dark')
        //   }
        document.documentElement.classList.toggle('dark')
    }
    return (
        <div className="sticky top-0 left-0 shadow-lg select-none bg-color_light  dark:bg-color_dark dark:text-white z-20">
            <div className="container mx-auto  h-[60px] items-center  px-4 flex justify-between relative  ">
                <div className="text-2xl font-montserrat cursor-pointer hover:text-slate-950 hover:font-light transition-[color] " onClick={navigateToHome}>
                    {process.env.REACT_APP_MY_APP_NAME}


                </div>
                <ul className="hidden flex-col md:flex-row  md:flex items-center">
                    <li className='links-item  mx-4 md:mx-2  my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300'><a href="#our-services">Our Service</a></li>
                    <li className='links-item mx-4 md:mx-2 my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300'>About Us</li>
                    <li className='links-item mx-4 md:mx-2 my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300'>Contact Us</li>

                </ul>
                <ul className={`${!isOpen ? " max-h-0" :
                    " max-h-screen"} overflow-hidden transition-[max-height] duration-500  shadow
                    md:hidden absolute top-[60px] left-0 bg-color_light  dark:bg-color_dark dark:text-white  w-full `}>
                    <li className='links-item  border-b-2 mx-4 md:mx-2  my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300' onClick={gotoLoginPage}><a href="#our-services">Our Service</a></li>
                    <li className='links-item border-b-2 mx-4 md:mx-2 my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300' onClick={gotoLoginPage}>About Us</li>
                    <li className='links-item  border-b-2 mx-4 md:mx-2 my-4 md:my-0 text-lg hover:cursor-pointer hover:text-blue-600 transition-colors duration-300' onClick={gotoLoginPage}>Contact Us</li>
                </ul>
                <div className='hidden md:flex gap-3 items-center'>
                    <div className='hover:bg-slate-300  w-[40px] h-[40px] transition-bg flex items-center justify-center rounded-full ' onClick={toggleDarkTheme}>
                        {
                            darkTheme ? <BsMoonStars size={20} /> : <BsSun size={20} />
                        }
                    </div>
                    <div className='hover:bg-slate-300 
                    relative  w-[40px] h-[40px] transition-bg   flex items-center justify-center rounded-full ' 
                    
                    >
                    <GrNotification size={20}/>
                    <div className="absolute top-[6px] right-[9px] h-[10px] w-[10px] rounded-full bg-red-600 "></div>
                    </div>
                </div>

                <div className='flex md:hidden  items-center' >
                    <div className='hover:bg-slate-300 
                    relative  w-[40px] h-[40px] transition-bg   flex items-center justify-center rounded-full ' 
                    
                    >
                    <GrNotification size={20}/>
                    <div className="absolute top-[6px] right-[9px] h-[10px] w-[10px] rounded-full bg-red-600 "></div>
                    </div>
                    <div className='hover:bg-slate-300  w-[40px] h-[40px] transition-bg flex items-center justify-center rounded-full ' onClick={toggleDarkTheme}>
                        {
                            darkTheme ? <BsMoonStars size={25} /> : <BsSun size={25} />
                        }
                    </div>
                    <div className="md:hidden h-[40px] w-[40px] rounded-full flex items-center justify-center hover:bg-slate-300" onClick={toggleNavBar}>

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