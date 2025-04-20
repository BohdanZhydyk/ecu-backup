import "./Footer.scss"
import { useNavigate } from "react-router-dom"

function Footer() {

  const navigate = useNavigate()

  const handleCClick = () => { navigate('/admin') }

  return (
    <footer className="Footer flex">

      <span className="AdminBtn flex" onClick={handleCClick} style={{ cursor: 'pointer' }}>©</span>
      <span>2025 bzDrive</span>

    </footer>
  )
}

export default Footer