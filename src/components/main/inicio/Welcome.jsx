import pets from '../../../assets/pets.png'

export const Welcome = () => {
    return (
        <section className="h-screen flex flex-row justify-around items-center text-white bienvenida">
            <div className="text-center w-1/2">
                <h1 className="text-5xl font-bold mb-4">¡Bienvenido a Pet World!</h1>
                <p className="text-xl">Para mascotas felices y hogares alegres.</p>
            </div>
            <div className="w-1/2 relative mt-auto">
                <img src={pets} alt="Perros y gatos mirando al usuario" className="pets"/>
            </div>
        </section>
    )
}