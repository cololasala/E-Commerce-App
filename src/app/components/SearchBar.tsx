import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1 ring-1 ring-gray-200 shadow-sm">
      <Search width={20} />
      <input
        className="text-sm outline-0"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
