import { useRef } from "react";
import "../Styles/TecladoAhorcado.css"

function TecladoAhorcado({children, tecleo}) {

    const refBoton = useRef();

    const manejarBoton = () => {
        tecleo(children);
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