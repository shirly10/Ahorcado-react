import { useEffect, useReducer } from "react";
import "../Styles/Config.css";

function configHandler(estadoAnterior, accion) {

    const estado = {...estadoAnterior};

    if(accion == "menu") {
        estado.menu = !estadoAnterior.menu
        estado.case = false
    }

    if (accion == "case") {
        estado.case = !estadoAnterior.case
    }

    return estado;
}

// function partidoHandler(puntajeAnterior, puntoPaQuien) {
//     const estado = { ...puntajeAnterior };

//     if (puntoPaQuien === "equipo1") {
//         estado.equipo1 += 1;
//     }

//     if (puntoPaQuien === "equipo2") {
//         estado.equipo2 += 1;
//     }

//     if (puntoPaQuien === "reiniciar") {
//         estado.equipo1 = 0;
//         estado.equipo2 = 0;
//     }

//     return estado;
// }

function capitalHandler(estadoAnterior, accion) {

    const estado = {...estadoAnterior};

    if(accion == "Mayus") {
        estado.liAA = true;
        estado.liAa = false;
        estado.liaa = false;
        estado.valor = "AA";
    }

    if (accion == "None") {
        estado.liAA = false;
        estado.liAa = true;
        estado.liaa = false;
        estado.valor = "Aa";
    }

    if (accion == "Minus") {
        estado.liAA = false;
        estado.liAa = false;
        estado.liaa = true;
        estado.valor = "aa";
    }

    return estado;
}

function Config({mensajero}) {

    const [config, setConfig] = useReducer(configHandler, {menu: false, case: false});

    // const [partido, setPartido] = useReducer(partidoHandler, { equipo1: 0, equipo2: 0 })

    const [capital, setCapital] = useReducer(capitalHandler, {valor: "Aa", liAA: false, liAa: true, liaa: false});

    useEffect(() => {
        mensajero(capital.valor);
    }, [capital]);

    return (
        <>
        <div className="Config">
            <img src="/icons/gear-wide-connected.svg" alt="" onClick={() => setConfig( "menu" )} style={{ transform: `rotate(${config.menu ? "90" : "0"}deg ` }} />
            <div className="case-type" style={{transform: `translateX(${config.menu ? "0" : "110"}%)`}}>
                
                <span onClick={() => setConfig( "case" )} style={{ cursor: "pointer" }}>Case: </span>
                <ul style={{overflow: config.case ? "visible" : "hidden"}}>
                    <li className={capital.liAA ? "selected" : ""} onClick={() => setCapital("Mayus")}>AA</li>
                    <li className={capital.liAa ? "selected" : ""} onClick={() => setCapital("None")}>Aa</li>
                    <li className={capital.liaa ? "selected" : ""} onClick={() => setCapital("Minus")}>aa</li>
                </ul>
            </div>
            
            {/* <div className="marcador">
                <h2>Equipo 1: {partido.equipo1}</h2>
                <h2>Equipo 2: {partido.equipo2}</h2>
                
                <div className="botones-equipos">
                    <button onClick={() => setPartido("equipo1")}>+1 Equipo 1</button>
                    <button onClick={() => setPartido("equipo2")}>+1 Equipo 2</button>
                </div>
                
                <button onClick={() => setPartido("reiniciar")}>Reiniciar</button>
            </div> */}
        </div>
        </>
    )
}

export default Config;