import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function SearchInput({ handelSearch }) {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handelSearch(e.target.value); // تنفيذ البحث عند الضغط على Enter
    }
  };

  return (
    <div className="Search-group flex rounded-lg bg-blue-400 relative w-[250px] border border-gray-300 items-center">
      <input
        type="text"
        placeholder="بحث"
        className="search-input border-none outline-none px-2 py-2 w-[250px] rounded-sm pr-3 focus:ring-2 focus:ring-blue-500"
        onChange={(e) => handelSearch(e.target.value)}
        onKeyPress={handleKeyPress}
        ref={inputRef}
      />
      <FaSearch
        className="absolute top-3 left-2 cursor-pointer"
        color="gray"
        onClick={handleIconClick}
      />
    </div>
  );
}
