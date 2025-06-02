import "../Styles/WordContainer.css";
import Keyboard from "./Keyboard";
import TecladoAhorcado from "./TecladoAhorcado";
import Word from "./Word";

function WordContainer() {

    return (
        <div className="wordContainer">
            <Word />
            <Keyboard />
        </div>
    )
}

export default WordContainer;