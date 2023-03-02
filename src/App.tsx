import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'Ver el video de Midu en Twitch',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender React con TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Sacar ticket de la miduFest',
    completed: false
  },
  {
    id: '4',
    title: 'Descansar 5 minutos',
    completed: false
  },
  {
    id: '5',
    title: 'Tomar agua durante los 20 minutos de descanso',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)

  return (
    <div className="todoapp">
      <Todos todos={todos}/>
    </div>
  )
}

export default App
