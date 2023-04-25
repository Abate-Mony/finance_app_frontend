import  {useParams} from 'react-router-dom'
const SingleAppointment =()=>{
const {id}=useParams()

return (
<div>this is the appointment page with  an id  {id} </div>
)
} 
export default SingleAppointment