import { useContext } from "react"
import { stateContext } from "../Context"

const ItemsList = () => {
    const { message, itemsArray, removeFromCart, getterAndSetter } = useContext(stateContext)
    return (
        <div className="w-full xs:pb-7 pb-5">
            <p className="italic xs:pb-7 pb-4 xs:text-lg text-base tracking-tight">{message}</p>
            <div className="flex flex-wrap grow gap-4">
                {
                    itemsArray.map((item, index) => <div key={index} className="bg-[#FCEDDA] grow drop-shadow rounded-md xs:text-xl text-lg xs:px-4 xs:py-2 px-2 py-1.5 text-[#B85042] flex flex-col items-center justify-center gap-x-2 cursor-pointer gap-3">
                        <div className="flex items-center justify-center gap-1 w-full">
                            <div>{item.item}</div>
                            <div>{item.weight}<span>{item.unit}</span></div>
                        </div>
                        <div className="flex items-center justify-center gap-5 w-full text-base">
                            <i className="fa-solid fa-pen" onClick={() => getterAndSetter(item.id)} />
                            <i className="fa-solid fa-trash" onClick={() => removeFromCart(item.id)} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default ItemsList