
const Recieve = ({message}) => {
  return (
    <div className="recieve__message flex  justify-start flex-1">
    
    <div className="max-w-[90%] bg-slate-400  py-2 px-5 my-1  rounded-[1.5rem]  ml-2  text-xs ">{message || "recieve box with no message"} message</div>
    </div>
  )
}

export default Recieve