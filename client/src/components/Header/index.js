import { useEffect, useState } from "react"
import "./Header.scss"
import { descriptions } from "../../initialState"
import ImageBtn from "../All/ImageBtn"


function Header(){

  const [darkMode, setDarkMode] = useState(false)

  const [textIndex, setTextIndex] = useState(0)
  const [fade, setFade] = useState('fade-in')
  const toggleTheme = () => {
    document.body.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFade('fade-out')
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % descriptions.length)
        setFade('fade-in')
      }, 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return(
    <header className="Header flex between stretch">

      <div className="SiteName flex start bold">
        ECU Backup
      </div>

      <div className={`SiteDescription flex column center txtOrg bold ${fade}`}>
        {descriptions[textIndex]}
      </div>

      <div className="BtnsPannel flex end">
        {
          darkMode
          ? <ImageBtn props={{btn:"ThemeDayBtn", click:toggleTheme}} />
          : <ImageBtn props={{btn:"ThemeNightBtn", click:toggleTheme}} />
        }
      </div>

    </header>
  )
}

export default Header