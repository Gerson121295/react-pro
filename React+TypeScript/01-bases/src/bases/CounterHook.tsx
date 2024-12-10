import { useCounter } from "./hooks/useCounter";

export const CounterHook = () => {  //con :Props se define el tipo de dato que se recibe en las props proveniente del padre

  //obtiene los datos del customHook
  const {counter, elementToAnimate, handleClick} = useCounter({maxCount:15});

  return (
    
    <>
      <h1>CounterHook: </h1>
      <h2 ref={elementToAnimate}>{counter}</h2> {/* ref conecta el useRef para la referencia del elemento */}

      <button 
        onClick={handleClick}
      >
        +1
      </button>
    </>
  )
}


