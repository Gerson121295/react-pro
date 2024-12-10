import gsap from "gsap";
import { useEffect, useRef, useState } from "react"

const MAXIMUN_COUNT = 10;



export const CounterEffect = () => {  //con :Props se define el tipo de dato que se recibe en las props proveniente del padre

    const [counter, setCounter] = useState(7);

    //useRef para mantener la referencia de un elemento, la referencia la guarda en: counterElement
    const counterElement = useRef<HTMLHeadingElement>(null); //al poner el mouse en ref del h2, define el tipo: 'RefObject<HTMLHeadingElement>'


    const handleClick = ()=> {
       setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
      }
  
/* 
    useEffect(() => {
      //funcion a ejecutar
     console.log('useEfect')
    }, [counter]) //se ejecuta la funcion mientras se cumpla la dependencia cada vez que counter
 */

    useEffect(() => {
      //funcion a ejecutar
      if(counter < 10 ) return;
     console.log('%cse llego al valor maximo','color: red; background-color: black;')

     //timeline para animaciones gsap
     //counterElement.current tiene la referencia del h2 a aplicar la animacion
      const tl = gsap.timeline();
      tl.to(counterElement.current, {y:-10, duration: 0.2, ease:'ease.out'})
      .to(counterElement.current, {y: 0, duration: 1, ease:'bounce.out'})
      
    }, [counter]) //se ejecuta la funcion mientras se cumpla la dependencia.



  return (
    
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterElement}>{counter}</h2> {/* ref conecta el useRef para la referencia del elemento */}

      <button 
        onClick={handleClick}
      >
        +1
      </button>
    </>
  )
}


