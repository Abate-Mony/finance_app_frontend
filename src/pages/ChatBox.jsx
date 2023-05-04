import {  IoMdSend } from "react-icons/io"
import { Recieve, Send } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useState, useRef } from "react"
import { sendAudio } from "../Assests/audio"
import {actions} from '../actions/toggleChatBox'

const ChatBox = () => {
    const [text, setText] = useState("")
    const [arr, setArr] = useState([])
    const scrollRef = useRef(null)
    const handleSend = () => {
        if (!text.length) return
        const audio = new Audio(sendAudio)
        setArr([...arr, text])
        setText("")
        audio.play()

    }

    // const isOpen = useSelector(state => state.chatbox.isOpen)
    const isOpen = useSelector(state => state.chatbox.isOpen)
    const dispatch = useDispatch()

    const toggleChat = () => {
    
    console.log(isOpen)
    
    dispatch(actions.toggleChatBox())}
    return (
        <div className={`fixed   w-full h-[100vh] chat-container- bg-slate-400 z-20 bg-opacity-5 active `}  onClick={toggleChat}>

            <div onClick={e => e.stopPropagation()} className={` chat-sm-container border-2 border-oranage-400 cal-width shadow-2xl chat-height rounded-md overflow-hidden ml-auto  mt-4 bg-white`}>
                <div className=" py-5 overflow-y-auto overflow-x-hidden swiper-scrollbar border-4 border-red-500 h-[calc(100svh-3rem)]"ref={scrollRef}>

                    {
                        arr.length < 1 ? <div className="h-full w-full flex flex-col items-center justify-center">

                            <p className="text-lg font-manrope uppercase">no new messages</p>
                            <p className="text-xl font-manrope uppercase">say Hello</p>

                        </div> :

                            arr.map((arr, i) => <> <Send message={arr} _ref={scrollRef}/>  <Recieve _ref={scrollRef} message={"thank for messaging us we get back to  you! "} /> </>)
                    }


                </div>
                <div className="h-[50px] bottom-0 w-full shadow-2xl bg-white dark:bg-slate-600 left-0  
            flex items-center justify-center px-4
            gap-2 min-h-[50px]
            
         py-1 z-40">

                    <div className="input-container  focus:shadow-2xl h-[40px] " style={{ flex: 1 }}>
                        <input type="text" name="text" id="text" placeholder='Message ' value={text} onChange={e => {

                            setText(e.target.value)


                        }}
                            onKeyUp={e => {
                                if (e.keyCode === 13) {
                                    handleSend()
                                }
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