import { useEffect, useState, useCallback  } from 'react'
import Item from './components/Item'


const options = [
  { id: 0, name: 'piedra', beats: [2], emoji: '✊', title: 'Piedra' },
  { id: 1, name: 'papel', beats: [0], emoji: '✋', title: 'Papel' },
  { id: 2, name: 'tijera', beats: [1], emoji: '✌️', title: 'Tijera' },
]

function Ppt() {
  const [disable, setDisable] = useState(false)
  const [userChoice, setuserChoice] = useState(null)
  const [cpuChoice, setcpuChoice] = useState(null)
  const [result, setresult] = useState(null)
  const [userMessage, setuserMessage] = useState(null)
  const [cpuMessage, setcpuMessage] = useState(null)

  useEffect(() => {
    userChoice !== null && setuserMessage(`Elegiste ${options[userChoice].name} ${options[userChoice].emoji}`)

  }, [userChoice])

  useEffect(() => {
    cpuChoice !== null && setcpuMessage(`La máquina eligió ${options[cpuChoice].name} ${options[cpuChoice].emoji}`	)
  }, [cpuChoice])

// Las funciones son objetos en JavaScript, y cuando se declaran dentro de un componente, 
// su referencia cambia en cada render. Si una función se pasa como prop a un hijo, 
// React puede considerar que las props han cambiado, provocando un nuevo render del hijo.
// Solución: Usa useCallback para memoizar funciones.

  const resetGame = useCallback(() => {
    setuserChoice(null)
    setcpuChoice(null)
    setresult(null)
    setuserMessage(null)
    setcpuMessage(null)
    setDisable(false)
  }, [])
  
  

  const getResult = useCallback((user, cpu) => {
    if (user === cpu) {
      setresult(0)
    } else if (options[user].beats.includes(cpu)) {
      setresult(1)
    } else {
      setresult(2)
    }
  }, [])
  
  const handleClick = useCallback((id) => {
    setDisable(true)
    console.log(id)
    setuserChoice(id)
    
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)
    setTimeout(() => {
      setcpuChoice(randomNumber)
      
    }, 1500)

    setTimeout(() => {
      getResult(id, randomNumber)
    }, 3000)

  }, [getResult])

  return (
    <>
      <div className='container'>
        
          <h2>Piedra, papel o tijera</h2> 
          <p>Seleccione:</p> 
          <div className='items'>
            {options.map((option) => (
              <Item key={option.id} id={option.id} name={option.name} title ={option.title} emoji={option.emoji} disable={disable} handleClick={handleClick}/>
              
            ))}
          </div>
          {userChoice !== null && <p>{userMessage}</p>}
          {cpuChoice !== null && <p>{cpuMessage}</p>}
          {result !== null && <h2>{result === 0 ? '🎃 Empate' : result === 1 ? '✅ Ganaste' : '⛔ Perdiste'}</h2>}
          {result !== null && <button onClick={resetGame}>Reiniciar</button>}

      </div>

    </>
  )
}

export default Ppt
