import { useNavigate } from 'react-router-dom'
import burger from '../images/burger.jpg'
import LoginForm from '../components/LoginForm'
import SocialLogin from '../components/SocialLogin'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/home')
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url(${burger})` }}
    >
      <div className="flex w-full max-w-lg flex-col items-center justify-center rounded-lg bg-black bg-opacity-50 p-6 text-center text-white sm:p-8 md:w-3/4 md:p-12">
        <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl">
          Bine ai venit la Bite Blitz
        </h1>
        <p className="mb-6 text-lg sm:mb-8 sm:text-xl">
          Pofta ta găsește drumul spre tine!
        </p>
        <LoginForm onLogin={handleLogin} />
        <SocialLogin />
      </div>
    </div>
  )
}

export default Login
