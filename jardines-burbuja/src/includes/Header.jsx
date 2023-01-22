import "../../public/styles/Header.css"
import BurguerButton from '../components/BurguerButtom'
import { useState, UseEffect } from 'react'
export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <div className="header-container">
        <article className="image-container">< img src="../../public/images/burbuja.svg" className='img' href="/" />
        </article>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <nav className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="./pages/Incripcion">Incrcipcion</a>
          <a onClick={handleClick} href="./pages/Consultas">Consultas</a>
        </nav>
      </div>

    </>
  )
}
