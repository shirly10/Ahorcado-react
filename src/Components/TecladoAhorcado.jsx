import { useRef, useContext, useEffect } from "react";
import "../Styles/TecladoAhorcado.css"
import { ConfigContext } from "../Contexts/ConfigContext";

function TecladoAhorcado({children}) {

    const {letras, setLetras, palabra, chairHandler} = useContext(ConfigContext);

    useEffect(() => {
        if(!letras) {
            refBoton.current.removeAttribute("disabled");
        }
    }, [letras]);

    const refBoton = useRef();

    const manejarBoton = () => {
        setLetras(letras + children);

        if(!palabra.toLowerCase().includes(String(children).toLowerCase())) {
            chairHandler();
        }


        refBoton.current.setAttribute("disabled", true);
    }

    return(
        <button type="button" 
        ref={refBoton}
        className="Tecla"
        style={{
            gridArea: children.toLowerCase()
        }}
        onClick={manejarBoton}>
            {children}
        </button>
    )
}

export default TecladoAhorcado;