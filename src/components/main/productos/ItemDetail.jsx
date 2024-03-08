import { useCounter } from "../../../hooks/useCounter";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../../context/CartContext";
import { toast } from "react-toastify";

export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        addItem(item, count)
        toast.success(`Producto Agregado Al Carrito.`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        })
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-blue-100 py-44">
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between shadow-2xl rounded-lg bg-white my-auto">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img className="w-full lg:h-96 object-contain rounded-lg mb-8 lg:mb-0" src={`${item.img}`} alt={`Imagen de ${item.name}`} />
                </div>
                <div className="w-full lg:w-1/2 pl-0 lg:pl-8">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">{item.name}</h2>
                    <p className="text-gray-700 mb-2 font-semibold">🏷️ Fabricante: {item.brand}</p>
                    <p className="text-gray-700 mb-2 font-semibold">📦 Stock: {item.stock}</p>
                    <p className="text-gray-700 mb-6 font-semibold">💰 Precio: ${item.price}</p>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
                        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg" onClick={decrement}>-</button>
                            <span className="text-xl font-bold">{count}</span>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg" onClick={increment}>+</button>
                        </div>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg mb-4 lg:mb-0" onClick={handleAddToCart}>🛒 Agregar al carrito</button>
                        <Link to={`/productos/${item.type}`} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold text-lg">⬅️ Volver</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
