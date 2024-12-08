import { useEffect, useRef, useState } from "react";

type TimerArgs = {
    milisegundos: number
}

export const Timer = ( {milisegundos}: TimerArgs) => { //(args : TimerArgs)  - con desestructuracion  {milisegundos}

    const [segundos, setSegundos] = useState(0);
    //console.log(milisegundos);  //console.log(args.milisegundos);

    //const ref = useRef<NodeJS.Timeout>();
    const ref = useRef<NodeJS.Timer>();

    useEffect ( () => {
        ref.current && clearInterval(ref.current); //si ref.current existe ejecuta clearInterval. cada vez que cambie el argumento en este useEffect se va a limpiar el cleanInterval
        console.log('useEffect');
        ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos); //func. se ejecuta cada segundo
    }, [milisegundos])
    
  return (
    <>
        <h4>Timer: <small>{segundos}</small></h4> 
    </>
  )
}


