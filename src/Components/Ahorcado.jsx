import { useRef, useState } from "react";
import Keyboard from "./Keyboard";
import "../Styles/Ahorcado.css";

function Ahorcado() {
    const [banco, setbanco] = useState(0);
    const [botonDesactivado, setBotonDesactivado] = useState(false);

    const refBanco = useRef();
    const refAudio = useRef();

    const chairHandler = () => {
        if(banco < 36) {
            setbanco(banco + 4);
        }
        if(banco >= 32){
            refAudio.current.currentTime = 0.7;
            refAudio.current.play();
        }
    }

    const handleTeclaPresionada = () => {
        setBotonDesactivado(true);
    };

    return (
        <>
        <div className="Ahorcado">
            <div className="Personaje">
                <div className="Foto"></div>
                <img ref={refBanco} style={{right: `calc(20% + ${banco}%)`}} className="Banco" src="/public/chair.png" alt="Banco" />
            </div>
            <audio ref={refAudio} src="/sounds/bone.mp3"></audio>
        </div>
        {/* <button onClick={chairHandler}  disabled={botonDesactivado}>Rodar {banco}</button> */}
        {/* <Keyboard onClick={handleTeclaPresionada} /> */}
        </>
    )
}

export default Ahorcado;