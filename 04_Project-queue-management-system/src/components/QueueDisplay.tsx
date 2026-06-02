import { FaCheck, FaTrash } from 'react-icons/fa'
import type { Customer } from '../App'

interface QueueDisplayProps {
  queue: Customer[]
  onUpdateStatus: (id: number, newStatus: string) => void
  onRemove: (id: number) => void
}

const QueueDisplay = ({ queue, onUpdateStatus, onRemove }: QueueDisplayProps) => {
  return (
    <section className="queue-display">
      <h2>Current Queue ({queue.length})</h2>
      {queue.length === 0 ? (
        <p className="queue-empty">No customers waiting.</p>
      ) : (
        <ul className="queue-list">
          {queue.map((customer) => (
            <li key={customer.id} className="queue-item">
              <div className="queue-item-info">
                <span className="queue-item-name">{customer.name}</span>
                <span className="queue-item-service">{customer.service}</span>
              </div>
              <span className={`queue-status status-${customer.status}`}>
                {customer.status}
              </span>
              <div className="queue-actions">
                <button
                  type="button"
                  className="btn-served"
                  onClick={() => onUpdateStatus(customer.id, 'served')}
                  title="Mark as served"
                >
                  <FaCheck />
                </button>
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => onRemove(customer.id)}
                  title="Remove from queue"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default QueueDisplay
