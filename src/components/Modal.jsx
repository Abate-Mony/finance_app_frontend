import { useEffect, useRef } from "react"

import { useNavigate } from 'react-router-dom'
const Modal = ({ information, toggle, toggleModal }) => {

    const navigate = useNavigate()
    const _ref = useRef(null)
    useEffect(() => {
        _ref.current.onclick = function () {
            const button = this.querySelector(".button-confirm")

            const wrapper = this.querySelector(".wrapper")
            button.classList.add("scale-info")
            wrapper.classList.add("scale-info")
            const timeout = setTimeout(() => {
                clearTimeout(timeout)
                button.classList.remove("scale-info")
                wrapper.classList.remove("scale-info")

            }, 500);


        }

    }, [])
    const stopPropagation = e => {
        e.stopPropagation()
        e.preventDefault()
    }
    return (

        <div className={`h-screen  w-full fixed top-0 left-0 z-[30] ${toggle ? "block" : "hidden"}`} ref={_ref}>
            <div
                onClick={stopPropagation}
                className=" shadow-2xl wrapper cal-width bg-white dark:bg-slate-800 text-black dark:text-white mx-auto my-2 rounded-md px-4 py-5 " style={{ "--w": "400px" }}>
                <h2 className="text-red-400 text-2xl text-center font-semibold font-montserrat">Information</h2>
                <p className="pl-2 py-4 text-lg leading-7">{information || "You are about to logout from the admin dashboard"}</p>
                <div className="ml-auto flex gap-2 w-fit">
                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        class="inline-block button-confirm  rounded bg-gray-500 px-5  pb-2 pt-2.5 text-xs font-montserrat font-medium uppercase
  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] 
  transition duration-150 ease-in-out hover:bg-primary-600
  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
  focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        onClick={() => {
                            toggleModal(false)
                            // navigate("/auth")
                        }} >
                        cancel
                    </button>
                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        class="inline-block button-confirm  rounded bg-orange-500 px-5  pb-2 pt-2.5 text-xs font-montserrat font-medium uppercase
  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] 
  transition duration-150 ease-in-out hover:bg-primary-600
  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
  focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        onClick={() => {
                            toggleModal(false)
                            navigate("/auth")
                        }} >
                        logout
                    </button>


                </div>
            </div>

        </div>
    )
}

export default Modal