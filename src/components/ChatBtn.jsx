import { useDispatch, useSelector } from "react-redux"
import { messageicon } from "../Assests/icons"
import { actions } from '../actions/toggleChatBox'

const ChatBtn = () => {
  const isOpen = useSelector(state => state.chatbox.isOpen)
  const dispatch = useDispatch()
  const toggleChat = () => {
    // console.log(isOpen)

    dispatch(actions.toggleChatBox())
  }
  return (
    <div className="fixed shadow-2xl scale-animate overflow-hidden bottom-[4rem]
     cursor:pointer z-10 h-14  w-14 bg-slate-200 rounded-full right-[2rem] md:right-[6rem] lg:right-[6rem]  flex items-center justify-center"
      onClick={toggleChat}
    >
      <img src={messageicon} alt="message" className="w-full h-full scale-125" />

    </div>
  )
}

export default ChatBtn