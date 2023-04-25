import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
const Appointment = () => {
    const navigate = useNavigate()
    const [dropdown, setDropdown] = useState(false)
    const closeDropdown = () => {
        if (dropdown) {

            setDropdown(false)
        }

    }
    const handleCloseDropdown = (e) => {
        e.stopPropagation()
        setDropdown(c => !c)
    }
    const [selected, setSelected] = useState(0)
    const categoriesArray = [


        "All categories", "email", "phone", "service type", "fullnames", "age"
    ]

    return (
        <div className="max-w-full overflow-auto" onClick={closeDropdown}>


            <form className="px-4 md:px-6 my-5 ">
                <div className="flex relative min-h-[40px]">
                    <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button"
                        onClick={handleCloseDropdown}
                    >{categoriesArray[selected]} <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <div id="dropdown" className={`z-10 block ${dropdown ? "max-h-screen" : "max-h-0"}  absolute left-0 top-[40px] overflow-hidden transition-[max-height] duration-300 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`} onClick={handleCloseDropdown}>
                        <ul className={`py-2 text-sm text-gray-700 dark:text-gray-200`} aria-labelledby="dropdown-button">
                            {
                                categoriesArray.map((cat, index) => (<li key={index} onClick={() => setSelected(index)}>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{cat}</button>
                                </li>))

                            }


                        </ul>
                    </div>
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="block outline-none focus:outline-none p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Email address ,phone number,names etc " required />
                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>



            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                Index
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Service Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Full Names
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                        {

                            Array.from({ length: 100 }, (arr, index) => (<tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"

                               
                            >
                                <td className="px-2 py-4 border flex items-center justify-center">
                                    {index + 1}
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Financial planning
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Ako bate Emmanuel
                                </th>
                                <td className="px-6 py-4">
                                <a href={`https://wa.me/237672301714`} className="font-medium cursor:pointer text-blue-500 dark:text-blue-500 hover:underline">672301714</a>
                                  
                                </td>
                                <td className="px-6 py-4">
                                <a href={`mailto:bateemma14@gmail.com`} className="font-medium cursor:pointer text-blue-500 dark:text-blue-500 hover:underline">bateema14@gmail.com</a>
                                
                                    
                                </td>
                                <td className="px-6 py-4">
                                    35
                                </td>
                                <td className="px-6 py-4"  onClick={() => navigate(`/dashboard/appointment/${index}`)}>
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                </td>
                            </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )

}

export default Appointment