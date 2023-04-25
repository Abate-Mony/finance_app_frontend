import { IoMdClose } from "react-icons/io"
import { RxDashboard } from "react-icons/rx"
import { TiMessages } from "react-icons/ti"
import { BsPeople } from "react-icons/bs"
import { GiNetworkBars } from "react-icons/gi"
import { CiLogout } from "react-icons/ci"
import { GrServicePlay } from "react-icons/gr"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from 'react'
const SideBar = () => {
  useEffect(() => {
    // on page refrest go to home
    navigate("/dashboard")

  }, [])
  const dispatch = useDispatch()
  const isSideOpen = useSelector((state) => state.openSideBar)
  // const isSideOpen =select((state)=>state.openSideBar)
  const toggleSideBar = () => dispatch(({ type: "openSideBar" }))
  const [active, setActive] = useState(0);
  const navigate = useNavigate()
  const navLinks = [
    // {

    //   name: "Home",
    //   icon: <RxDashboard size={25} />
    //   , to: "/dashboard"

    // },
    {

      name: "Home",
      // icon: <GiNetworkBars size={25} />
      icon: <RxDashboard size={25} />
      , to: "/dashboard"

    },

    {

      name: "Messages",
      icon: <TiMessages size={25} />

      , to: "messages"
    },
    // {

    //   name: "Users",
    //   icon: <BsPeople size={25} />
    //   , to: "users"

    // },
    {

      name: "Services",
      icon: <GrServicePlay size={25} />
      , to: "services"

    },



  ]

  return (

    <div className={`w-[200px] select-none max-w-[calc(100vw-40px)] z-[100]
    px-4 text-xs overflow-y--auto flex-none fixed md:static transition-[left] duration-700
    ${isSideOpen ? "left-0" : "left-[-100%]"} top-0 h-full md:top-0 bg-color_light md:h-[calc(100svh-60px)] overflow-visible border`}>
      <span className="absolute w-[50px] h-[50px] top-0 text-white hover:bg-red-500 transition-all md:hidden duration-500  -right-[50px] rounded-none flex items-center justify-center border-2 border-red-400"

        onClick={toggleSideBar}
      >
        <IoMdClose size={30} />
      </span>
      <h3 className="text-2xl text-center py-4 font-manrope md:hidden ">Dashboard</h3>
      {/*  */}

      {

        navLinks.map(({ name, icon, to }, index) => (<NavLink to={to}
          key={index}
          onClick={() => {

            toggleSideBar()

            setActive(index)
          }



          }
          className={`flex 
 ${active === index ? "bg-violet-500 text-white" : "bg-white"}  hover:bg-violet-500 transition-colors 
 duration-300 py-2 px-3 mt-4 shadow-md ring-offset-slate-200 mb-2 rounded-lg`}>
          {icon}
          <h3 className="text-sm ml-5">{name}</h3>
        </NavLink>))

      }
      {/*  */} <div
        onClick={() => navigate("/auth")}
        className="flex   py-2 px-8 text-white hover:bg-orange-800 absolute bottom-10 w-fit bg-orange-500 transition-colors duration-300 hover:text-white  mb-2 rounded-lg">
        <CiLogout size={25} />
        <h3 className="text-sm ml-5">logOut</h3>
      </div>

    </div>
  )
}

export default SideBar