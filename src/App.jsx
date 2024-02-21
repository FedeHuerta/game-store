import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavbarComponent } from './components/navbar/NavbarComponent.jsx'
import { Inicio } from './components/main/inicio/Inicio.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { NotFound } from './components/NotFound.jsx'
import { Categories } from './components/main/productos/Categories.jsx'
import { ItemListContainer } from './components/main/productos/ItemListContainer.jsx'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <NavbarComponent />
        <div className="content">
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/productos' element={<Categories />} />
            <Route path='/productos/:cid' element={<ItemListContainer />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
