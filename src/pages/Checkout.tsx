import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
}

const Checkout = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { order, totalWithVat } = state as {
    order: OrderItem[]
    totalWithVat: number
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    block: '',
    apartment: '',
    city: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aici poți adăuga logica pentru trimiterea comenzii (ex. API call)
    console.log('Comanda finalizată:', { order, formData, totalWithVat })
    alert('Comanda a fost plasată cu succes!')
    navigate('/home') // Redirecționează la Home după finalizare
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <nav className="flex items-center justify-between bg-red-500 p-4 text-white shadow-lg">
        <span className="text-2xl font-bold tracking-wide">Bite Blitz</span>
        <div className="space-x-6">
          <button
            onClick={() => navigate('/home')}
            className="rounded-full bg-white px-4 py-2 font-semibold text-red-500 transition duration-300 hover:bg-red-100"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/menu')}
            className="rounded-full bg-white px-4 py-2 font-semibold text-red-500 transition duration-300 hover:bg-red-100"
          >
            Menu
          </button>
          <button
            onClick={() => navigate('/')}
            className="rounded-full bg-white px-4 py-2 font-semibold text-red-500 transition duration-300 hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl flex-1 p-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
          Finalizează Comanda
        </h1>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Detalii Livrare
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block font-semibold text-gray-700">
                  Nume
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block font-semibold text-gray-700">
                  Prenume
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block font-semibold text-gray-700">
                  Strada
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block font-semibold text-gray-700">
                  Bloc
                </label>
                <input
                  type="text"
                  name="block"
                  value={formData.block}
                  onChange={handleChange}
                  className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="mb-1 block font-semibold text-gray-700">
                  Apartament
                </label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block font-semibold text-gray-700">
                  Oraș
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block font-semibold text-gray-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                Sumar Comandă
              </h3>
              {order.map((item) => (
                <div key={item.id} className="flex justify-between py-1">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>{item.price * item.quantity} RON</span>
                </div>
              ))}
              <div className="mt-2 flex justify-between font-bold">
                <span>Total (cu TVA):</span>
                <span>{totalWithVat.toFixed(2)} RON</span>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-green-500 px-6 py-2 font-semibold text-white transition hover:bg-green-600"
            >
              Plasează Comanda
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>© 2025 Bite Blitz. Toate drepturile rezervate.</p>
      </footer>
    </div>
  )
}

export default Checkout
