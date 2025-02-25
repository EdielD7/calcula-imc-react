import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [imc, setImc] = useState(0)

  const calcularIMC = () => {
    const alturaMetros = altura / 100
    const imc = peso / (alturaMetros * alturaMetros)
    setImc(imc)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de IMC</h1>
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
        <p>IMC: {imc.toFixed(2)}</p>
      </header>
    </div>
  )
}

export default App
