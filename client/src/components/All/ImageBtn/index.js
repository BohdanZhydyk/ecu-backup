import "./ImageBtn.scss"
import { fileLink } from "../../../variables"


function ImageBtn({ props:{btn, click} }){

  function imageLink(name){
    switch (name) {
      case "HomeBtn":         return `${fileLink}Images/Frontend/HomeBtn.png`
      case "ThemeDayBtn":     return `${fileLink}Images/Frontend/DayModeBtn.png`
      case "ThemeNightBtn":   return `${fileLink}Images/Frontend/NightModeBtn.png`
      case "LogOutBtn":       return `${fileLink}Images/Frontend/LogOutBtn.png`
      default: break;
    }
  }

  return(
    <div className="ImageBtnWrapper flex">
      <img className="ImageBtn ImgBtn" src={imageLink(btn)} alt={btn} onClick={click} style={{ cursor: 'pointer' }} />
    </div>
  )
}

export default ImageBtn