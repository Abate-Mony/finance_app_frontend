import { GiNetworkBars } from "react-icons/gi"
import { CiLogout } from "react-icons/ci"

import { Outlet, useNavigate } from "react-router-dom"
// import {SideBar}
import { SideBar } from './'
import { useDispatch } from "react-redux"
import { AiOutlineMenu } from "react-icons/ai"
const DashBoardLayout = () => {
    const dispatch = useDispatch()
    // const location = useLocation()
    const toggleSideBar = () => dispatch(({ type: "openSideBar" }))
    const navigate = useNavigate()

    return (
        <div className="h-full overflow-y-hidden-">
            <div className="sticky top-0 h-[60px] bg-slate-100 w-full flex gap-4 items-center justify-between pr-4" >
                <div className="md:hidden h-[40px] w-[40px] rounded-full flex items-center justify-center hover:bg-slate-300" onClick={toggleSideBar}>
                    <AiOutlineMenu size={20} />

                </div>
                <div
                    onClick={() => navigate("/auth")}
                    className="flex   py-1 px-2 items-center text-white ml-auto hover:bg-orange-800  bottom-10 w-fit bg-orange-500 transition-colors duration-300 hover:text-white  mb-2 rounded-lg">
                    <CiLogout size={25} />
                    <h3 className="text-xs ml-2">logOut</h3>
                </div>
            </div>
            <div className="flex">
                <SideBar />

                {/* <div className="flex-1 flex bg-slate-50"> */}
                <div className="flex-1 h-screen max-h-[calc(100vh-60px)] overflow-auto ">
                    <Outlet />

                </div>

                {/* <div className="hidden lg:block w-[200px] bg-red-400 min-h-[600px]">
                        show other section
                    </div> */}

                {/* </div> */}

            </div>


        </div>
    )
}

export default DashBoardLayout