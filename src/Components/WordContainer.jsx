import { useEffect } from "react";
import "../Styles/WordContainer.css";
import Keyboard from "./Keyboard";
import TecladoAhorcado from "./TecladoAhorcado";
import Word from "./Word";

function WordContainer({configApp}) {

    useEffect(() => {
        console.log(configApp);
    }, [configApp]);

    return (
        <div className="wordContainer">
            <Word configWordContainer={configApp} />
            <Keyboard />
        </div>
    )
}

export default WordContainer;