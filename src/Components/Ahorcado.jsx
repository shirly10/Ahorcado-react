import { useRef, useState, useContext } from "react";
import { ConfigContext } from "../Contexts/ConfigContext";
import "../Styles/Ahorcado.css";

function Ahorcado() {


    const refBanco = useRef();
    const {banco, chairHandler} = useContext(ConfigContext);


    return (
        <>
        <div className="Ahorcado">
            <div className="Personaje">
                <div className="Foto"></div>
                <img ref={refBanco} style={{right: `calc(20% + ${banco}%)`}} className="Banco" src="/public/chair.png" alt="Banco" />
            </div>
        </div>
        <button onClick={chairHandler}>Rodar {banco}</button>
        </>
    )
}

export default Ahorcado;