import React from 'react'
import Footer from '../includes/Footer'
import Navbar from '../includes/Header'
import "../../public/styles/Inscripcion.css"
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { incription } from "../services/incription"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default function Incripcion() {
  const [body, setBody] = useState({ nombre0: null, apellido0: null, email: null, telefono: null, nombre1: null, apellido1: null, turno: null })
  const seting = e => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (e) => {
    try {
      let result = await incription(body)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
    if (body) {
      MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'Inscripción correcta',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  return (
    <>
      <Navbar >
        <div>  
    
             <Link to ="./Consultas">Consultas</Link>
        </div>
      </Navbar>
      <section>
        <form className="forms" onSubmit={handleSubmit((onSubmit))}>
          <label className="names">Nombre</label>
          <input type="text" id="relleno" name="nombre0" onChange={seting}
            {...register("nombre", {
              required: "este campo es obligatorio",
              minLength: 2,
              message: "minimo dos letras"
            })}
          />
          <p>{errors.nombre?.message}</p>

          <label className="names">Apellido</label>
          <input type="text" id="relleno" name="apellido0" onChange={seting}
            {...register("apellido", {
              required: "este campo es obligatorio",
              minLength: 2,
              message: "minimo 2 letras"
            })}
          />
          <p>{errors.apellido?.message}</p>

          <label className="names" >Email</label>
          <input type="text" id="relleno" name="email" onChange={seting}
            {...register("email", {
              minLength: 2,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "no es un  valido"
            })} />
          <p>{errors.email?.message}</p>

          <label className="names" >Telefono</label>
          <input type="number" id="relleno" name="telefono" onChange={seting}
            {...register("telefono", {
              required: "este campo es obligatorio",
            })}
          />
          <h2>Hijos</h2>
          <label className="names">Nombre</label>
          <input type="text" id="relleno" name="nombre1" onChange={seting}
            {...register("nombre", {
              required: "este campo es obligatorio",
              minLength: 2,
              message: "minimo dos letras"
            })}
          />
          <p>{errors.nombre?.message}</p>

          <label className="names">Apellido</label>
          <input type="text" id="relleno" name="apellido1" onChange={seting}
            {...register("apellido", {
              required: "este campo es obligatorio",
              minLength: 2,
              message: "minimo 2 letras"
            })}
          />
          <p>{errors.apellido?.message}</p>

          <label className="names">turno</label>
          <input type="text" id="relleno" name="turno" onChange={seting}
            {...register("turno", {
              required: "este campo es obligatorio",
              minLength: 2,
              message: "minimo 2 letras"
            })}
          />
          <p>{errors.turno?.message}</p>
          <input type="hidden" name="_autoresponse" value="Gracias por Inscribirte ! a la brevedad nos contactaremos" />

          <section className="button" >
            <button type="reset">Cancelar</button>
            <button type="submit">Enviar</button>
          </section>
        </form>
      </section>
      <Footer />
    </>
  )
}