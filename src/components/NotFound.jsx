import NotFoundImg from '../assets/404.png';

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img src={NotFoundImg} alt="404" className="w-40 md:w-56 mb-8" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Oops! Parece que te has perdido.</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">La página que buscas no existe.</p>
            <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Volver a la página principal
            </a>
        </div>
    );
};

