import RecommendationCard from './RecommendationCard'

interface Recommendation {
  name: string
  description: string
  price: string
  image: string
  category: string
}

interface RecommendationsSectionProps {
  recommendations: Recommendation[]
  filter: string
  onFilterChange: (filter: string) => void
  onViewProduct: (recommendation: Recommendation) => void
}

const RecommendationsSection = ({
  recommendations,
  filter,
  onFilterChange,
  onViewProduct
}: RecommendationsSectionProps) => {
  const filteredRecommendations =
    filter === 'all'
      ? recommendations
      : recommendations.filter((item) => item.category === filter)

  return (
    <div className="flex-1 p-8">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Recomandările Noastre
      </h2>
      <div className="mb-6 flex justify-center space-x-4">
        <button
          onClick={() => onFilterChange('Pizza')}
          className={`rounded-full px-6 py-2 font-semibold text-white transition duration-300 ${
            filter === 'Pizza' ? 'bg-red-700' : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          Pizza
        </button>
        <button
          onClick={() => onFilterChange('Burgeri')}
          className={`rounded-full px-6 py-2 font-semibold text-white transition duration-300 ${
            filter === 'Burgeri' ? 'bg-red-700' : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          Burgeri
        </button>
        <button
          onClick={() => onFilterChange('Băuturi')}
          className={`rounded-full px-6 py-2 font-semibold text-white transition duration-300 ${
            filter === 'Băuturi' ? 'bg-red-700' : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          Băuturi
        </button>
        <button
          onClick={() => onFilterChange('all')}
          className={`rounded-full px-6 py-2 font-semibold text-white transition duration-300 ${
            filter === 'all' ? 'bg-red-700' : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          Toate
        </button>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRecommendations.map((item, index) => (
          <RecommendationCard
            key={index}
            recommendation={item}
            onViewProduct={onViewProduct}
          />
        ))}
      </div>
    </div>
  )
}

export default RecommendationsSection
