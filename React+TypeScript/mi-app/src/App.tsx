import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />

      <h2>useState</h2>
      <Counter />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre/>

      <h2>useReducer</h2>
      <hr />
      <ContadorRed />

      <h2>useCustomHooks</h2>
      <hr />
      <Formulario />

      <br />
      <br />
  
      <h2>useCustomHooks Form 2</h2>
      <hr />
      <Formulario2 />

      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );
}

export default App;
