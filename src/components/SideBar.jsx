import { IoMdClose } from "react-icons/io"
const SideBar = () => {
  return (
    <div className="fixed w-full h-[100%] inset-0 bg-black bg-opacity-25">

      <div className="w-[250px] max-w-[calc(100vw-40px)] absolute left-0 top-0 bg-white h-full">
        <span className="absolute w-[50px] h-[50px] top-2 hover:bg-red-200 transition-all duration-500  -right-[50px] rounded-lg flex items-center justify-center border-2 border-red-400">
          <IoMdClose size={30} />

        </span>
        <h3 className="text-2xl text-center py-4 font-manrope">Dashboard</h3>
        <div className="absolute mt-auto bottom-5 w-full mx-4">
          <button
            type="submit"
            className="inline-block bg-orange-400 w-fit 
            rounded bg-primary px-20
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
            logout
          </button>

        </div>
      </div>

    </div>
  )
}

export default SideBar