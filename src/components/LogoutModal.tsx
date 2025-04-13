interface LogoutModalProps {
  onConfirm: () => void
  onCancel: () => void
}

const LogoutModal = ({ onConfirm, onCancel }: LogoutModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
          Sigur vrei să te deloghezi?
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Te vom redirecționa către pagina de login.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onConfirm}
            className="rounded-full bg-red-500 px-6 py-2 font-semibold text-white transition hover:bg-red-600"
          >
            Da
          </button>
          <button
            onClick={onCancel}
            className="rounded-full bg-gray-300 px-6 py-2 font-semibold text-gray-800 transition hover:bg-gray-400"
          >
            Nu
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal
