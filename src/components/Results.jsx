import restarHoras from '../functions/restarHoras'

const Results = (props) => {
  const data = props.data
  const observacion = 'El paciente debe permanecer en observacion'

  let hoy = new Date()
  let horeroInicial = hoy.getHours()
  let minuteroInicial = hoy.getMinutes()
  let horaInicial = `${horeroInicial}:${minuteroInicial}`
  let horaFinal = data.horaExamen

  let tiempoTranscurrido = () => {
    restarHoras(horaInicial, horaFinal)
  }

  let result

  if (
         data.pesoAlNacer > 2500     
      && data.edadGestacional > 37   
      && data.bilirrubinaTotal < 11
      ){
    result = observacion
  }
  console.log(tiempoTranscurrido)
  // switch (data.hola, data.pesoAlNacer) {
  //   case 'hola', '4':
  //     console.log('logrado')
  //     result = observacion
  //     break
  //   default:
  //     console.log('default')
  //     result = 'default'
  //     break
  // }
  return (
    <h1>{result}</h1>
  )
}

export default Results