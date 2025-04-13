// Defines the props (inputs) that the CategoryFilter component needs
interface CategoryFilterProps {
  categories: string[] // List of category names (e.g., ["Pizza", "Burgers"])
  currentFilter: string // The currently selected filter (e.g., "Pizza" or "all")
  onFilterChange: (filter: string) => void // Function to call when a filter is clicked
}

// The CategoryFilter component shows buttons to filter products by category
const CategoryFilter = ({
  categories,
  currentFilter,
  onFilterChange
}: CategoryFilterProps) => {
  return (
    // Container for filter buttons, wraps on small screens and adjusts spacing
    <div className="mb-4 flex flex-wrap justify-center gap-2 sm:mb-6 sm:gap-4">
      <button
        onClick={() => onFilterChange('all')}
        className={`rounded-full px-4 py-1 font-semibold text-white transition duration-300 sm:px-6 sm:py-2 ${
          currentFilter === 'all' ? 'bg-red-700' : 'bg-red-500 hover:bg-red-600'
        }`} // Highlights if "all" is selected, changes color on hover
      >
        Toate
      </button>
      {/* Loops through each category to create a filter button */}
      {categories.map((category) => (
        <button
          key={category} // Unique key for React to track each button
          onClick={() => onFilterChange(category)}
          className={`rounded-full px-4 py-1 font-semibold text-white transition duration-300 sm:px-6 sm:py-2 ${
            currentFilter === category
              ? 'bg-red-700'
              : 'bg-red-500 hover:bg-red-600'
          }`} // Highlights if this category is selected, changes color on hover
        >
          {category} {/* Shows the category name (e.g., "Pizza") */}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
