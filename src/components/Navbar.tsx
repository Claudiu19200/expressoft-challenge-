import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import LogoutModal from '../components/LogoutModal'

interface NavbarProps {
  totalItems?: number
  onCartOpen?: () => void
}

const Navbar = ({ totalItems, onCartOpen }: NavbarProps) => {
  const navigate = useNavigate()
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Stare pentru meniu

  const handleLogout = () => {
    setIsLogoutModalOpen(false)
    navigate('/')
  }

  return (
    <>
      <nav className="flex items-center justify-between bg-red-500 p-4 text-white shadow-lg">
        <span className="text-2xl font-bold tracking-wide">Bite Blitz</span>
        <div className="hidden items-center space-x-6 md:flex">
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
            onClick={() => setIsLogoutModalOpen(true)}
            className="rounded-full bg-white px-4 py-2 font-semibold text-red-500 transition duration-300 hover:bg-red-100"
          >
            Logout
          </button>
          {totalItems !== undefined && onCartOpen && (
            <div className="relative">
              <button
                onClick={onCartOpen}
                className="flex items-center text-white"
              >
                <FaShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-red-500">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          )}
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>
      {/* Dropdown menu on mobile */}
      {isMenuOpen && (
        <div className="flex flex-col items-center space-y-4 bg-red-500 py-4 text-white md:hidden">
          <button
            onClick={() => {
              navigate('/home')
              setIsMenuOpen(false)
            }}
            className="rounded-full bg-white px-4 py-2 font-semibold text-red-500 transition duration-300 hover:bg-red-100"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate('/menu')
              setIsMenuOpen(false)
            }}
            className="rounded-full bg-white px-4 py-2 font-semibold text-red-500 transition duration-300 hover:bg-red-100"
          >
            Menu
          </button>
          <button
            onClick={() => {
              setIsLogoutModalOpen(true)
              setIsMenuOpen(false)
            }}
            className="rounded-full bg-white px-4 py-2 font-semibold text-red-500 transition duration-300 hover:bg-red-100"
          >
            Logout
          </button>
          {totalItems !== undefined && onCartOpen && (
            <div className="relative">
              <button
                onClick={() => {
                  onCartOpen()
                  setIsMenuOpen(false)
                }}
                className="flex items-center text-white"
              >
                <FaShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-red-500">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      )}
      {isLogoutModalOpen && (
        <LogoutModal
          onConfirm={handleLogout}
          onCancel={() => setIsLogoutModalOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
