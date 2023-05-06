import { AddBtn } from '../components'
const Services = () => {

    return (
        <>
            <AddBtn />
            <h1 className="text-xl text-center mb-4 mt-2">Services </h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full ">
                    {
                        Array.from({ length: 5 }, (item, index) => (
                            <div className='flex flex-col lg:flex-row flex-wrap px-2 pb-2 shadow rounded-lg mb-10  mx-4'>
                                <div className='lg:w-1/3 mb-6 mt-6'>
                             <h1 className='text-2xl text-center lg:text-left font-black'>Financial service</h1>
                                </div>
                                <div className='lg:w-2/3 pl-4'>
                                <div className="text-lg">
                                    <span className="text-orange-400"> {item} Services </span>
                                    are  design to accomdate a variaty of individuals  and business all around the world
                                    <ol className="border-l  text-sm border-neutral-300 dark:border-neutral-500">
                                        <li>
                                            <div className="flex-start flex items-center pt-3">
                                                <div
                                                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                               
                                            </div>
                                            <div className="mb-6 ml-4 mt-2">
                                                <h4 className="mb-1.5 text-lg font-semibold">Founding budget and coaching </h4>
                                                <p className="mb-3 text-neutral-500 text-xs dark:text-neutral-300">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex-start flex items-center pt-2">
                                                <div
                                                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                            </div>
                                            <div className="mb-6 ml-4 mt-2">
                                                <h4 className="mb-1.5 text-lg font-semibold">financial and planning </h4>
                                                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                                    Libero expedita explicabo eius fugiat quia aspernatur autem
                                                </p>
                                            </div>
                                        </li>
                                    </ol>
                                    <button      
                                        type="button"
                                        a data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className="inline-block rounded  bg-blue-400 px-6 pb-2 pt-2.5 w-fit my-4 mt-0 text-xs font-medium uppercase
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
ease-in-out hover:bg-primary-600 mx-auto
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:outline-none focus:ring-0 active:bg-primary-700
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    >
                                     edit service
                                    </button>
                                </div>
                                </div>
                            </div>

                        ))
                    }

            </div>



        </>
    )


}
export default Services