import { useRef } from 'react';
import { toast } from 'react-toastify';
import { createForm } from '../../../firebase/firebase.js';

export const Contacto = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const cliente = Object.fromEntries(formData)

        createForm(cliente)
            .then(() => {
                toast.success('¡Mensaje enviado con éxito!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                formRef.current.reset()
            })
            .catch((error) => {
                toast.error(`Error al enviar el mensaje: ${error.message}`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100 pt-20">
            <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between shadow-2xl rounded-lg bg-white">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Ponte En Contacto Con Nosotros</h2>
                <form className="w-full" ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">Nombre</label>
                        <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="apellido" className="block text-gray-700 font-semibold mb-2">Apellido</label>
                        <input type="text" id="apellido" name="apellido" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="celular" className="block text-gray-700 font-semibold mb-2">Celular</label>
                        <input type="tel" id="celular" name="celular" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="provincia" className="block text-gray-700 font-semibold mb-2">Provincia</label>
                        <input type="text" id="provincia" name="provincia" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="localidad" className="block text-gray-700 font-semibold mb-2">Localidad</label>
                        <input type="text" id="localidad" name="localidad" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-green-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg mx-auto w-2/4">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
