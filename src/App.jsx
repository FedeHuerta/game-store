import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavbarComponent } from './components/navbar/NavbarComponent.jsx'
import { Inicio } from './components/main/inicio/Inicio.jsx'
import { Ayuda } from './components/main/ayuda/Ayuda.jsx'
import { Contacto } from './components/main/contacto/Contacto.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { NotFound } from './components/NotFound.jsx'
import { Categories } from './components/main/productos/Categories.jsx'
import { ItemListContainer } from './components/main/productos/ItemListContainer.jsx'
import { ItemDetailsContainer } from './components/main/productos/ItemDetailsContainer.jsx'
import { Cart } from './components/main/carrito/Cart.jsx'
import { Checkout } from './components/main/carrito/Checkout.jsx'
import { CarritoProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <CarritoProvider>
          <NavbarComponent />
          <ToastContainer />
          <div className="content">
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/productos' element={<Categories />} />
              <Route path='/productos/:cid' element={<ItemListContainer />} />
              <Route path='/productos/:cid/:pid' element={<ItemDetailsContainer />} />
              <Route path='/ayuda' element={<Ayuda />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </CarritoProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
