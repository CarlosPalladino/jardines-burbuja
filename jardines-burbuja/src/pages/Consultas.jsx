import React from 'react'
import Footer from '../includes/Footer'
import "../../public/styles/Consultas.css"

import BurguerButton from '../components/burguerButtom'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { consultas } from "../services/Consultas"
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
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
      <NavContainer>
          <Link to="/">< img src="/burbuja.svg" className='logo' href="/" /> </Link>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="./Incripcion">Incrcipcion</a>
        </div>
      </NavContainer>
      <Main>
        <div className={`form ${clicked ? 'active' : ''}`}>
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
            <textarea id='relleno' cols="30" rows="8" borde-radius="10px" onChange={seting}
              name="mensaje"{...register("mensaje", {
                minLength: 2,
                maxLength: 30,
                message: "el campo no puede estar vacio",
                required: "este campo es obligatorio",
              })}
            ></textarea>
            <p>{errors.mensaje?.message}</p>
            <section className='buton'>
              <button type="reset">Cancelar</button>

              <button type='submit'>Enviar</button>

            </section>
          </form>
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </Main>

      <Footer />
    </>
  )
}