import './styles/App.css'
import { NavbarComponent } from './components/navbar/NavbarComponent.jsx'
import { Welcome } from './components/welcome/Welcome.jsx'

function App() {
  return (
    <>
      <NavbarComponent />
      <Welcome />
    </>
  )
}

export default App