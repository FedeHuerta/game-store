import { SeccionIzda } from './sections/SeccionIzda.jsx'
import { SeccionDcha } from './sections/SeccionDcha.jsx'

export const NavbarComponent = () => {
    return (
        <nav className="p-4 fixed w-full top-0 sm:px-6 lg:px-8 navbar z-10">
            <div className=" flex items-center justify-around">
                <SeccionIzda />
                <SeccionDcha />
            </div>
        </nav>
    )
}