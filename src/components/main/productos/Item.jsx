import { Link } from "react-router-dom";
import { useCarritoContext } from "../../../context/CartContext";
import { toast } from "react-toastify";

export const Item = ({ product }) => {
    const { addItem } = useCarritoContext()

    const handleAddToCart = () => {
        addItem(product, 1)
        toast.success(`Producto Agregado Al Carrito.`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        })
    }
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
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">Ver Detalle</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
