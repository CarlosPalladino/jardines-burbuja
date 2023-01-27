import Header from '../includes/Header'
import Footer from '../includes/Footer'
import "../../public/styles/Home.css"
export default function Navbar() {
  return (
    <>
      <Header />
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


