import '../assets/styles/components/Form.css'

const Form = () => {
  return (
    <form action="" method="">
      <ul className="form">
        <li>
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label> <br></br>
          <input 
            id="fechaNacimiento" 
            className="inputs" 
            type="datetime-local" 
            name="fechaNacimiento" 
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
          />
        </li>           
        <li>
          <label htmlFor="bilirrubinaTotal">Bilirrubina total</label> <br></br>
          <input 
            id="bilirrubinaTotal" 
            className="inputs" 
            type="text" 
            inputMode="numeric" 
            name="bilirrubinaTotal" />
        </li>        
        <li>
          <label htmlFor="horaExamen">Hora del examen</label> <br></br>
          <input 
            id="horaExamen" 
            className="inputs" 
            type="time"
            name="horaExamen" 
          />
        </li>        
                
        <li  className="checkboxMalEstado">          
          <input type="checkbox" id="mal-estado" name="mal-estado" />
          <label htmlFor="mal-estado">Mal estado general</label> 
        </li>        
        <li className="button-container">
          <button className="calc-button" type="button" id="botonCalcular">Calcular</button>
        </li>        
      </ul>
    </form>
  )
}

export default Form