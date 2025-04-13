interface SearchAndSortProps {
  searchTerm: string
  sortOption: string
  onSearchChange: (value: string) => void
  onSortChange: (value: string) => void
}

const SearchAndSort = ({
  searchTerm,
  sortOption,
  onSearchChange,
  onSortChange
}: SearchAndSortProps) => {
  return (
    <div className="mx-auto mb-6 flex max-w-6xl flex-col gap-4 sm:flex-row">
      <input
        type="text"
        placeholder="Caută produse..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-red-500 sm:w-1/2"
      />
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-red-500 sm:w-1/2"
      >
        <option value="default">Sortează (implicit)</option>
        <option value="price-asc">Preț: Mic la Mare</option>
        <option value="price-desc">Preț: Mare la Mic</option>
        <option value="name-asc">Nume: A la Z</option>
        <option value="name-desc">Nume: Z la A</option>
        <option value="available-first">Disponibile primele</option>
      </select>
    </div>
  )
}

export default SearchAndSort
