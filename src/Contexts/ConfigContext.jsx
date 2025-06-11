import { createContext, useState, useRef } from 'react';
import GanarPerder from '../Components/GanarPerder';

export const ConfigContext = createContext();

function ConfigContextComponent({children}) {

  const [palabra, setPalabra] = useState("");
  const [letras, setLetras] = useState("");

  const [banco, setBanco] = useState(0);
  const refAudio = useRef();

  const chairHandler = () => {
    setBanco(banco + 10);
    refAudio.current.play();

    if(banco >= 100) {
      setBanco(0);
    }
  }

  const resetHandler = () => {
    setBanco(0);
    setPalabra("");
    setLetras("");
  }
  
  return (
    <ConfigContext.Provider value={{palabra, setPalabra, letras, setLetras, banco, chairHandler, setBanco, resetHandler}}>
      <GanarPerder />
      {children}
      <audio ref={refAudio} src="/sounds/bone.mp3"></audio>
    </ConfigContext.Provider>
  )
}

export default ConfigContextComponent;