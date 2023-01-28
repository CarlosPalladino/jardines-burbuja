import "../../public/styles/Header.css"
import BurguerButton from '../components/BurguerButtom'
import { useState, UseEffect } from 'react'
export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  let homeLinks = <a onClick={handleClick} href="./pages/Incripcion">Incrcipcion</a>
    &&
    <a onClick={handleClick} href="./pages/Consultas">Consultas</a>;
    let consultLiks = <a onClick={handleClick} href="./pages/Incripcion">Incrcipcion</a>
    let incriptionLinks = <a onClick={handleClick} href="./pages/Consultas">Consultas</a>
  let pageResult = homeLinks 
 
  let page
  if (page == homeLinks) {
    pageResult = incriptionLinks &&  consultLiks
  }
  else if (page == consultLiks) {
    pageResult = consultLiks
  }
  else if (page == incriptionLinks) {
    pageResult = incriptionLinks
  }
  return (
    <>
      <div className="header-container">
        <picture className="image-container">
          < img src="../../public/images/burbuja.svg" className='image' href="/" />
        </picture>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <nav className={`links ${clicked ? 'active' : ''}`}>

          {pageResult}
          {/* <a onClick={handleClick} href="./pages/Incripcion">Incrcipcion</a>
          <a onClick={handleClick} href="./pages/Consultas">Consultas</a> */}
        </nav>
      </div>

    </>
  )
}
