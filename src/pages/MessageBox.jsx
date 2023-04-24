import {  IoMdSend } from "react-icons/io"
import { Recieve, Send } from "../components"
import { useState, useRef } from "react"
import { sendAudio } from "../Assests/audio"
const ChatBox = () => {
    const [text, setText] = useState("")
    const [arr, setArr] = useState(["jjo"])
    const scrollRef = useRef(null)
    const handleSend = () => {
        if (!text.length) return
        const audio = new Audio(sendAudio)
        setArr([...arr, text])
        setText("")
        audio.play()

    }

    return (
        <div className={`  w-full  bg-slate-400 h-[calc(100%-60px)] overflow-y-auto relative z-20 bg-opacity-5 `} >

            <div onClick={e => e.stopPropagation()} className={` bg-white `}>
                <div className=" swiper-scrollbar-" ref={scrollRef}>

                    {
                        arr.length < 1 ? <div className="h-full w-full flex flex-col items-center justify-center">

                            <p className="text-lg font-manrope uppercase">no new messages</p>
                            <p className="text-xl font-manrope uppercase">say Hi</p>

                        </div> :

                            arr.map((arr, i) => <> <Send message={arr} _ref={scrollRef}/>  <Recieve _ref={scrollRef} message={"thank for messaging us we get back to  you! "} /> </>)
                    }


                </div>
                <div className="h-[50px]  absolute bottom-0 w-full shadow-2xl bg-white dark:bg-slate-600 left-0  
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