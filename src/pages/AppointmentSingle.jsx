import { useParams } from 'react-router-dom'
// import {Loader} from '../components'
const SingleAppointment = () => {
    const { id } = useParams()

    return (
        <>
        {/* <Loader/> */}
            <h2 className="text-center  text-xl capitalize mb-2 mt-2  font-monserat font-meduim">information details  </h2>
            <h2 className="text-center  text-2xl uppercase mb-4 mt-2 gradient__text font-monserat font-meduim ">Financial planning  </h2>
            <div className="px-4 py-6 bg-slate-100 mx-2 rounded-lg">
                <div className="flex items-center mb-2">
                    <h2 className="text-lg font-medium w-fit px-4">full Names :</h2>
                    <p className="text-lg text-slate-400 offset">Ako Bate Emmanuel</p>
                </div>
                <div className="flex mb-2 items-center">
                    <h2 className="text-lg font-medium w-fit px-4">Email :</h2>
                    <p className="text-lg text-slate-600 underline offset"><a href="mailto:bateemma14@gmail.com">bateemma14@gmail.com</a></p>
                </div>
                <div className="flex mb-2 items-start">
                    <h2 className="text-lg font-medium w-fit px-4">phone number :</h2>

                    <div className="flex-1">



                        <p className="text-lg text-slate-600 underline offset"><a href="mailto:bateemma14@gmail.com">672301714</a></p>
                        <span className="w-[40px] h-[40px] rounded-full bg-blue-400 inline-block  overflow-hidden mr-3  my-2"></span>
                        <span className="w-[40px] h-[40px] rounded-full bg-blue-400 inline-block  overflow-hidden  my-2"></span>
                    </div>

                </div>
                <div className="flex">
                <div className="flex w-1/2 mb-2 items-center">
                    <h2 className="text-lg font-medium w-fit px-4">Age</h2>
                    <p className="text-lg text-slate-600 underline offset">67</p>
                </div>
                <div className="flex w-1/2  items-center">
                    <h2 className="text-lg font-medium w-fit px-4">Sex</h2>
                    <p className="text-lg text-slate-600 underline offset">female</p>
                </div>
                     </div>
                <div className="flex">
                <div className="flex w-1/2 mb-2 items-center">
                    <h2 className="text-lg font-medium w-fit px-4">time</h2>
                    <p className="text-lg text-slate-600 underline offset">12:00am</p>
                </div>
                <div className="flex w-1/2  items-center">
                    <h2 className="text-lg font-medium w-fit px-4">date</h2>
                    <p className="text-lg text-slate-600 underline offset">12/03/2002</p>
                </div>
                     </div>

                <div className=" pt-[40px] text-center shadow rounded-xl font-manrope  px-4 leading-[1.6] text-lg   relative mt-[40px] w-full pb-[50px] bg-slate-200 " >
<span className="absolute top-[-30px] text-white min-h-[60px] bg-blue-300 rounded-lg w-[100px] px-6 left-[50%] flex items-center justify-center shadow -translate-x-[50%] text-lg">message</span>
                
                
                the pjpoj fjspd fosdpf asdfj[sapdf[0oasdj fokkasd fasdoihf asdh foasd hpofhasdkohf sadh fopsd flsdhbapfgisdhbflhgsdoifh;kdh p
                </div>
            </div>

        </>
    )
}
export default SingleAppointment