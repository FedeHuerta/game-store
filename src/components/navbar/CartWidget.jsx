import { BsCart2 } from "react-icons/bs"

export const CartWidget = () => {
    return (
        <div className="flex carrito rounded">
            <a className='text-white p-3' href=""><BsCart2 /></a>
        </div>
    )
}
