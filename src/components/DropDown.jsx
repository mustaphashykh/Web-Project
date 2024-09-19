import { stateContext } from "../Context"
import { useContext } from "react"

const DropDown = () => {
    const {Toggler, stateHandler} = useContext(stateContext)
    return (
        <div className={`w-32 ${Toggler? null:'hidden'} bg-transparent absolute shadow right-5 top-80 z-10 xs:mt-10 mt-4 list-none`}>
            <div className={`bg-[#FCEDDA] rounded-md transition-all transform ${Toggler? "scale-y-100": "scale-y-0"}`}>
                <div className='list-item' onClick={()=>{stateHandler('kg')}}>Kilograms</div> 
                <div className='list-item' onClick={()=>{stateHandler('oz')}}>Ounces</div> 
                <div className='list-item' onClick={()=>{stateHandler('pk')}}>Packs</div>
                <div className='list-item' onClick={()=>{stateHandler('pcs')}}>Pieces</div> 
                <div className='list-item' onClick={()=>{stateHandler('ltr')}}>Liters</div> 
                <div className='list-item' onClick={()=>{stateHandler('m')}}>Meters</div> 
            </div>
        </div>
    )
}

export default DropDown