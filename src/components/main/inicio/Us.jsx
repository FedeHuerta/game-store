import mf1 from '../../../assets/mf1.jpg'
import mf2 from '../../../assets/mf2.jpg'
import mf3 from '../../../assets/mf3.jpeg'

export const Us = () => {
    return (
        <>
            <section className="us pb-40">
                <div>
                    <div className="flex flex-col items-center py-28 max-w-xl mx-auto text-center">
                        <p className="text-blue-700 font-bold text-base">PET WORLD</p>
                        <h2 className="font-extrabold text-5xl text-gray-800 py-5">Productos de calidad para el bienestar de tus mascotas</h2>
                        <p className="text-lg text-gray-600">Descubre una selección única de productos de calidad para el bienestar y la diversión de tus mascotas. ¡Haz que cada día sea especial para ellos!</p>
                    </div>
                </div>
                <div className="flex my-28 max-w-4xl mx-auto h-full">
                    <div className="mr-52">
                        <p className="text-blue-700 font-bold text-base">NOSOTROS</p>
                        <h2 className="font-extrabold text-5xl text-gray-800 py-5">Nos preocupamos por tus mascotas</h2>
                        <p className="text-lg text-gray-600">Nuestro trabajo es ofrecerte los mejores productos de calidad para tus amigos peludos, preocupándonos por su bienestar y cuidado.</p>
                    </div>
                    <div className="">
                        <div className="grid grid-rows-2 grid-cols-2 gap-2">
                            <div className="col-span-2">
                                <img src={mf1} alt="Un perro persiguiendo al otro jugando" className="object-cover h-full rounded-lg" />
                            </div>
                            <div className="object-cover">
                                <img src={mf2} alt="Perro golden dandole la pata al dueño" className="h-full rounded-lg object-cover" />
                            </div>
                            <div className="object-cover">
                                <img src={mf3} alt="Perro contento sacando la lengua mirando a la camara" className="h-full rounded-lg object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}