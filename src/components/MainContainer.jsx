import DropDown from "./DropDown"
import HeroSection from "./HeroSection"
import { stateContext } from "../Context"
import { useContext } from "react"
import ItemsList from "./ItemsList"

const MainContainer = () => {
    const { buttonEnabler, AddToCart, itemsArray, id, editItem } = useContext(stateContext)
    const hanlder = () => {
        if (id !== '') {
            editItem()
        } else {
            AddToCart(itemsArray.length)
        }
    }
    return (
        <div className='flex flex-col items-center xs:gap-7 gap-4'>
            <HeroSection />
            <DropDown />
            <button disabled={buttonEnabler} onClick={hanlder} className={`bg-[#B85042] shadow-lg w-full xs:text-xl text-lg xs:p-4 p-2 rounded-md outline-none text-center text-[#FCEDDA] transition-all transform ${buttonEnabler ? null : 'active:scale-95'}`}>Add to Chart</button>
            <ItemsList />
        </div>
    )
}

export default MainContainer