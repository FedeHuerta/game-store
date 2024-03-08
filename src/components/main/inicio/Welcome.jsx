import pets from '../../../assets/pets.png'

export const Welcome = () => {
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center items-center text-white bienvenida">
            <div className="text-center md:text-center md:w-1/2">
                <h1 className="text-5xl font-bold mb-4">¡Bienvenido a Pet World!</h1>
                <p className="text-xl">Para mascotas felices y hogares alegres.</p>
            </div>
            <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
                <img src={pets} alt="Perros y gatos mirando al usuario" className="w-full h-full object-cover" />
            </div>
        </section>
    )
}
