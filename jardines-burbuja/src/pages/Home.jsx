import Header from '../includes/Header'
import Footer from '../includes/Footer'
import "../../public/styles/Home.css"

import { useState, UseEffect } from 'react'
export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <Header clicked={clicked} handleClick={handleClick} />
      <section className={`texts ${clicked ? 'active' : ''}`}>

<i className="fa-solid fa-house icon"></i>
<h2>Nuestra institucion</h2>
<p> Brindamos a nuestros alumnos una educación integral y formación de las pirmeras enseñanzas</p>
<img src="/imagen-jardin.jpg" alt="jardin" className='image' width="350" />

<h2>Actividades</h2>
<p> Contamos con un ambiente cuidado para que cada actividad se realice 100% seguro </p>
<img src="/patio-de-juegos-del-jardin.jpg" className='image' width="350" />
<i className="fa-solid fa-graduation-cap icon"></i>
<h2> Nuestros objetivos</h2>
<p>
  Ofrecer una educación formal, incorporada a la enseñanza oficial, que los forme como sujetos competentes en donde se favorezca el desarrollo de sus habilidades para acceder a mejores condiciones de vida,
</p>

</section>
    <Footer/>  
    </>

  )
}


