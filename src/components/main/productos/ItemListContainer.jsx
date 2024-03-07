import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../firebase/firebase";

export const ItemListContainer = () => {
    const { cid } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(prods => {
                const productos = prods.filter(prod => prod.stock > 0)
                if (cid) {
                    const productosFiltrados = productos.filter(prod => prod.type === cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(productos)
                }

            })
            .catch((error) => console.log(error))
    }, [cid])

    return (
        <div className="container mx-auto px-4 py-8 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <ItemList products={products} template="Item" />
            </div>
        </div>
    );
};
