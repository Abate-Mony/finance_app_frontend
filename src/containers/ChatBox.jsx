import { IoMdSend } from "react-icons/io"
import { Recieve, Send } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useState, useRef } from "react"
import { actions } from '../actions/toggleChatBox'
import { sendAudio } from "../Assests/audio"
import axios from 'axios'
const user_token_=null
const ChatBox = () => {
    const base_url = process.env.REACT_APP_BASE_LOCAL_URL

    const [text, setText] = useState("")
    const [arr, setArr] = useState([])
    const scrollRef = useRef(null)
    // alert(user_token)
    const handleSend = async () => {
    return

        if (!text.length) return
        if (!user_token_) {
            // local_storage.setItem("usertoken",usertoken.data.token)
            try {
                const usertoken = await axios.post("http://192.168.43.68:5000" + "/auth")
                console.warn(usertoken.data.token);
                // return
            } catch (error) {
                console.log("error with creating user account", error)
                return
            }

        }


        try {

            const { data: { message } } = await axios.post("http://192.168.43.68:5000" + "/message", {
                message: text
            }, {

                headers: {
                    Authorization: "mrjames " + user_token_
                }
            })

            const audio = new Audio(sendAudio)
            setArr([...arr, message])
            setText("")
            audio.play()
            console.log(message);

        } catch (error) {
            console.log("error in message", error)
        }



    }

    const isOpen = useSelector(state => state.chatbox.isOpen)
    const dispatch = useDispatch()

    const toggleChat = () => dispatch(actions.toggleChatBox())
    return (
        <div className={`fixed  w-full h-[100vh] chat-container bg-slate-400 z-20 bg-opacity-5 ${isOpen ? "active" : ""}`} onClick={toggleChat}>

            <div onClick={e => e.stopPropagation()} className={` chat-sm-container w-[20rem] max-w-[calc(100vw-2.5rem)]   shadow-2xl  rounded-md overflow-hidden ml-auto  mt-4 bg-white`}>
                <div className=" py-5 overflow-y-auto overflow-x-hidden swiper-scrollbar h-[calc(100vh-15rem)] "
                    ref={scrollRef}>

                    {
                        arr.length < 1 ? <div className="h-full w-full flex flex-col items-center justify-center">

                            <p className="text-lg font-manrope uppercase">no new messages</p>
                            <p className="text-xl font-manrope uppercase">say Hi</p>

                        </div> :

                            arr.map((arr, i) => <> <Send message={arr.message} _ref={scrollRef} />  <Recieve _ref={scrollRef} message={"thank for messaging us we get back to  you! "} /> </>)
                    }


                </div>
                <div className="h-[3.125rem] bottom-0 w-full shadow-2xl bg-white dark:bg-slate-600 left-0  
            flex items-center justify-center px-4
            gap-2 min-h-[3.125rem]
            
         py-1 z-40">

                    <div className="input-container  focus:shadow-2xl h-[2.5rem] flex-1" >
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
                        size={25} className={`text-blue-400
                        ${true > 0 ? "translate-x-0" : "translate-x-4"} `} />

                </div>
            </div>

        </div>
    )
}

export default ChatBox