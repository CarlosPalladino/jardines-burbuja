import "../../public/styles/Header.css"
import BurguerButton from '../components/BurguerButtom'
import { useState, UseEffect } from 'react'
import { Link } from "react-router-dom"



export default function Navbar(props) {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <div className="header-container">
        <picture className="image-container">
          <Link  to="/" >  
          < img src="../../public/images/burbuja.svg" className='image'/>
          </Link>
        </picture>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <nav className={`links ${clicked ? 'active' : ''}`}>
          {props.children}
        </nav>
      </div>

    </>
  )
}
