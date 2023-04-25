import { HiOutlineMail } from 'react-icons/hi'
const Main = () => {
    return (
        <div className="fl">
            <div className="flex  flex-wrap  md:flex-row mt-6">


                {

                    Array.from({ length: 4 }, (arr, i) => {
                        return (
                            <div className="min-h-[100px] w-1/2 px-2 r py-4 md:w-1/3" key={i}>
                                <div
                                    class="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                    <div
                                        class="border-b-2 flex justify-center border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                        {/* {i} */}
                                        <HiOutlineMail size={40} />
                                    </div>
                                    <div class="p-3">
                                        <h1
                                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            Total Users
                                        </h1>
                                        <h3 class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                            4944
                                        </h3>

                                    </div>

                                </div>
                            </div>

                        )

                    })

                }
            </div>


        </div>
    )
}

export default Main