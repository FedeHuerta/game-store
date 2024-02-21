import { useCounter } from "../../../hooks/useCounter"
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        console.log("Producto agregado al carrito")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between shadow-2xl rounded-lg bg-white">
                <div className="w-full lg:w-1/2 lg:flex lg:justify-center">
                    <img className="w-full h-96 object-contain rounded-lg" src={`/img/${item.img}`} alt={`Imagen de ${item.name}`} />
                </div>
                <div className="w-full lg:w-1/2 pl-8">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">{item.name}</h2>
                    <p className="text-gray-700 mb-2 font-semibold">🏷️ Fabricante: {item.brand}</p>
                    <p className="text-gray-700 mb-2 font-semibold">📦 Stock: {item.stock}</p>
                    <p className="text-gray-700 mb-6 font-semibold">💰 Precio: ${item.price}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={decrement}>-</button>
                            <span className="text-xl font-bold">{count}</span>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={increment}>+</button>
                            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg" onClick={handleAddToCart}>🛒 Agregar al carrito</button>
                        </div>
                        <Link to={`/productos/${item.type}`} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold text-lg">Volver</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
