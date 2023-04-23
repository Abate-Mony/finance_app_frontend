
import { Outlet } from "react-router-dom"
// import {SideBar}
import { SideBar } from './'
const DashBoardLayout = () => {
    return (
        <div className="m">
            <div className="sticky top-0 min-h-[60px] bg-slate-500 w-full ">
            </div>
            <div className="flex">
                <div className="w-[250px] hidden md:block max-w-[calc(100vw-40px)] h-[calc(100vh-60px)] relative  left-0 top-0 bg-blue-300 ">

                    {/* <h3 className="text-2xl text-center py-4 font-manrope">Dashboard</h3> */}
                    <div className="absolute left-0 mt-auto bottom-5 w-full mx-4">
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

                <div className="flex-1 flex bg-slate-600">
                    <div className="flex-1">
                        <Outlet />

                    </div>
                    <div className="hidden lg:block w-[200px] bg-red-400 min-h-[600px]">
                        show other section
                    </div>

                </div>

            </div>


        </div>
    )
}

export default DashBoardLayout