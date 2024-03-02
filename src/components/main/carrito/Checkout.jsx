import { useRef } from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const formRef = useRef()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current)
        const data = Object.fromEntries(datForm)
        console.log(data)
        e.target.reset()
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between shadow-2xl rounded-lg bg-white">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Finaliza tu compra</h2>
                <form className="w-full" action="" ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastname" className="block text-gray-700 font-semibold mb-2">Apellido</label>
                        <input type="text" id="lastname" name="lastname" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dni" className="block text-gray-700 font-semibold mb-2">DNI</label>
                        <input type="number" id="dni" name="dni" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo electrónico</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Dirección de envío</label>
                        <input id="address" name="address" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="paymentMethod" className="block text-gray-700 font-semibold mb-2">Método de pago</label>
                        <select id="paymentMethod" name="paymentMethod" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
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
    );
};

export default Checkout;