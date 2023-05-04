import { IoMdClose } from "react-icons/io"
import { useEffect } from 'react'
const Cookies = () => {

  useEffect(() => {
    if (localStorage.getItem("acceptCookies") || "acceptCookies" in localStorage) {


    } else {



    }


  }, [])

  return (
    <div className='fixed  w-full  bg-transparent left-0 z-30' style={{ height: "calc(100vh - 50px)" }}>

      <div className="absolute bottom-[6rem] md:bottom-[2rem]  uppercase bg-slate-200 px-4 py-6  rounded-md pb-2  z-10 top-auto mt-auto max-w-6xl min-w-[300px] left-[50%] translate-x-[-50%]">
        <span className="absolute w-[3.125rem] h-[3.125rem] -top-[3.125rem]
       text-red-700 hover:bg-orange-500 rounded-e-md- transition-all md:hidden duration-500 
       right-0 z-10 rounded-none flex items-center justify-center border-2- font-black border-black"
        // onClick={toggleSideBar}
        >
          <IoMdClose size={25} />
        </span>
        <p className='font-manrope text-xs'>This site us cookies to manage user data and preferences </p>

        <div className="flex justify-center  pt-4">
          <button className="inline-flex justify-center items-center py-1 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            ok
          </button>

        </div>

      </div>
    </div>
  )
}

export default Cookies