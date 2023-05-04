import { useParams ,NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import {Loader} from '../components'

const SingleAppointment = () => {
    const { id } = useParams();
    const [application, setApplication] = useState({})
    const token = localStorage.getItem("admin_token");
const [isLoading ,setIsLoading]=useState(true)
    const baseUrl = process.env.REACT_APP_BASE_PROD_URL + "/application"
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${baseUrl}?_id=${id}`, {
                    headers: {
                        'Authorization': "mrjames " + token
                    }
                })
                console.log(response?.data?.applications[0]);
                setApplication(response?.data?.applications[0])
                setIsLoading(false)
            }

            catch (err) {
                console.log(err)
                setIsLoading(false)
                
            }
        }
        fetchData()

    }, [])


    return (
        <>
            <Loader toggle={isLoading} />
            <nav class="flex mb-5 mt-5 px-5" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <NavLink to={"/dashboard"} href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
  Appointments
      </NavLink>
    </li>
    <li>
      <div class="flex items-center">
        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
        <h1 className="text-slate-400  font-medium text-xl ">Appointment</h1>
        
        </a>
      </div>
    </li>
  
  </ol>
</nav>
            <h2 className="text-center  text-xl capitalize mb-2 mt-2  font-monserat font-meduim">information details  </h2>
            <h2 className="text-center  text-2xl uppercase mb-4 mt-2 gradient__text font-monserat font-meduim "> {application?.service_type}</h2>
            <div className="px-4 py-6 bg-slate-100 mx-2 rounded-lg">
                <div className="flex flex-col md:flex-row items-center mb-2">
                    <h2 className="text-lg font-medium w-fit px-4 uppercase ">full Names :</h2>
                    <p className="text-lg text-slate-400 offset">{application?.fullname}</p>
                </div>
                <div className="flex flex-col md:flex-row mb-2 items-center">
                    <h2 className="text-lg font-medium w-fit px-4">Email :</h2>
                    <p className="text-lg text-slate-600 underline offset"><a href="mailto:bateemma14@gmail.com"> {application?.email}</a></p>
                </div>
                <div className="flex mb-2 items-start ">
                    <h2 className="text-lg font-medium w-fit px-4">phone number :</h2>
                    <div className="flex-1">
                        <p className="text-lg text-slate-600 underline offset"><a href="mailto:bateemma14@gmail.com"> {application?.phone}</a></p>
                        <span className="w-[40px] h-[40px] rounded-full bg-blue-400 inline-block  overflow-hidden mr-3  my-2"></span>
                        <span className="w-[40px] h-[40px] rounded-full bg-blue-400 inline-block  overflow-hidden  my-2"></span>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex w-1/2 mb-2 items-center">
                        <h2 className="text-lg font-medium w-fit px-4">Age</h2>
                        <p className="text-lg text-slate-600 underline offset"> {application?.age}</p>
                    </div>
                    <div className="flex w-1/2  items-center">
                        <h2 className="text-lg font-medium w-fit px-4">Sex</h2>
                        <p className="text-lg text-slate-600 underline offset"> {application?.sex}</p>
                    </div>
                </div>
                <div className="flex  flex-col md:flex-row justify-center items-center">
                    <div className="flex w-1/2 mb-2 items-center">
                        <h2 className="text-lg font-medium w-fit px-4">time</h2>
                        <p className="text-lg text-slate-600 underline offset"> {application?.time}</p>
                    </div>
                    <div className="flex w-1/2  items-center">
                        <h2 className="text-lg font-medium w-fit px-4"> Date</h2>
                        <p className="text-lg text-slate-600 underline offset">{(new Date(application?.date)).toLocaleDateString()}</p>
                    </div>
                </div>

                <div className=" pt-[40px] text-center shadow rounded-xl font-manrope  px-4 leading-[1.6] text-lg   relative mt-[40px] w-full pb-[50px] bg-slate-200 " >
                    <span className="absolute top-[-30px] text-white min-h-[40px] bg-blue-300 rounded-lg w-[100px] px-6 left-[50%] flex items-center justify-center shadow -translate-x-[50%] text-lg">message</span>
                    {application?.message ||" the user didnt send any message"}
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolores neque, temporibus quae quod facere. */}
                </div>
            </div>

        </>
    )
}
export default SingleAppointment