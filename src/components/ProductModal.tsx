interface Product {
  name: string
  description: string
  price: string
  image: string
  category: string
  available?: boolean
}

interface ProductModalProps {
  product: Product
  onClose: () => void
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-2 h-48 w-full overflow-hidden rounded sm:mb-4 sm:h-64">
          <img
            src={product.image || 'https://via.placeholder.com/500'}
            alt={product.name}
            className="size-full object-cover"
          />
        </div>
        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl">
          {product.name}
        </h2>
        <p className="mb-2 text-sm text-gray-600 sm:mb-4 sm:text-base">
          {product.description}
        </p>
        <p className="mb-2 text-sm font-bold text-gray-800 sm:mb-4 sm:text-base">
          {product.price}
        </p>
        {product.available !== undefined && (
          <div className="mb-2 flex items-center sm:mb-4">
            <span
              className={`mr-2 size-3 rounded-full ${
                product.available ? 'bg-green-500' : 'bg-red-500'
              }`}
            ></span>
            <span className="text-xs sm:text-sm">
              {product.available ? 'Disponibil' : 'Indisponibil'}
            </span>
          </div>
        )}
        <button
          onClick={onClose}
          className="w-full rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white transition hover:bg-red-600 sm:px-6 sm:py-2 sm:text-base"
        >
          Închide
        </button>
      </div>
    </div>
  )
}

export default ProductModal
