import { Link } from "react-router-dom"
import { CartWidget } from "../../main/carrito/CartWidget"
import { AiOutlineSearch } from 'react-icons/ai'


export const SeccionDcha = () => {
    return (
        <>
            <div className="flex items-center">
                <div className="flex space-x-4 bg-red categorias text-lg">
                    <Link className='text-white' to="/">Inicio</Link>
                    <Link className='text-white' to='/productos'>Productos</Link>
                    <a className='text-white' href="">Ayuda</a>
                    <a className='text-white' href="">Contacto</a>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center mx-3">
                        <form className='w-[250px] relative'>
                            <div>
                                <input type="search" placeholder='Buscar' className='w-full p-3 rounded-full bg-grey text-black' />
                                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-300 rounded-full lupa'>
                                    <AiOutlineSearch />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </>
    )
}