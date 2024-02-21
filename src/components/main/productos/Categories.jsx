import { Link } from "react-router-dom";
import alimentos from "../../../assets/alimentos.png";
import juguetes from "../../../assets/juguetes.png";
import higiene from "../../../assets/higiene.png";
import accesorios from "../../../assets/accesorios.png";

export const Categories = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-20 flex flex-col items-center justify-center">
            <Link className="mb-4" to="/productos/alimentos"><img src={alimentos} alt="" /></Link>
            <Link className="mb-4" to="/productos/juguetes"><img src={juguetes} alt="" /></Link>
            <Link className="mb-4" to="/productos/higiene-y-cuidados"><img src={higiene} alt="" /></Link>
            <Link className="mb-4" to="/productos/accesorios"><img src={accesorios} alt="" /></Link>
        </div>
    );
};
