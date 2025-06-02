import { useState } from 'react';
import Tecla from './Tecla.jsx';
import "./Teclado.css";

const estilo = {
    div: {gap: "10px", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"},
    span: {backgroundColor: "gray", padding: "10px", borderRadius: "10px", color: "black", minHeight: "24px", width: "100%", maxWidth: "480px"},
    button: {width: "40px", aspectRatio: "1", backgroundColor: "darkblue", border: "2px solid white", borderRadius: "5px", color: "white"}
}

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function Teclado() {

    const [palabra, setPalabra] = useState("");

    const textHandler = (letra) => {
        const consulta = /[a-zA-Z]/.test(letra);
        if (!consulta) {
            const longitud = palabra.length;
            const ultimoBorrado = palabra.slice(0, longitud - 1);
            setPalabra(ultimoBorrado);
            return;
        }
        setPalabra(palabra + letra);
    }

    // const textHandlerDelete = () => {
    //     const longitud = palabra.length;
    //     const ultimoBorrado = palabra.slice(0, longitud - 1);
    //     setPalabra(ultimoBorrado);
    // }

    return (
        <div style={estilo.div}>
            <span style={estilo.span}>{palabra}</span>

            <div className="ordenar">
                {letras.map((letra, posicion) => {
                    return <Tecla tecleo={textHandler} key={posicion}>{letra}</Tecla>
                })}
                <Tecla tecleo={textHandler}>&#9003;</Tecla>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Teclado;