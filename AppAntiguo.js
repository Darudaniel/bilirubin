import './assets/styles/App.css';
import Form from './components/Form'
import Results from './components/Results'

import { useSelector, useDispatch } from 'react-redux'
import { setValues } from './redux/actions'

function App() {
  // return (
  //   <div className="App">
      
  //     <Form />
  //     <Results />
  //   </div>
  // );
  const result = useSelector(state => state.result)
  const dispatcher = useDispatch()
  const setData = dispatcher(setValues())

  return (
    <div>
      <h1>{`hola ${result.name}`}</h1>
      <button 
        className="calc-button" 
        type="button" 
        id="botonCalcular"
        // onClick={() => setData}
        onClick={() => {
            setData();
            console.log(result)
          }
        }
      >Calcular</button>
    </div>
  )
}

export default App;
