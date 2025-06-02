import React from 'react'
import { useRef } from 'react'

function Formulario() {

    const nombreRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const handlerSubmit = (e) => {
        e.preventDefault()
        const nombre = nombreRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        alert(`Sus datos han sido guardados y son: \nNombre: ${nombre}\nEmail: ${email}\nContraseña: ${password}`)
    }

    return (
        <form onSubmit={handlerSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" ref={nombreRef} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" ref={emailRef} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" ref={passwordRef} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Formulario;