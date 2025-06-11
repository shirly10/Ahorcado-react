import { useState, useReducer, useRef, useContext } from "react";
import { ConfigContext } from "../Contexts/ConfigContext";
import "../Styles/Menu.css";

const menuViewInicial = {
    vistaActual: 0,
    nuevoJuego: true,
    nuevaFrase: false,
    pausa: false
}

function menuViewHandler(estado, accion) {
    const nuevoEstado = {...estado};

    switch (accion) {
        case 0:
            nuevoEstado.vistaActual = 0;
            nuevoEstado.nuevoJuego = true;
            nuevoEstado.nuevaFrase = false;
            nuevoEstado.pausa = false;
            return nuevoEstado;
        case 1:
            nuevoEstado.vistaActual = 1;
            nuevoEstado.nuevoJuego = false;
            nuevoEstado.nuevaFrase = true;
            nuevoEstado.pausa = false;
            return nuevoEstado;
        case 2: 
            nuevoEstado.vistaActual = 2;
            nuevoEstado.nuevoJuego = false;
            nuevoEstado.nuevaFrase = false;
            nuevoEstado.pausa = true;
            return nuevoEstado;
        
        case 3:
        default:
            return nuevoEstado;
    }
}

function Menu() {

    const [menuView, setMenuView] = useReducer(menuViewHandler, menuViewInicial);

    const {setPalabra, setBanco, resetHandler, setLetras} = useContext(ConfigContext);

    const refFrase = useRef();

    const fraseHandler = (e) => {
        e.preventDefault();
        if (refFrase.current.value.trim() == "") {
            return alert("La frase no puede estar vacía");
        }
        if (!/[a-zA-Z]/.test(refFrase.current.value) ) {
            return alert("La frase no puede estar vacía");
        }

        const frase = refFrase.current.value.trim().replaceAll("<","&#60;").replaceAll(">","&#62;"); 

        setBanco(0);
        setMenuView(2);
        setLetras("");
        setMenu(false);
        setPalabra(frase);
    }

    const [menu, setMenu] = useState(true);

    return (
        <div className="Menu" style={
            {
                backgroundColor: menu ? "rgba(255, 255, 255, 0.7)" : "transparent",
                backdropFilter: `blur(${menu ? "5px" : "0px"})`,
                width: `${menu ? 100 : 0}%`,
                height: `${menu ? 100 : 0}%`,
        }}>

            { menuView.pausa && !menu &&
            <img src="/icons/menu.svg" alt="Menu" onClick={() => setMenu(!menu)} /> }

            {menu && <>
            <p>El <span>A</span>horcado</p>

            { menuView.nuevoJuego && 
            <button type="button" onClick={() => setMenuView(1)}>
                Nuevo Juego
            </button> }

            { menuView.nuevaFrase && <form onSubmit={fraseHandler}>
                <textarea placeholder="Frase secreta" ref={refFrase} required></textarea>
                <div className="Separador">
                    <button type="button" onClick={() => setMenuView(0)}>Cancelar</button>
                    <button type="submit">Empezar</button>
                </div>
            </form> }

            { menuView.pausa && <> 
                <button type="button" onClick={() => setMenu(!menu)}>Continuar</button>
                <button type="button" onClick={() => { setMenu(true); setMenuView(1);}}>Reiniciar</button>
                <button type="button" onClick={() => {
                    const confirmar = confirm("¿Estás seguro que quieres salir del juego?");
                    if (confirmar) {
                        setMenu(true);
                        setMenuView(0);
                        setBanco(0);
                        setPalabra("");
                        setLetras("");
                        resetHandler();
                    }
                }}>Salir</button>
            </> }

            </> }

        </div>
    )
}

export default Menu;