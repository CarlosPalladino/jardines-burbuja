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
          <p> Brindamos a nuestros alumnos una educación integral y formación de las pirmeras enseñanzas</p>
          <img src="../../public/images/imagen-jardin.jpg"  alt="jardin" className='image' width="350" />
        </article>
        <article className="article">
        <h2>Actividades</h2>
        <p> Contamos con un ambiente cuidado para que cada actividad se realice 100% seguro </p>
        <img src="../../public/images/patio-de-juegos-del-jardin.jpg" className='image' width="350" />
        <i className="fa-solid fa-graduation-cap icons"></i>
        </article>
        <article className="article"> 
        <h2> Nuestros objetivos</h2>
        <p>
          Ofrecer una educación formal, incorporada a la enseñanza oficial, que los forme como sujetos competentes en donde se favorezca el desarrollo de sus habilidades para acceder a mejores condiciones de vida,
        </p>       
         <img src="../../public/images/fiesta-jardin.jpg" className='image' width="350" />
        </article>
      </section>
      <Footer />
    </>

  )
}


