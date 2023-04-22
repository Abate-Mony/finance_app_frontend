import { useDispatch} from "react-redux"
import {FcSms} from 'react-icons/fc'
import { messageicon } from "../Assests/icons"
const ChatBtn = () => {
  // const isOpen = useSelector(state => state.openChat)
  const dispatch = useDispatch()

  const toggleChat = () => dispatch({ type: 'openChat' })
  return (
    <div className="fixed shadow-2xl scale-animate overflow-hidden bottom-[6rem] cursor:pointer z-10 h-[70px] bg-slate-200 rounded-full right-[2rem] w-[70px] md:right-[6rem] lg:right-[6rem]  flex items-center justify-center"
    onClick={toggleChat}
    >
<img src={messageicon} alt="message" className="w-full h-full scale-125" />
     {/* <FcSms size={100}/> */}

    </div>
  )
}

export default ChatBtn