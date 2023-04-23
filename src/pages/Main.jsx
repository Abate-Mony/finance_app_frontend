
const Main = () => {
    return (
        <div className="flex">
            <div className="flex-1 ">
                <div className="flex gap-y-10 flex-wrap flex-col md:flex-row mt-6">


                    {

                        Array.from({ length: 4 }, (arr, i) => {
                            return (
                                <div className="h-[100px] px-6 md:w-1/3">
                                    <div className="h-full w-full bg-orange-600">i</div>
                                </div>

                            )

                        })

                    }
                </div>

            </div>
            
        </div>
    )
}

export default Main