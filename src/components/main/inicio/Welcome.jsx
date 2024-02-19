import neonboy from '../../../assets/neonboy.png'

export const Welcome = () => {
    return (
        <section className="h-screen flex flex-row justify-around items-center text-white bienvenida">
            <div className="text-center w-1/2">
                <h1 className="text-4xl font-bold mb-4">¡Bienvenido a Game Store!</h1>
                <p className="text-lg">Explora y descubre los mejores productos de tecnología.</p>
            </div>
            <div className="w-1/2 relative mt-auto">
                <img src={neonboy} alt="Hombre con mascara neon mirando al usuario" className="neonboy"/>
            </div>
        </section>
    )
}