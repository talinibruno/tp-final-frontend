import { Link } from "react-router-dom"
import NotFoundImage from '../assets/not-found.svg'

const NotFound = () => {
  return (
    <section className="section-not-found">
      <h1>Ops, página no encontrada</h1>
      <img src={NotFoundImage} alt="" />
      <p>No pudimos encontrar la página a donde te dirigias, solo contamos con la posibilidad de trabajar con el chat.</p>
      <Link to="/chat"><button>Ir al chat</button></Link>
    </section>
  )
}

export { NotFound }