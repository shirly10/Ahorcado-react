import { useContext, useEffect, useState } from "react";
import "../Styles/Word.css";
import { ConfigContext } from "../Contexts/ConfigContext";

function Word({configWordContainer}) {

    const {palabra, letras} = useContext(ConfigContext);

    const [juego, setJuego] = useState([]);

    useEffect(() => {
        const estructura = palabra.split("").map((Letra)=>{
            return {
                letra: Letra,
                conseguida: !/[a-zA-Z]/.test((Letra)) || letras.toLowerCase()
                .includes(Letra.toLowerCase())
            };
        });
        setJuego(estructura);
        console.log(configWordContainer);
    }, [configWordContainer, letras, palabra]);

    return(
        <ol className="letra" style={{textTransform: configWordContainer == "AA" ? "uppercase" : configWordContainer == "aa" ? "lowercase" : "none"}}>
            {juego.map((obj, index)=>{
                return (
                    /[a-zA-Z]/.test(obj.letra) ?
                    <li key={index}>
                        {obj.conseguida ? obj.letra : "\u00A0"}
                    </li>
                :
                    obj.conseguida == " " ?
                        "\u00A0\u00A0\u00A0\u00A0"
                    :
                        <li key={index} style={{border: "none"}}>
                            {obj.letra}
                        </li>
                )    
            })}
        </ol>
    )
}

export default Word;