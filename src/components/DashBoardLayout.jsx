import { CiLogout } from "react-icons/ci"

import { Outlet, useNavigate } from "react-router-dom"
import { SideBar, Modal } from './'
import { useDispatch,useSelector } from "react-redux"
import { AiOutlineMenu } from "react-icons/ai"
import {actions} from '../actions/toggleSide'
import { useState } from 'react'
const DashBoardLayout = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state) => state.sidebar.isOpen)
    const toggleSideBar = () =>{
    dispatch(actions.toggleSideBar())
    console.log(isOpen)
    
    }
    const navigate = useNavigate()
    const [logout, setLogout] = useState(false);
    const handleLogout = () => {
    
        setLogout(true)

    }

    return (
        <div className="h-full overflow-y-hidden-">
            <Modal toggle={logout} toggleModal={setLogout} />

            <div className="sticky top-0 h-[60px] z-[5] bg-slate-100 w-full flex gap-4 items-center justify-between pr-4" >
                <div className="md:hidden h-[40px] w-[40px] rounded-full flex items-center justify-center hover:bg-slate-300" onClick={toggleSideBar}>
                    <AiOutlineMenu size={20} />

                </div>
                <h1 className="text-xl w-fit md:mx-auto md:text-3xl">Dashboard</h1>
                <div className="flex gap-2">


                    <div
                        onClick={() => navigate("/")}
                        className="md:flex hidden    py-1 px-2 items-center text-white ml-auto hover:bg-blue-800  bottom-10 w-fit bg-blue-500 transition-colors duration-300 hover:text-white  mb-2 rounded-lg">
                        {/* <CiLogout size={25} /> */}
                        <h3 className="text-xs ml-2">view site</h3>
                    </div>
                    <div
                        onClick={() => handleLogout()}
                        className="flex   py-1 px-2 items-center text-white ml-auto hover:bg-orange-800  bottom-10 w-fit bg-orange-500 transition-colors duration-300 hover:text-white  mb-2 rounded-lg">
                        <CiLogout size={25} />
                        <h3 className="text-xs ml-2">logOut</h3>
                    </div>
                </div>

            </div>
            <div className="flex">
                <SideBar />
                <div className="flex-1 h-screen max-h-[calc(100vh-60px)] overflow-auto ">
                    <Outlet />
                </div>
            </div>


        </div>
    )
}

export default DashBoardLayout