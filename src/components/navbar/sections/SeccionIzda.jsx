import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'

export const SeccionIzda = () => {
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="logo de la pagina" />
            </Link>
        </div>
    )
}