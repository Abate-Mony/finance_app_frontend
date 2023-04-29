const Services = () => {

    return (


        <>

            <h1 className="text-xl text-center mb-4 mt-2">Services </h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-1 py-3">
                                n
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Service Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                        {

                            Array.from({ length: 5 }, (item, index) => (<tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"

                            >
                                <td className="px-2 py-4 border flex items-center justify-center">
                                    {index + 1}
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    financial service
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <ul className="text-xs">

                                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, et!</li>
                                        <li>one</li>
                                        <li>one</li>

                                    </ul>
                                </th>
                                <td className="px-6 py-4" >
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">edit</a>
                                </td>
                            </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>



        </>
    )


}
export default Services