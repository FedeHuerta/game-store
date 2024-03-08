import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, addDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "",
    authDomain: "reactjs-60225.firebaseapp.com",
    projectId: "reactjs-60225",
    storageBucket: "reactjs-60225.appspot.com",
    messagingSenderId: "954292461664",
    appId: "1:954292461664:web:4f41b4e40e64eda71d2305"
};


const app = initializeApp(firebaseConfig);

const bdd = getFirestore();

// Consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//Consultar Producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar Producto
export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto
export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//Create and Read Ordenes de Compra
export const createOrdenCompra = async (cliente, precioTotal, carrito) => {
    const fechaCompra = new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fechaCompra,
    })

    return ordenCompra
}

export const getOrderCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}

export const createForm = async (cliente) => {
    const fechaContacto = new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
    try {
        const contactRef = await addDoc(collection(bdd, "contactos"), {
            nombre: cliente.nombre,
            apellido: cliente.apellido,
            celular: cliente.celular,
            provincia: cliente.provincia,
            localidad: cliente.localidad,
            mensaje: cliente.mensaje,
            fechaContacto: fechaContacto,
        });
        return contactRef.id;
    } catch (e) {
        console.log(e);
    }
};