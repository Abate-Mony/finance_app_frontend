import { useDispatch} from "react-redux"
import {FcSms} from 'react-icons/fc'
const ChatBtn = () => {
  // const isOpen = useSelector(state => state.openChat)
  const dispatch = useDispatch()

  const toggleChat = () => dispatch({ type: 'openChat' })
  return (
    <div className="fixed shadow-2xl scale-animate overflow-hidden bottom-[6rem] cursor:pointer z-10 h-[70px] bg-slate-200 rounded-full right-[2rem] w-[70px]  flex items-center justify-center"
    onClick={toggleChat}
    >

     <FcSms size={100}/>

    </div>
  )
}

export default ChatBtn