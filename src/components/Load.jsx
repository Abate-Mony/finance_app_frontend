import './loader.css'
const Load = ({toggle=true}) => {
  return (
  <div className={`fixed h-screen
  w-full top-0 left-0 z-[2] flex items-center justify-center bg-opacity-75 bg-slate-900 ${toggle?"block":"hidden"}`}>
    <div class="lds-roller">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
    
  )
}

export default Load