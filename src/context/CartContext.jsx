import { useState, createContext, useContext } from "react";

const CarritoContext = createContext()
export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    const addItem = (item, cantidad) => {
        // Creo una copia del carrito y actualizo la cantidad del elemento si ya existia
        const newCart = carrito.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cantidad };
            }
            return cartItem;
        });

        // Actualizo el estado del carrito con la nueva copia o agrego un nuevo elemento si no existia
        if (newCart.some((cartItem) => cartItem.id === item.id)) {
            setCarrito(newCart);
        } else {
            setCarrito([...newCart, { ...item, quantity: cantidad }]);
        }
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCarrito([])
    }

    const getItemQuantity = () => {
        return carrito.reduce((acum, item) => acum + item.quantity, 0)
    }

    const updateItemQuantity = (id, quantity) => {
        const updatedCart = carrito.map(item => {
            if (item.id === id) {
                return { ...item, quantity };
            }
            return item;
        });
        setCarrito(updatedCart);
    };

    const totalPrice = () => {
        return carrito.reduce((acum, item) => acum + (item.quantity * item.price), 0)
    }

    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, clearCart, getItemQuantity, totalPrice, updateItemQuantity }}> {props.children} </CarritoContext.Provider>
    )
}