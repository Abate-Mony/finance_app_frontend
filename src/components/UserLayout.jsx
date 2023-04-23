import { Outlet } from "react-router-dom"
import { ChatBtn, Navbar } from "./";
import { ChatBox } from "../containers";

const UserLayout = () => {
    return (

        <>

            <Navbar />
            <ChatBtn />
          <ChatBox />
            
            <Outlet />


        </>


    )
}

export default UserLayout