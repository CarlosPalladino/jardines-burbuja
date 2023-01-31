import Navbar from '../includes/Header'
// import Header from '../includes/Header'
import Footer from '../includes/Footer'
 import { useState } from 'react'
import "../../public/styles/Home.css"
import { Link } from "react-router-dom"

export default function Home() {
  const [clicked, setClicked] = useState(false)
const handleClick = () => {
  setClicked(!clicked)
} 

  return (
    <>

       <Navbar >
         <Link onClick={handleClick}  to ="./pages/Incripcion">Incrcipcion</Link>
          <Link  onClick={handleClick} to ="./pages/Consultas">Consultas</Link>  
      </Navbar>     
      <section className='texts'>
        <i className="fa-solid fa-house icons"></i>
        <article className="article">
          <h2>Nuestra institucion</h2>
          <img src="../../public/images/imagen-jardin.jpg" alt="jardin" className='img' />
          <div className="text-container">
            <p > Brinda a los alumnos una educación integral y formación de calidad</p>
          </div>

        </article>
        <article className="article">
          <h2> Nuestras Actividades</h2>
          <img src="../../public/images/patio-de-juegos-del-jardin.jpg" className='img' />
          <div className="text-container">
            <p > Contamos con un ambiente cuidado para actividades <span> seguras </span> </p>
          </div>

          <i className="fa-solid fa-graduation-cap icons"></i>
        </article>
        <article className="article">
          <h2> Nuestros objetivos</h2>

          <img src="../../public/images/fiesta-jardin.jpg" className='img' />
          <div className="text-container">
            <p>
              Brindar seguridad, enseñanza ,buscar referencias,
            </p>
          </div>
        </article>
      </section>
      <Footer />
    </>

  )
}


