import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Ayuda = () => {
    const preguntas = [
        {
            pregunta: "¿Cómo puedo realizar una compra?",
            respuesta: "Para realizar una compra, simplemente selecciona los productos que deseas comprar, añádelos al carrito y sigue los pasos de pago."
        },
        {
            pregunta: "¿Cuáles son los métodos de pago aceptados?",
            respuesta: "Aceptamos pagos con tarjeta de crédito, débito y MercadoPago."
        },
        {
            pregunta: "¿Hacen envíos a todo el país?",
            respuesta: "Sí, realizamos envíos a todo el país."
        },
        {
            pregunta: "¿Cómo hago para coordinar el envío?",
            respuesta: "Una vez realizada la compra, te enviaremos un correo electrónico para coordinar el envío."
        },
        {
            pregunta: "¿Puedo realizar cambios en mi pedido después de haberlo realizado?",
            respuesta: "Una vez realizado el pedido, no es posible realizar cambios en él. Te recomendamos revisar cuidadosamente tu pedido antes de finalizar la compra."
        },
        {
            pregunta: "¿Cómo puedo rastrear mi pedido?",
            respuesta: "Una vez que tu pedido haya sido despachado, recibirás un correo electrónico con un enlace para rastrear tu pedido."
        },
        {
            pregunta: "¿Cuál es el tiempo de entrega?",
            respuesta: "El tiempo de entrega varía según la ubicación. Una vez confirmada la compra, te proporcionaremos una estimación del tiempo de entrega."
        },
        {
            pregunta: "¿Puedo devolver un producto?",
            respuesta: "Sí, puedes devolver un producto dentro de los 30 días posteriores a la compra. Por favor, consulta nuestra política de devoluciones para más detalles."
        },
        {
            pregunta: "¿Cómo puedo contactarlos?",
            respuesta: (
                <>
                    Puedes contactarnos a través de nuestro formulario de contacto en la página de
                    <Link to="/contacto" className="text-blue-500 hover:underline"> CONTACTO</Link>,
                    o enviándonos un correo electrónico a <a href="mailto:info@petworld.com">info@petworld.com</a>.
                </>
            )
        }
    ];

    const [preguntaAbierta, setPreguntaAbierta] = useState(null);

    const toggleRespuesta = (index) => {
        setPreguntaAbierta(preguntaAbierta === index ? null : index);
    };

    return (
        <div className="bg-blue-100 min-h-screen font">
            <div className="container mx-auto py-36">
                <h1 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h1>
                <div className="max-w-4xl mx-auto pl-6 pr-6">
                    {preguntas.map((pregunta, index) => (
                        <div key={index} className="border-b-2 border-gray-300 py-4">
                            <button
                                className="w-full text-left font-semibold text-xl mb-2 focus:outline-none"
                                onClick={() => toggleRespuesta(index)}
                            >
                                {pregunta.pregunta}
                            </button>
                            {preguntaAbierta === index && (
                                <p className="text-gray-700">{pregunta.respuesta}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
