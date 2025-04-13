import { useNavigate } from 'react-router-dom'

interface Recommendation {
  name: string
  description: string
  price: string
  image: string
  category: string
}

interface RecommendationCardProps {
  recommendation: Recommendation
  onViewProduct: (recommendation: Recommendation) => void
}

const RecommendationCard = ({
  recommendation,
  onViewProduct
}: RecommendationCardProps) => {
  const navigate = useNavigate()

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return
    onViewProduct(recommendation)
  }

  return (
    <div
      className="flex h-full cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-lg sm:p-6"
      onClick={handleCardClick}
    >
      <div className="mb-2 h-48 w-full overflow-hidden rounded sm:mb-4 sm:h-64">
        <img
          src={recommendation.image}
          alt={recommendation.name}
          className="size-full object-cover transition-transform duration-300 hover:scale-90"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
        {recommendation.name}
      </h3>
      <p className="mt-1 flex-1 text-center text-sm text-gray-600 sm:mt-2 sm:text-base">
        {recommendation.description}
      </p>
      <p className="mt-1 text-sm font-bold text-gray-800 sm:mt-2 sm:text-base">
        {recommendation.price}
      </p>
      <button
        onClick={() => navigate('/menu')}
        className="mt-2 w-32 rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white transition hover:bg-red-600 sm:mt-4 sm:w-40 sm:px-6 sm:py-2 sm:text-base"
      >
        Comandă Acum
      </button>
    </div>
  )
}

export default RecommendationCard
