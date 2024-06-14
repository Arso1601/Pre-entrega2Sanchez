import React from 'react'

const Contacto = () => {

    

  return (

    <div class="container">
        <h1 >Contacto</h1>
        <form class="formulario" >

            <input type="text" placeholder="Ingresá tu nombre"  />
            <input type="email" placeholder="Ingresá tu e-mail"  />
            <input type="phone" placeholder="Ingresá tu teléfono"  />

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>

  )
}

export default Contacto