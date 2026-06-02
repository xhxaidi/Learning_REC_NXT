import { useState } from 'react'
import QueueForm from './components/QueueForm'
import QueueDisplay from './components/QueueDisplay'
import './App.css'

export interface Customer {
  id: number
  name: string
  service: string
  status: string
}

export type NewCustomer = Pick<Customer, 'name' | 'service'>

const App = () => {
  const [queue, setQueue] = useState<Customer[]>([])

  const addToQueue = (customer: NewCustomer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: 'waiting' }])
  }

  const updateStatus = (id: number, newStatus: string) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    )
  }

  const removeFromQueue = (id: number) => {
    setQueue(queue.filter((customer) => customer.id !== id))
  }

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customer efficiently</p>
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-between' }}>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  )
}

export default App
