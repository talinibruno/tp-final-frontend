import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import LoginScreen from '../assets/images/LoginScreen.png'
import ViteLogo from '../assets/dev-logos/vite.svg'
import VercelLogo from '../assets/dev-logos/vercel.svg'
import ReactLogo from '../assets/dev-logos/react.svg'
import AppLogo from '../assets/images/logo-new.png'

const Help = () => {

  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  return (
    <main className="help-page">
      <div className="help-page-div">

        <div className="btns-help-container">
          <button onClick={() => { navigate("/chat") }} className="help-btns">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
            <span>Volver al Chat</span>
          </button>

          <button onClick={toggleTheme} className="help-btns" >
            {
              theme === 'light' ?
                (
                  <>
                    <span>Oscuro</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                    </svg>
                  </>
                ) :
                (
                  <>
                    <span>Claro</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                    </svg>
                  </>
                )
            }
          </button>
        </div>

        <div className="help-header">
          <h1>¿Necesitas ayuda?</h1>
          <p>Esta es una aplicación de mensajería que permite comunicarte fácilmente con tus contactos a través de mensajes de chat.</p>
          <p>Actualmente se encuentra disponible para computadoras y web entrando desde cualquier navegador.</p>
          <img className="help-login-screen" src={LoginScreen} alt="Foto del Login de la aplicación" />
        </div>

        <hr />

        <h2>Funcionalidades y características principales</h2>
        <div className="help-features-general">

          <div className="help-feat">
            <h3>Estructura y secciones</h3>
            <p>En la pantalla principal luego de loguearte, podrás ver a tu izquierda, la barra lateral o "Sidebar" donde se encuentran todos tus contactos.</p>
            <p>Por el lado derecho está la pantalla del chat, donde verás los mensajes guardados con la persona seleccionada y podrás enviar nuevos mensajes si así lo deseas!</p>
          </div>

          <div className="help-feat">
            <h3>Privacidad y seguridad</h3>
            <p>Cifrado de extremo a extremo: todos los mensajes están protegidos para que solo tú y la persona con la que hablas puedan leerlos.</p>
          </div>

          <div className="help-feat">
            <h3>Ajustes y personalización</h3>
            <p>Cambia el tema seleccionado, en la aplicación podrás optar por utilizar un tema claroo un tema oscuro</p>
          </div>
        </div>

        <hr />

        <h2>¡Próximamente! Nuevas Funcionalidades</h2>
        <p>¿Cuáles son las nuevas funcinoalidades para nuestra próxima versión?</p>

        <div className="help-new-features">
          <p>Se podrán agregar apodos a tus contactos, para que los puedas reconocer más fácilmente</p>
          <p>Habilitaremos la opción para cambiar el fondo de tu chat y que lo personalices a tu gusto</p>
        </div>

        <hr />

        <div className="help-dev-tech" >
          <h2>Tecnologías utilizadas</h2>
          <p>Nuestra plataforma está desarrollada con Vite y React, lo que permite un entorno rápido y moderno para el desarrollo web, y está desplegada en Vercel, que garantiza un alojamiento ágil, seguro y escalable.</p>

          <div className="help-dev-logos">
            <img src={ViteLogo} alt="Logo de Vite" className="logo-vite" />
            <img src={ReactLogo} alt="Logo de React" className="logo-react" />
            <img src={VercelLogo} alt="Logo de Vercel" className="logo-vercel" />
          </div>
        </div>

        <hr />

        <div className="help-sign">
          <h4>Desarrollado por Bruno Talini.</h4>
          <p>2025. UTN - Diplomatura Full Stack. (Frontend)</p>
        </div>
      </div>
    </main>
  )
}

export default Help