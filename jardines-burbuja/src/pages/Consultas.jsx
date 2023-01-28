import React from 'react'
import Footer from '../includes/Footer'
import "../../public/styles/Consultas.css"
import BurguerButton from '../components/BurguerButtom'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { consultas } from "../services/consultas"
import { Link } from "react-router-dom"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default function Consultas() {
  
  const [body, setBody] = useState({ nombre: null, apellido: null, email: null, mensajes: null })
  console.log(body)
  const seting = e => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  const onSubmit = async (e) => {
    try {
      let result = await consultas(body)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
    if (body) {
      MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'mensaje enviado de forma correcta',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <>
      <div className="conteiner-top">
        <picture className="image-container">
        <Link to="/">< img src="../../public/images/burbuja.svg" className='logo' href="/" /> </Link>
        </picture>
        <nav className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </nav>
        <nav className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="./Incripcion">Incrcipcion</a>
        </nav>
      </div>
      <section className="form">
        <form onSubmit={handleSubmit((onSubmit))}>
          <label className="names">Nombre</label>
          <input type="text" id="relleno" name="nombre" onChange={seting}
            {...register("nombre", {
              required: "este campo es obligatorio",
              minLength: 2,
              maxLength: 10,
              message: "minimo dos letras"
            })}
          />
          <p>{errors.nombre?.message}</p>
          <label className="names">Apellido</label>
          <input type="text" id="relleno" name="apellido" onChange={seting}
            {...register("apellido", {
              required: "este campo es obligatorio",
              minLength: 2,
              maxLength: 10,
              message: "minimo 2 letras"
            })}
          />
          <p>{errors.apellido?.message}</p>
          <label className="names">Email</label>
          <input type="text" id="relleno" onChange={seting} name="email"
            {...register("email", {
              minLength: 2,
              message: "no es un  valido",
              required: "este campo es obligatorio",
            })} />
          <p>{errors.email?.message}</p>
          <label className='names'>Mensaje</label>
          <textarea id='relleno-text' cols="30" rows="8" borde-radius="10px" onChange={seting}
            name="mensaje"{...register("mensaje", {
              minLength: 2,
              maxLength: 30,
              message: "el campo no puede estar vacio",
              required: "este campo es obligatorio",
            })}
          ></textarea>
          <p>{errors.mensaje?.message}</p>
          <section className='button'>
            <button type="reset">Cancelar</button>
            <button type='submit'>Enviar</button>
          </section>
        </form>
      </section>

      <Footer />
    </>
  )
}

