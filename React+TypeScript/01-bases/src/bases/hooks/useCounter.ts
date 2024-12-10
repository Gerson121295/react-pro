import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";


export const useCounter = ({maxCount = 10}) => {

    const [counter, setCounter] = useState(7);

    //useRef para mantener la referencia de un elemento, la referencia la guarda en: elementToAnimate
    const elementToAnimate = useRef<any>(null); //al poner el mouse en ref del h2, define el tipo: 'RefObject<HTMLHeadingElement>'. any para cualquier elemento

    //timeline para animaciones gsap. se crea 1 vez y almacena la referencia en memoria 
    const tl = useRef(gsap.timeline());

    const handleClick = ()=> {
       setCounter(prev => Math.min(prev + 1, maxCount));
      }

      //useLayoutEffect se asegura que ya esten construida los elementos html 
      useLayoutEffect(() => {
        //console.log(elementToAnimate.current);
        if(!elementToAnimate.current) return;

        //elementToAnimate.current tiene la referencia del h2 a aplicar la animacion
      tl.current.to(elementToAnimate.current, {y:-10, duration: 0.2, ease:'ease.out'}) //current accede a la referencia actual
                .to(elementToAnimate.current, {y: 0, duration: 1, ease:'bounce.out'})
                .pause()
      }, []) //dependencia vacia [], solo se ejecutará una vez

  
    useEffect(() => {
      //funcion a ejecutar
      if(counter < maxCount) return; //animacions salta cuando llegue al valor maximo
      tl.current.play(0);
    }, [counter]) //se ejecuta la funcion mientras se cumpla la dependencia.


    //func o valores a retornar
    return {
        counter,
        elementToAnimate, //animationElement: elementToAnimate,  //animationElement es el nombre que se podria agregar a elementToAnimate 
        handleClick,
    }
}


