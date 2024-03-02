import { Link } from "react-router-dom";

export const Item = ({ product }) => {
    return (
        <Link to={`/productos/${product.type}/${product.id}`}>
            <div className="max-w-xs mx-auto bg-white p-8 rounded-lg shadow-md h-auto flex flex-col justify-between">
                <div className="relative">
                    <img src={`${product.img}`} alt={`Imagen de ${product.name}`} className="w-full h-64 object-contain" />
                    <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-md">{product.stock} en stock</div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">${product.price}</span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
