import { IoIosAttach, IoMdSend } from "react-icons/io"
import { Recieve, Send } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const ChatBox = () => {
    const [text, setText] = useState("")
    const [arr, setArr] = useState([])

    const handleSend = () => {
        if (!text.length) return
        setArr([...arr, text])
        setText("")

    }

    const isOpen = useSelector(state => state.openChat)
    const dispatch = useDispatch()

    const toggleChat = () => dispatch({ type: 'openChat' })
    return (
        <div className={`fixed  w-full h-[100vh] chat-container bg-slate-400 z-20 bg-opacity-5 ${isOpen ? "active" : ""}`} onClick={toggleChat}>

            <div onClick={e => e.stopPropagation()} className={` chat-sm-container cal-width shadow-2xl chat-height rounded-md overflow-hidden ml-auto  mt-4 bg-white`}>
                <div className=" py-5 overflow-auto swiper-scrollbar" style={{
                    height: "calc(100% - 50px)"
                }}>

                    {

                        arr.map((arr, i) => <> <Send message={arr} />  <Recieve message={"thank for message us we get back to  you"} /> </>)
                    }


                </div>
                <div className="h-[50px] bottom-0 w-full shadow-2xl bg-white dark:bg-slate-600 left-0  
            flex items-center justify-center px-4
            gap-2 min-h-[50px]
            
         py-1 z-40">

                    <div className="input-container  focus:shadow-2xl h-[40px] " style={{ flex: 1 }}>
                        <input type="text" name="text" id="text" placeholder='Message '  value={text} onChange={e => {
                        if(e.key=="EnterKey"){
                        handleSend()
                        }
                        setText(e.target.value)
                        
                        
                        }}
                            className='h-full pl-[1rem] w-full bg-transparent border-0 focus:border-none focus:outline-none focus:shadow-lg' />
                    </div>

                    <IoMdSend onClick={() => handleSend()}
                        size={30} className={`text-blue-400
                        ${true > 0 ? "translate-x-0" : "translate-x-4"} `} />

                </div>
            </div>

        </div>
    )
}

export default ChatBox