import './assets/styles/App.css';
import { useState } from 'react'
import Results from './components/Results'

const App = () => {
  const [data, setData] = useState({
    hola: 'hola',
    fechaDeNacimiento: '',
    pesoALNacer: '',
    edadGestacional: '',
    bilirrubinaTotal: '',
    horaExamen: 0,
    checkboxMalEstado: '',    
  })
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  const handleChangeNumber = (event) => {
    setData({
      ...data,
      [event.target.name]: parseFloat(event.target.value)
    })
  }
  const handleClick = () => {
    console.log(data)
  }
  return (
    <div>
      <form action="" method="">
        <ul className="form">
          <li>
            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label> <br></br>
            <input 
              id="fechaNacimiento" 
              className="inputs" 
              type="datetime-local" 
              name="fechaNacimiento"
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="pesoAlNacer">Peso al nacer</label> <br></br>
            <input 
              id="pesoAlNacer" 
              className="inputs" 
              type="text" 
              inputMode="numeric" 
              name="pesoAlNacer" 
              onChange={handleChangeNumber}
            />
          </li>
          <li>
            <label htmlFor="edadGestacional">Edad Gestacional</label> <br></br>
            <input 
              id="edadGestacional" 
              className="inputs" 
              type="text"
              inputMode="numeric" 
              name="edadGestacional"
              onChange={handleChangeNumber}
            />
          </li>           
          <li>
            <label htmlFor="bilirrubinaTotal">Bilirrubina total</label> <br></br>
            <input 
              id="bilirrubinaTotal" 
              className="inputs" 
              type="text" 
              inputMode="numeric" 
              name="bilirrubinaTotal" 
              onChange={handleChangeNumber}
            />
          </li>        
          <li>
            <label htmlFor="horaExamen">Hora del examen</label> <br></br>
            <input 
              id="horaExamen" 
              className="inputs" 
              type="time"
              name="horaExamen" 
              onChange={handleChange}
            />
          </li>        
                  
          <li  className="checkboxMalEstado">          
            <input type="checkbox" id="mal-estado" name="mal-estado" />
            <label htmlFor="mal-estado">Mal estado general</label> 
          </li>        
          <li className="button-container">
            <button 
              className="calc-button" 
              type="button" 
              id="botonCalcular"
              onClick={handleClick}
            >
              Calcular
            </button>
          </li>        
        </ul>
      </form>
      <Results data={data} />
    </div>
  )
}

export default App;
