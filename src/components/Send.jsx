
const Send = ({message}) => {
  return (
    <div
    className="flex items-center justify-end flex-1"
    
    >
    
    <div className="bg-blue-200  px-5 py-2  rounded-[1.5rem] text-xs my-1 mr-2 max-w-[90%]">{message || "send box with no messages here"}</div>
    
    
    </div>
  )
}

export default Send