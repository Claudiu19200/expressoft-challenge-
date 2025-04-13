import { useNavigate } from 'react-router-dom'
import { OrderItem } from '../pages/Menu'

interface CartModalProps {
  order: OrderItem[]
  onClose: () => void
  onUpdateQuantity: (productId: string, delta: number) => void
}

const CartModal = ({ order, onClose, onUpdateQuantity }: CartModalProps) => {
  const navigate = useNavigate()
  const subtotal = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const vat = subtotal * 0.19
  const totalWithVat = subtotal + vat

  const handleCheckout = () => {
    onClose()
    navigate('/checkout', { state: { order, totalWithVat } })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Coșul Tău</h2>
        {order.length === 0 ? (
          <p className="text-gray-600">Coșul este gol.</p>
        ) : (
          <>
            {order.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-2"
              >
                <div>
                  <span>{item.name}</span>
                  <div className="mt-1 flex items-center">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span>{item.price * item.quantity} RON</span>
              </div>
            ))}
            <div className="mt-4">
              <div className="flex justify-between">
                <span>Subtotal (fără TVA):</span>
                <span>{subtotal.toFixed(2)} RON</span>
              </div>
              <div className="flex justify-between">
                <span>TVA (19%):</span>
                <span>{vat.toFixed(2)} RON</span>
              </div>
              <div className="mt-2 flex justify-between font-bold">
                <span>Total (cu TVA):</span>
                <span>{totalWithVat.toFixed(2)} RON</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full rounded-full bg-green-500 px-6 py-2 font-semibold text-white transition hover:bg-green-600"
            >
              Finalizează Comanda
            </button>
          </>
        )}
        <button
          onClick={onClose}
          className="mt-2 w-full rounded-full bg-red-500 px-6 py-2 font-semibold text-white transition hover:bg-red-600"
        >
          Închide
        </button>
      </div>
    </div>
  )
}

export default CartModal
