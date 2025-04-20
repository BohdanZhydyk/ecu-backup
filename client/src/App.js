import './styles/App.scss'
import './styles/classes.scss'
import { useAppHeight } from './hooks'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Admin from './components/Admin'

function App() {
  
  useAppHeight()

  return (
    <div className="App flex column">

      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
