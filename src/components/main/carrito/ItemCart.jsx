import { useCarritoContext } from "../../../context/CartContext"
import { useCounter } from "../../../hooks/useCounter"
import { MdDeleteOutline } from "react-icons/md";

export const ItemCart = ({ product }) => {
    const { removeItem, updateItemQuantity } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)

    const handleIncrement = () => {
        if (count < product.stock) {
            increment();
            updateItemQuantity(product.id, count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            decrement();
            updateItemQuantity(product.id, count - 1);
        }
    };

    return (
        <div className="flex items-center mb-4 bg-gray-200 p-4 rounded">
            <img src={product.img} alt={`Imagen de ${product.name}`} className="w-24 h-24 object-contain rounded-lg mr-4" />
            <div>
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-700">Cantidad: {count}</p>
                <p className="text-gray-700">Precio unitario: ${product.price}</p>
                <p className="text-gray-700">Subtotal: ${product.price * count}</p>
                <div className="flex items-center">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-sm mr-2" onClick={handleDecrement}>-</button>
                    <span className="text-xl font-bold">{count}</span>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-sm ml-2" onClick={handleIncrement}>+</button>
                    <button className="bg-red-500 text-white p-2 rounded ml-2" onClick={() => removeItem(product.id)}><MdDeleteOutline /></button>
                </div>
            </div>
        </div>
    )
}
