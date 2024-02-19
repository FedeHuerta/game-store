import './styles/App.css'
import { NavbarComponent } from './components/navbar/NavbarComponent.jsx'
import { Welcome } from './components/main/inicio/Welcome.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { Us } from './components/main/inicio/Us.jsx'

function App() {
  return (
    <>
      <NavbarComponent />
      <Welcome />
      <Us />
      <Footer />
    </>
  )
}

export default App