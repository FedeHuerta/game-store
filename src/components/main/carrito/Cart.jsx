import { Link } from "react-router-dom";
import { useCarritoContext } from "../../../context/CartContext";
import { ItemList } from "../productos/ItemList";

export const Cart = () => {
    const { carrito, totalPrice, clearCart } = useCarritoContext();

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <div className="container mx-auto px-4 py-8 flex flex-wrap items-start lg:items-center justify-between shadow-2xl rounded-lg bg-white mt-20 lg:mt-0">
                {carrito.length === 0 ? (
                    <div className="w-full text-center">
                        <p className="text-2xl font-semibold mb-4">Tu carrito está vacío</p>
                        <Link to="/productos" className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold text-lg">Volver a productos</Link>
                    </div>
                ) : (
                    <>
                        <div className="w-full lg:w-3/4 pr-4">
                            <ItemList products={carrito} template="ItemCart" />
                        </div>
                        <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
                            <div className="bg-gray-200 rounded-lg p-4">
                                <p className="text-xl font-semibold mb-4">Resumen de la compra:</p>
                                <p className="text-lg mb-2">Total: ${totalPrice()}</p>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mb-2" onClick={clearCart}>Vaciar Carrito</button>
                                <Link to="/productos" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mb-2 block text-center">Continuar Comprando</Link>
                                <Link to="/checkout" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg block text-center">Finalizar Compra</Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
