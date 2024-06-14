import React from 'react'
const Checkout = () => {

    return (
        <div class="container">
            <form onSubmit={handleSudmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="text" 
                    class="form-control"
                    placeholder="Enter nombre"
                    valuen
                      />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">correo</label>
                    <input type="email" 
                    class="form-control" 
                     placeholder="Enter email"/>
                </div>
                
                <button type="button" class="btn btn-outline-warning">Enviar</button>
            </form>

        </div>
    )
}

export default Checkout