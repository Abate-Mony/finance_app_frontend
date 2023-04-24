import { useNavigate } from 'react-router-dom'
const Chat = ({ user, id }) => {
    const navigate = useNavigate()
    return (

   
            <div className="flex  px-4 border-4  py-2 container  gap-3 bg-white dark:bg-slate-800
          duratio overflow-x-hidden
        hover:bg-slate-300 select-none  relative " onClick={() => navigate(`/dashboard/messages/${user?.id || 3}`)}>

                {/* <div className="flex-none 
    h-[50px] w-[50px] flex items-center justify-center rounded-full bg-gradient-to-r
    from-orange-600 to-orange-400" >
                     <h3 className="text-lg uppercase whitespace-nowrap 
                        overflow-hidden line-clamp-1 ">{ "new user"}   </h3>



                </div> */}

                <div className="text-box shadow-d dark:shadow-b pb-1 capitalize overflow-hidden flex-1" >
                    <div className="flex  justify-between leading-3">
                        <h3 className="text-lg font-manrope line-clamp-1 max-w-[200px] overflow-hidden text-dark dark:text-white">{user?.name  ||" no user here"} </h3>
                        <span className="text-sm text-slate-500 "> { "12 :00"}</span>
                    </div>
                    <div className="flex  justify-between leading-3">
                        <h3 className="text-sm text-slate-500 line-clamp-1 flex-1" >{ "send the money bro"}</h3>
                        <span className="text-sm text-white w-[20px]
    h-[20px] bg-blue-500 rounded-full flex items-center justify-center " >2</span>
                    </div>
                </div>

            </div>
    )
}

export default Chat