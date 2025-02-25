import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setImc] = useState(null)

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum || alturaNum <= 0) {
      setImc(null);
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalculado);
  }

  const classificarIMC = (imc) => {
    return imc < 18.5 ? "Abaixo do peso" :
      imc < 24.9 ? "Peso normal" :
        imc < 29.9 ? "Sobrepeso" :
          imc < 34.9 ? "Obesidade Grau I" :
            imc < 39.9 ? "Obesidade Grau II" :
              "Obesidade Grau III";
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de IMC</h1>
        <form>
          <label>Peso</label>
          <input
            type="number"
            placeholder="Peso (kg)"
            aria-label='Peso em quilogramas'
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <input
            type="number"
            placeholder="Altura (m)"
            aria-label='Altura em metros'
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <button onClick={calcularIMC}>Calcular</button>
        </form>
        <div className="resultado">
          <p>IMC: {imc !== null ? imc.toFixed(2) : ""}</p>
          <p>{imc !== null ? classificarIMC(imc) : ""}</p>
        </div>
      </header>
    </div>
  )
}

export default App
