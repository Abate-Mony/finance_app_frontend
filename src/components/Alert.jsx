
const Alert = () => {
    return (
        <div className="h-full bg-slate-300 fixed w-full z-10 bg-opacity-75 invisible
        flex items-center justify-center ">
            <div className="w-[18.75rem] px-4 py-4 border min-h-[12.5rem]
    bg-orange-300 shadow rounded-xl">

                <h1 className="text-center leading-5 text-lg mb-6 capitalize">thanks for submiting your information</h1>
                <p className="text-center text-sm mb-4">we get back to you later !</p>
                
                <span class="inline-flex- block w-fit ml-auto justify-center items-center border
                py-2 px-5 text-base
                font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Confirm
                    {/* <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </span>
            </div>


        </div>
    )
}

export default Alert