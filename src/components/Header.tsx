import { useNavigate } from 'react-router-dom'
import burgerPizza from '../images/burger.jpg'

interface HeaderProps {
  username: string
}

const Header = ({ username }: HeaderProps) => {
  const navigate = useNavigate()

  return (
    <div
      className="relative flex h-64 items-center justify-center bg-cover bg-center sm:h-80 md:h-96"
      style={{ backgroundImage: `url(${burgerPizza})` }}
    >
      <div className="rounded-lg bg-black bg-opacity-50 p-4 text-center text-white sm:p-6 md:p-8">
        <h1 className="mb-2 text-3xl font-bold sm:mb-4 sm:text-4xl md:text-5xl">
          Bună, {username}!
        </h1>
        <p className="mb-4 text-lg sm:mb-6 sm:text-xl">
          Poftă bună de la Bite Blitz!
        </p>
        <button
          onClick={() => navigate('/menu')}
          className="rounded-full bg-red-500 px-6 py-2 text-base font-semibold text-white transition hover:bg-red-600 sm:px-8 sm:py-3 sm:text-lg"
        >
          Vezi Meniul
        </button>
      </div>
    </div>
  )
}

export default Header
