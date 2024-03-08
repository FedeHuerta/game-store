import React from 'react';
import mf1 from '../../../assets/mf1.jpg';
import mf2 from '../../../assets/mf2.jpg';
import mf3 from '../../../assets/mf3.jpeg';

export const Us = () => {
    return (
        <section className="us pb-40">
            <div className="flex flex-col items-center py-20 max-w-6xl mx-auto text-center">
                <p className="text-blue-700 font-bold text-base">PET WORLD</p>
                <h2 className="font-extrabold text-5xl text-gray-800 py-5">Productos de calidad para el bienestar de tus mascotas</h2>
                <p className="text-lg text-gray-600">Descubre una selección única de productos de calidad para el bienestar y la diversión de tus mascotas. ¡Haz que cada día sea especial para ellos!</p>
            </div>
            <div className="flex flex-col items-center my-20 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img src={mf1} alt="Un perro persiguiendo al otro jugando" className="object-cover w-full h-64 md:h-full" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300">
                            <p className="text-white text-lg font-bold">¡Juega con tu mascota!</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img src={mf2} alt="Gato con los ojos cerrados siendo acariciado por su dueña" className="object-cover w-full h-64 md:h-full" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300">
                            <p className="text-white text-lg font-bold">¡Cuida a tu gato!</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img src={mf3} alt="Perro contento sacando la lengua mirando a la cámara" className="object-cover w-full h-64 md:h-full" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300">
                            <p className="text-white text-lg font-bold">¡Sonríe con tu perro!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center py-20 max-w-6xl mx-auto">
                <p className="text-blue-700 font-bold text-base">NOSOTROS</p>
                <h2 className="font-extrabold text-5xl text-gray-800 py-5">Nos preocupamos por tus mascotas</h2>
                <p className="text-lg text-gray-600">Nuestro trabajo es ofrecerte los mejores productos de calidad para tus amigos peludos, preocupándonos por su bienestar y cuidado.</p>
            </div>
        </section>
    );
};