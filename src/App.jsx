import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InicioSesion } from './ScreenComponents/InicioSesion'
import { InfoComidas } from './ScreenComponents/InfoComidas'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const [tokenInfo, setTokenInfo] = useState(window.localStorage.getItem("token-render"))

  const [isLog, setIsLog] = useState(tokenInfo ? true : false)


  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLog ? <Route path='/' element={<InfoComidas tokenInfo={tokenInfo} />} />
            : <Route path='/' element={<InicioSesion />} />}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
