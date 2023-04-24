
import { Outlet } from "react-router-dom"
// import {SideBar}
import { SideBar } from './'
import { useDispatch } from "react-redux"
import { AiOutlineMenu } from "react-icons/ai"
const DashBoardLayout = () => {
    const dispatch = useDispatch()

    const toggleSideBar = () => dispatch(({ type: "openSideBar" }))

    return (
        <div className="h-full overflow-y-hidden-">
            <div className="sticky top-0 h-[60px] bg-slate-100 w-full " >
                <div className="md:hidden h-[40px] w-[40px] rounded-full flex items-center justify-center hover:bg-slate-300" onClick={toggleSideBar}>
                    <AiOutlineMenu size={20} />

                </div>
            </div>
            <div className="flex">
                <SideBar />

                <div className="flex-1 flex bg-slate-50">
                    <div className="flex-1 h-screen max-h-[calc(100vh-60px)] overflow-auto">
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