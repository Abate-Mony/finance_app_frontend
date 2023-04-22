import React from 'react'

const Cookies = () => {
  return (
    <div className='fixed  w-full  bg-black left-0 z-30 bg-opacity-40' style={{height:"calc(100vh - 50px)"}}>
    
    <div className="absolute bottom-[6rem] uppercase bg-slate-400 px-4 py-6  rounded-md pb-2  z-10 top-auto mt-auto max-w-6xl min-w-[300px] left-[50%] translate-x-[-50%]">
    <p className='font-manrope'>this site cookies to manage user data and preferences </p>
    <div className="flex justify-end  pt-4">
    <button
                    type="button"
                    a data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded   bg-blue-400 px-6 pb-2 pt-2.5 w-fit my-4 mt-0 text-xs font-medium uppercase
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
ease-in-out hover:bg-primary-600 mx-auto
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
       ok
                  </button>
    
    </div>
    
    </div>
    </div>
  )
}

export default Cookies