import "./App.css";
import React, { useState } from "react";

function App() {
  const [rendimento, setRendimento] = useState(undefined);
  const [distancia, setDistancia] = useState(undefined);
  const [preco, setPreco] = useState(undefined);
  const [imprevistos, setImprevistos] = useState(false);
  const [ida_e_volta, setIda_e_volta] = useState(false);

  function retornaPreco() {
    let resultado = (distancia / rendimento) * preco ;

    if (resultado) {
      if(imprevistos){
        resultado = resultado*1.3;
      }

      if(ida_e_volta){
        resultado = resultado*2.0;
      }
      
      return <h3>${resultado.toFixed(2)}</h3>;
    } else {
      return <p>Por Favor, insira todos os valores acima.</p>;
    }
  }

  return (
    <div className="App">
      <section>
        <img src={process.env.PUBLIC_URL+"/fuel.png"} className="car-driving" />
        <header><h3>Calcule o custo da sua viagem de carro</h3></header>
        <p>Rendimento do carro</p>
        <input
          placeholder="Km/l"
          type="number"
          onChange={(e) => {
            setRendimento(e.target.value);
          }}
        ></input>
        <p>Distância a ser percorrida</p>
        <input
          placeholder="Km"
          type="number"
          onChange={(e) => {
            setDistancia(e.target.value);
          }}
        ></input>
        <p>Preço do combustível</p>
        <input
          placeholder="$"
          type="number"
          onChange={(e) => {
            setPreco(e.target.value);
          }}
        ></input>

        <div className="imprevistos">
          <p>Incluir imprevistos</p>
          <input
            type="checkbox"
            onChange={(e) => {
              console.log(e.target.checked);
              setImprevistos(e.target.checked);
            }}
          ></input>
        </div>

        <div className="imprevistos">
          <p>Ida e volta</p>
          <input
            type="checkbox"
            onChange={(e) => {
              setIda_e_volta(e.target.checked);
            }}
          ></input>
        </div>

        <h3>Valor gasto</h3>
        {retornaPreco()}
      </section>
    </div>
  );
}

export default App;
