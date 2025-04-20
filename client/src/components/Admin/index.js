import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getApiUrl } from "../../functions"
import "./Admin.scss"
import ImageBtn from "../All/ImageBtn"

function Admin() {

  const navigate = useNavigate()

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [errMessage, setErrMessage] = useState(false)
  const [isLogged, setIsLogged] = useState( localStorage.getItem('isLogged') === 'true' )

  const headers = {
    'Content-Type': 'application/json'
  }

  const getHeaders = () => {
    const bzToken = localStorage.getItem('bzToken')
    const headers = {'Content-Type': 'application/json',}
    if (bzToken) { headers['Authorization'] = `Bearer ${bzToken}` }
    return headers
  }

  const sanitizeInput = (input) => input.replace(/[<>"'&/\\]/g, '').trim()

  const handleHome = () => { navigate('/') }

  const handleLogOut = () => {
    localStorage.removeItem('isLogged')
    localStorage.removeItem('bzToken')
    setIsLogged( prev=> false )
  }

  const handleLogin = async (e) => {

    e.preventDefault()

    setErrMessage( prev=> false )

    const sanitizedLogin = sanitizeInput(login)
    const sanitizedPassword = sanitizeInput(password)
  
    if (!sanitizedLogin || !sanitizedPassword) {
      setErrMessage(prev=> 'Login i hasło są wymagane!')
      return
    }
  
    try {
      const response = await fetch(`${getApiUrl()}/api/login`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ login: sanitizedLogin, password: sanitizedPassword })
      })
  
      const data = await response.json()
  
      if (data.success) {
        localStorage.setItem('isLogged', 'true')
        localStorage.setItem('bzToken', data?.bzToken)
        setIsLogged( prev=> true )
      }
      else {
        switch (data.errorType) {
          case 'login':       setErrMessage( prev=> 'Nieprawidłowy login!' );   break
          case 'password':    setErrMessage( prev=> 'Nieprawidłowe hasło!' );   break
          default:            setErrMessage( prev=> 'Błąd logowania!' );        break
        }
      }
  
    }
    catch (error) { setErrMessage(prev=> 'Wystąpił problem z serwerem.') }
  }

  return (
    <div className="Admin flex column start">

      <div className="AdminPannelTop flex between stretch">

        <div className="ImgBtn flex">
          <ImageBtn props={{btn:"HomeBtn", click:handleHome}} />
        </div>

        <div className="AdminPannelMessages flex">
          {
            isLogged
            ?
            <div className="txtGrn bold">{`Cześć, ${login}!`}</div>
            :
            <div className="txtOrg flex start">
              { errMessage && <div className="ErrorMessage">{errMessage}</div> }
            </div>
          }
        </div>

        <div className="ImgBtn flex">
          { isLogged && <ImageBtn props={{btn:"LogOutBtn", click:handleLogOut}} /> }
        </div>

      </div>

      {
        !isLogged &&
        <form className="LoginForm flex column start" onSubmit={handleLogin}>

          <input
            className="LoginInput radius" type="text" value={login}
            onChange={(e) => setLogin(e.target.value)} placeholder="Wpisz login"
          />

          <input
            className="LoginInput radius" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="Wpisz hasło"
          />

          <button className="LoginButton GrnBtn bold radius" type="submit">
            Zaloguj się
          </button>

        </form>
      }

    </div>
  )
}

export default Admin
