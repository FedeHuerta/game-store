import { useRef } from "react";
import { useCarritoContext } from "../../../context/CartContext.jsx"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrdenCompra, getOrderCompra, getProduct, updateProduct } from "../../../firebase/firebase.js"

export const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate() //Devuelve la ruta donde se encuentra mi componente
    const { carrito, totalPrice, clearCart } = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current)
        const cliente = Object.fromEntries(datForm)




        //Modificar Stock
        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) {
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    toast.info(`Error al realizar su compra. (No hay stock suficiente de ${prod.name})`, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light"
                    })
                    aux.filter(prod => prod.id != prodBDD.id) //Elimino el prod del carrito al no tener stock
                }
            })
        })

        //Generar la orden de compra
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`¡Compra realizada con éxito! ID de compra: ${ordenCompra.id}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                })

                clearCart()
                e.target.reset()
                navigate('/')

            })
            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                })
            })
    }
    return (
        <>
            {carrito.length === 0 ? (
                <div className="min-h-screen flex items-center justify-center bg-blue-100">
                    <div className="container mx-auto px-4 py-8 flex flex-wrap items-start lg:items-center justify-between shadow-2xl rounded-lg bg-white mt-20 lg:mt-0">
                        <div className="w-full text-center">
                            <p className="text-2xl font-semibold mb-4">Debes tener productos en tu carrito para finalizar compra.</p>
                            <Link to="/productos" className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold text-lg">Volver a productos</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="min-h-screen flex items-center justify-center bg-blue-100">
                        <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between shadow-2xl rounded-lg bg-white">
                            <h2 className="text-4xl font-bold mb-4 text-gray-800">Finaliza tu compra</h2>
                            <form className="w-full" action="" ref={formRef} onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
                                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastname" className="block text-gray-700 font-semibold mb-2">Apellido</label>
                                    <input type="text" id="lastname" name="lastname" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="dni" className="block text-gray-700 font-semibold mb-2">DNI</label>
                                    <input type="number" id="dni" name="dni" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo electrónico</label>
                                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Dirección de envío</label>
                                    <input id="address" name="address" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required></input>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="paymentMethod" className="block text-gray-700 font-semibold mb-2">Método de pago</label>
                                    <select id="paymentMethod" name="paymentMethod" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required>
                                        <option value="">Seleccionar método de pago</option>
                                        <option value="tarjeta">Tarjeta de crédito/débito</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="transferencia">Transferencia bancaria</option>
                                    </select>
                                </div>
                                <div className="flex justify-between items-center">
                                    <button type="submit" className="bg-green-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg">Finalizar compra</button>
                                    <Link to="/" className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold text-lg">Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Checkout;