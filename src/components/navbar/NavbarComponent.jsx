import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { CartWidget } from '../main/carrito/CartWidget.jsx';
import { AiOutlineSearch } from 'react-icons/ai';

export const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4 fixed w-full top-0 sm:px-6 lg:px-8 navbar z-10">
            <div className="flex items-center justify-between">
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo de la pagina" />
                    </Link>
                </div>
                <div className="hidden sm:flex items-center space-x-4 bg-red categorias text-lg ml-auto px-4">
                    <Link className="text-white" to="/">Inicio</Link>
                    <Link className="text-white" to="/productos">Productos</Link>
                    <Link className="text-white" to="/ayuda">Ayuda</Link>
                    <Link className="text-white" to="/contacto">Contacto</Link>
                </div>
                <div className="hidden sm:flex items-center">
                    <div className="flex items-center mx-3">
                        <form className="w-[250px] relative">
                            <div>
                                <input type="search" placeholder="Buscar" className="w-full p-3 rounded-full bg-grey text-black" />
                                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-300 rounded-full lupa">
                                    <AiOutlineSearch />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
                <div className="sm:hidden flex items-center justify-between space-x-4">
                    <div className="w-10"><CartWidget /></div>
                    <button onClick={toggleMenu} className="block text-gray-500 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
                {isOpen && (
                    <div className="sm:hidden absolute top-16 right-0 navbar w-screen shadow-lg text-center text-white mt-5">
                        <div className="px-4 py-2 flex flex-col justify-center items-center ">
                            <Link onClick={toggleMenu} className="block py-3 hover:text-red-500" to="/">Inicio</Link>
                            <Link onClick={toggleMenu} className="block py-3 hover:text-red-500" to="/productos">Productos</Link>
                            <Link onClick={toggleMenu} className="block py-3 hover:text-red-500" to="/ayuda">Ayuda</Link>
                            <Link onClick={toggleMenu} className="block py-3 hover:text-red-500" to="/contacto">Contacto</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
