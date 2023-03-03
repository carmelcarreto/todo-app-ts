import { useState } from 'react'
import Footer from './components/Footer'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './consts'
import { type TodoId, type Todo as TodoType, type FilterValue } from './types'

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
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
        />
        <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        handleFilterChange={handleFilterChange}
        />
    </div>
  )
}

export default App
