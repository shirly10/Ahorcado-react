import { useEffect, useState } from "react";
import "../Styles/Word.css";

// const letras = "";
// const palabra = "marianna y yo";

function Word() {

    const [letras, setLetras] = useState("hola");
    const [palabra, setPalabra] = useState("hola buenas");
    const [juego, setJuego] = useState([]);

    useEffect(() => {
        const estructura = palabra.split("").map((Letra)=>{
            const letraMinuscula = Letra.toLowerCase();
            return {
                letra: letraMinuscula,
                conseguida: letraMinuscula === " " || letras.includes(letraMinuscula)
            };
        });
        setJuego(estructura);
    }, [letras, palabra]);

    return(
        <ol>
            {juego.map((obj, index)=>{
                return (
                    <li key={index}
                    className={obj.letra === " " ? "espacio" : "letra"}
                    >
                    {/* {obj.conseguida ? obj.letra : "_"} */}
                    {/* {obj.conseguida ? (obj.letra === " " ? "\u00A0" : obj.letra) : "_"} */}
                    {/* {obj.conseguida ? (obj.letra === " " ? " " : obj.letra) : "_"} */}
                    {obj.conseguida && obj.letra !== " " ? obj.letra : ""}
                    </li>
                )    
            })}
        </ol>
    )
}

export default Word;