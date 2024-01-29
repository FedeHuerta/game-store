import { ItemListContainer } from '../ItemListContainer.jsx'
import { CartWidget } from "../CartWidget"
import { AiOutlineSearch } from 'react-icons/ai'


export const SeccionDcha = () => {
    return (
        <>
            <div className="flex items-center">
                <div className="flex space-x-4 bg-red categorias text-lg">
                    <a className='text-white' href=""><ItemListContainer mensaje={"Inicio"} /></a>
                    <a className='text-white' href=""><ItemListContainer mensaje={"Productos"} /></a>
                    <a className='text-white' href=""><ItemListContainer mensaje={"Ayuda"} /></a>
                    <a className='text-white' href=""><ItemListContainer mensaje={"Contacto"} /></a>
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