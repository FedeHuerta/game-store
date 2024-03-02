import { BsCart2 } from "react-icons/bs"
import { useCarritoContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"

export const CartWidget = () => {
    const { carrito } = useCarritoContext();
    // Cuento la cantidad de items unicos en el carrito
    const getItemQuantity = () => {
        return carrito.length;
    };

    return (
        <div className="flex carrito rounded relative">
            <Link to={`/cart`}>
                <button className='text-white p-3 flex items-center'><BsCart2 /><span className="ml-1 absolute top-0 right-0 bg-red-500 rounded-full text-xs px-2">{getItemQuantity()}</span></button>
            </Link>
        </div>

    )
}
