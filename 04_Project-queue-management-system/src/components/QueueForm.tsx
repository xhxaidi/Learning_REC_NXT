import { useState } from 'react'
import type { FormEvent } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import type { NewCustomer } from '../App'

interface QueueFormProps {
  onAdd: (customer: NewCustomer) => void
}

const QueueForm = ({ onAdd }: QueueFormProps) => {
  const [name, setName] = useState('')
  const [service, setService] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    //validation
    if (!name.trim() || !service.trim()) return
    onAdd({ name, service })
    setName('')
    setService('')
  }

  return (
    <form className="queue-form" onSubmit={handleSubmit}>
      <h2>Add To Queue</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Customer name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select Service</option>
          <option value="Consultation">Consultation</option>
          <option value="Payment">Payment</option>
          <option value="Support">Support</option>
        </select>
      </div>
      <button type="submit">
        <FaUserPlus /> Add Customer
      </button>
    </form>
  )
}

export default QueueForm
