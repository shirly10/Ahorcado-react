import { useRef } from "react";
import { useState } from "react";

function Foco() {

    const [light, setLight] = useState(false);

    const referenciaFoto = useRef();
    const referenciaBoton = useRef();

    const lightHandler = () => {

        const encendido = !light;
        
        if (encendido) {
            referenciaFoto.current.src = "/public/focoon.png";
            referenciaBoton.current.textContent = "Apagar";
        } else {
            referenciaFoto.current.src = "/public/focooff.png";
            referenciaBoton.current.textContent = "Encender";
        }
        setLight(encendido);
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
            <div>
                <img ref={referenciaFoto} src="/public/focooff.png" alt="Foco" />
                <button ref={referenciaBoton} onClick={lightHandler}>Encender</button>
            </div>
        </div>    
    );
}

export default Foco;