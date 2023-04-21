import { IoIosAttach, IoMdSend } from "react-icons/io"
import { Recieve, Send } from "../components"
import { useDispatch, useSelector } from "react-redux"

const ChatBox = () => {
    const isOpen = useSelector(state => state.openChat)
    const dispatch = useDispatch()

    const toggleChat = () => dispatch({ type: 'openChat' })
    return (
        <div className={`fixed  w-full h-[100vh] bg-slate-400 z-20 bg-opacity-5 ${isOpen?"block":"hidden"}`} onClick={toggleChat}>

            <div onClick={e => e.stopPropagation()} className=" cal-width shadow-2xl chat-height rounded-md overflow-hidden ml-auto  mt-4 bg-white">
                <div className=" pt-2 overflow-auto swiper-scrollbar" style={{
                    height: "calc(100% - 50px)"
                }}>

                    {

                        Array.from({ length: 10 }, (arr, i) => i & 1 ? <Send /> : <Recieve />)
                    }


                </div>
                <div className="h-[50px] bottom-0 w-full shadow-2xl bg-white dark:bg-slate-600 left-0  
            flex items-center justify-center px-4
            gap-2 min-h-[50px]
            
         py-1 z-40">

                    <div className="input-container  focus:shadow-2xl h-[40px] " style={{ flex: 1 }}>
                        <input type="text" name="text" id="text" placeholder='Message '
                            className='h-full pl-[1rem] w-full bg-transparent border-0 focus:border-none focus:outline-none focus:shadow-lg' />
                    </div>

                    <IoMdSend onClick={() => 0}
                        size={30} className={`text-blue-400 transition-all duration-[3s]
                        ${true > 0 ? "translate-x-0" : "translate-x-4"} `} />

                </div>
            </div>

        </div>
    )
}

export default ChatBox