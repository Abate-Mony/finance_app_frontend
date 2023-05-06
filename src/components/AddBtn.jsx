import {MdOutlineAdd} from 'react-icons/md'
const AddBtn = () => {
    return (
        <button  className="inline-flex
        justify-center
        items-center 
         text-base font-medium
         text-center text-white
         bg-blue-700
         hover:bg-blue-800 focus:ring-4
         focus:ring-blue-300
         dark:focus:ring-blue-900
         h-[2.5rem]
         w-[2.5rem]
         rounded-full
         z-2
         fixed
         bottom-10
         -translate-x-1/2
         left-1/2
         md:hidden
         ">
            <MdOutlineAdd size={25}/>
        </button>
    )
}

export default AddBtn