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
            <p > Brindamos a nuestros alumnos una educación integral y formación de las pirmeras enseñanzas</p>
          </div>

        </article>
        <article className="article">
          <h2> Nuestras Actividades</h2>
          <img src="../../public/images/patio-de-juegos-del-jardin.jpg" className='img' />
          <div className="text-container">
            <p > Contamos con un ambiente cuidado para que cada actividad se realice 100% seguro </p>
          </div>

          <i className="fa-solid fa-graduation-cap icons"></i>
        </article>
        <article className="article">
          <h2> Nuestros objetivos</h2>

          <img src="../../public/images/fiesta-jardin.jpg" className='img' />
          <div className="text-container">
            <p>
              Brindar una educación formal, incorporada a la enseñanza oficial, que los forme como sujetos competentes en donde se favorezca el desarrollo de sus habilidades para acceder a mejores condiciones de vida,
            </p>
          </div>
        </article>
      </section>
      <Footer />
    </>

  )
}


