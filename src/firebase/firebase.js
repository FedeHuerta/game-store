import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import fs from 'fs';

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

const createProducts = async () => {
    try {
        const productos = JSON.parse(fs.readFileSync('productos.json', 'utf8'));

        productos.forEach(async (prod) => {
            const rta = await addDoc(collection(bdd, "productos"), {
                name: prod.name,
                brand: prod.brand,
                stock: prod.stock,
                price: prod.price,
                pet: prod.pet,
                type: prod.type,
                size: prod.size,
                img: prod.img
            });
            console.log(rta);
        });
    } catch (e) {
        console.log(e);
    }
};

createProducts();