import "../../public/styles/Header.css"
import BurguerButton from '../components/BurguerButtom'
import { useState, UseEffect } from 'react'
export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }


  // let homeLinks = 
  // <a onClick={handleClick} href="./pages/Incripcion">Incrcipcion</a>
  //   &&
  
  //   <a onClick={handleClick} href="./pages/Consultas">Consultas</a>;
  // let consultLiks = <a onClick={handleClick} href="./pages/Incripcion">Incrcipcion</a>
  // let incriptionLinks = <a onClick={handleClick} href="./pages/Consultas">Consultas</a>
  // let page = homeLinks
  // if (page == homeLinks) {
  //   incriptionLinks && consultLiks
  // }
  // else if (page == consultLiks) {
  //   consultLiks
  // }
  // else if (page == incriptionLinks) {
  //   incriptionLinks
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

          {/* {page} */}
           <a onClick={handleClick} href="./pages/Incripcion">Incrcipcion</a>
          <a onClick={handleClick} href="./pages/Consultas">Consultas</a> 
        </nav>
      </div>

    </>
  )
}
