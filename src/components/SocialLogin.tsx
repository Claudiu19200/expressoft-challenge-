import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa'

const SocialLogin = () => {
  return (
    <>
      <div className="my-4 flex w-full items-center justify-center sm:my-6">
        <div className="h-px flex-1 bg-white"></div>
        <span className="mx-2 text-xs text-gray-300 sm:mx-4 sm:text-sm">
          Sau conectează-te cu
        </span>
        <div className="h-px flex-1 bg-white"></div>
      </div>
      <div className="flex flex-col items-center space-y-2 sm:space-y-3">
        <button className="flex w-52 items-center rounded-full bg-blue-600 py-1 font-semibold text-white transition hover:bg-blue-700 sm:w-64 sm:py-2">
          <FaFacebook className="ml-2 size-5 sm:ml-4 sm:size-6" />
          <span className="flex-1 text-center text-sm sm:text-base">
            Facebook
          </span>
        </button>
        <button className="flex w-52 items-center rounded-full bg-white py-1 font-semibold text-gray-800 transition hover:bg-gray-100 sm:w-64 sm:py-2">
          <FaGoogle className="ml-2 size-5 sm:ml-4 sm:size-6" />
          <span className="flex-1 text-center text-sm sm:text-base">
            Google
          </span>
        </button>
        <button className="flex w-52 items-center rounded-full bg-black py-1 font-semibold text-white transition hover:bg-gray-800 sm:w-64 sm:py-2">
          <FaApple className="ml-2 size-5 sm:ml-4 sm:size-6" />
          <span className="flex-1 text-center text-sm sm:text-base">Apple</span>
        </button>
      </div>
    </>
  )
}

export default SocialLogin
