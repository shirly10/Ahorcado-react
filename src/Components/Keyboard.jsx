import "../Styles/Keyboard.css";
import TecladoAhorcado from './TecladoAhorcado.jsx';

const teclas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function Keyboard() {

    const textHandler = (letra) => {
        alert(`Presionaste la tecla ${letra}`);
    }


    return(
        <div className="Teclado">
            {teclas.map((letra, index) => {
                return <TecladoAhorcado tecleo={textHandler} key={index}>{letra}</TecladoAhorcado>
            })}
            {["sp1", "sp2", "sp3", "sp4"].map((sp, index)=> {
                return <span style={{gridArea: sp}} key={index}></span>
            })}
        </div>
    )
}

export default Keyboard;