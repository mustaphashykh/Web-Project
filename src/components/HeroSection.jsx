import { stateContext } from "../Context"
import { useContext } from "react"
import mainLogo from '../assets/cat.png'

const HeroSection = () => {
    const { Toggler, unit, toggleHandler, setWeight, setItem, item, weight } = useContext(stateContext)
    return (
        <>
            <img loading="lazy" src={mainLogo} alt="main-logo" />
            <input className="bg-[#FCEDDA] w-full drop-shadow rounded-md outline-none xs:text-xl text-lg xs:p-4 p-2 text-center placeholder-[#B85042]" type="text" placeholder="Item" onChange={(e) => { setItem(e.target.value) }} value={item} />
            <div className='w-full flex justify-between'>
                <input className="no-spinner w-3/5 drop-shadow bg-[#FCEDDA] rounded-md outline-none xs:text-xl text-lg xs:p-4 p-2 text-center placeholder-[#B85042]" type="number" min={0} placeholder="Quantity" onChange={(e) => { setWeight(e.target.value) }} value={weight} />
                <div onClick={toggleHandler} className="bg-[#FCEDDA] w-4/12 drop-shadow rounded-md outline-none xs:text-xl text-lg xs:p-4 p-2 text-center flex items-center justify-between cursor-pointer">{unit}<i className={`fa-solid fa-chevron-down fa-xs transition-all transform ${Toggler ? "rotate-180" : "rotate-0"}`}></i></div>
            </div>
        </>
    )
}

export default HeroSection