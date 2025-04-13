import { useState } from 'react'

interface LoginFormProps {
  onLogin: (username: string, password: string) => void
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    const correctUsername = 'claudiuBlitz'
    const correctPassword = 'biteblitz'

    if (!username && !password) {
      setError('Introdu username-ul și parola!')
    } else if (!username) {
      setError('Introdu username-ul!')
    } else if (!password) {
      setError('Introdu parola!')
    } else if (username !== correctUsername || password !== correctPassword) {
      setError('Username sau parolă incorecte!')
    } else {
      setError('')
      onLogin(username, password)
    }
  }

  return (
    <div className="w-full space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full rounded-lg bg-gray-800 p-2 text-sm text-white placeholder:text-white placeholder:text-opacity-75 focus:outline-none focus:ring-2 focus:ring-red-500 sm:p-3 sm:text-base"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-lg bg-gray-800 p-2 text-sm text-white placeholder:text-white placeholder:text-opacity-75 focus:outline-none focus:ring-2 focus:ring-red-500 sm:p-3 sm:text-base"
      />
      <p className="cursor-pointer text-xs text-gray-300 hover:text-white hover:underline sm:text-sm">
        Ai uitat parola?
      </p>
      {error && (
        <p className="rounded bg-red-900 bg-opacity-50 p-2 text-sm font-semibold text-white sm:text-base">
          {error}
        </p>
      )}
      <button
        onClick={handleLogin}
        className="w-full rounded-full bg-red-500 px-6 py-2 text-base font-semibold text-white transition hover:bg-red-600 sm:px-8 sm:py-3 sm:text-lg"
      >
        Login
      </button>
    </div>
  )
}

export default LoginForm
