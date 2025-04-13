import { Product } from '../data/menuData'

interface ProductCardProps {
  product: Product // The product data (name, price, image, etc.)
  onToggleAvailability: (productId: string) => void // Function to toggle if the product is available
  onAddToOrder: (product: Product) => void // Function to add the product to the cart
  onViewProduct: (product: Product) => void // Function to show product details when clicked
}

// ProductCard displays a single product with its details and actions
const ProductCard = ({
  product,
  onToggleAvailability,
  onAddToOrder,
  onViewProduct
}: ProductCardProps) => {
  // Function to handle clicks on the card, but ignore clicks on buttons or inputs
  const handleCardClick = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).closest('input') ||
      (e.target as HTMLElement).closest('button')
    )
      return // Skip if clicking a button or checkbox
    onViewProduct(product) // Show product details if clicking elsewhere
  }

  return (
    // Card container, clickable to view details, with padding and shadow
    <div
      className="flex h-full cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg sm:p-6"
      onClick={handleCardClick}
    >
      <div className="mb-2 h-48 w-full overflow-hidden rounded sm:mb-4 sm:h-64">
        <img
          src={product.image || 'https://via.placeholder.com/500'} // Uses product image or a placeholder
          alt={product.name}
          className="size-full object-cover transition-transform duration-300 hover:scale-90"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
        {product.name}
      </h3>

      <p className="mt-1 flex-1 text-center text-sm text-gray-600 sm:mt-2 sm:text-base">
        {product.description}
      </p>

      <p className="mt-1 text-sm font-bold text-gray-800 sm:mt-2 sm:text-base">
        {product.price} RON
      </p>

      <div className="mt-1 flex items-center sm:mt-2">
        <span
          className={`mr-2 size-3 rounded-full ${
            product.available ? 'bg-green-500' : 'bg-red-500'
          }`}
        ></span>
        <span className="text-xs sm:text-sm">
          {product.available ? 'Disponibil' : 'Indisponibil'}{' '}
          {/* Shows availability status */}
        </span>
      </div>
      {/* Checkbox to toggle availability, like an admin feature */}
      <label className="mt-1 flex items-center sm:mt-2">
        <input
          type="checkbox"
          checked={product.available} // Checked if product is available
          onChange={() => onToggleAvailability(product.id)} // Calls toggle function when changed
          className="mr-1 sm:mr-2"
        />
        <span className="text-xs text-gray-600 sm:text-sm">
          Toggle disponibilitate
        </span>
      </label>
      {/* Button to add product to cart, disabled if unavailable */}
      <button
        onClick={() => onAddToOrder(product)} // Calls add to cart function
        disabled={!product.available} // Grayed out if product isn’t available
        className={`mt-2 w-32 rounded-full px-4 py-1 text-sm font-semibold text-white transition sm:mt-4 sm:w-40 sm:px-6 sm:py-2 sm:text-base ${
          product.available
            ? 'bg-red-500 hover:bg-red-600'
            : 'cursor-not-allowed bg-gray-400'
        }`}
      >
        Adaugă în Comandă
      </button>
    </div>
  )
}

export default ProductCard
