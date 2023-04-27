import { useNavigate } from 'react-router-dom'
const Chat = ({ user, id }) => {
    const navigate = useNavigate()
    return (

   
            <div className="flex  px-4 shadow my-2  max-w-[calc(100%-20px)] rounded-sm mx-auto py-2 container  gap-3 bg-white dark:bg-slate-800
          duratio overflow-x-hidden
        hover:bg-slate-300 select-none  relative " onClick={() =>window.innerWidth<=900&& navigate(`/dashboard/messages/${user?.id || 3}`)}>


                <div className="text-box shadow-d dark:shadow-b pb-1 capitalize overflow-hidden flex-1" >
                    <div className="flex  justify-between leading-3">
                        <h3 className="text-lg font-manrope line-clamp-1 max-w-[200px] overflow-hidden text-dark dark:text-white">id 484 </h3>
                        <span className="text-sm text-slate-500 "> { "12 :00"}</span>
                    </div>
                    <div className="flex  justify-between leading-3">
                        <h3 className="text-sm text-slate-500 line-clamp-1 flex-1 italic" >{ "send the money bro"}</h3>
                        <span className="text-xs text-white w-[15px]
    h-[15px] bg-blue-500 rounded-full flex items-center justify-center " >2</span>
                    </div>
                </div>

            </div>
    )
}

export default Chat