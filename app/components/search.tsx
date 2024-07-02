"use client";
import { useState, ChangeEvent, FormEvent, useRef } from "react";
import MagnifyingGlass from "@/icons/MagnifyingGlass";
import Cross from "@/icons/Cross";

interface SearchProps {
  onSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Input submitted:", searchValue);
    onSearch(searchValue); // Passing the search value to the parent component
  };

  const clearResults = () => {
    setSearchValue("");
    console.log("Input cleared");
    onSearch(""); // Passing the search value to the parent component
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus on the input field
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <form
      className="p-15 border-gray-light bg-white hover:bg-gray-light border focus-within:border-black w-[300px] transition-colors gap-10 cursor-text h-[50px]"
      onSubmit={handleSubmit}
      onClick={focusInput}
    >
      <div className="flex flex-row gap-5">
        <MagnifyingGlass className="text-gray-dark" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="h-20 outline-none placeholder-gray-500 bg-transparent appearance-none caret-black caret p-2 flex-grow"
          value={searchValue}
          onChange={handleInputChange}
        />
        {searchValue != "" && (
          <Cross
            className="text-gray-dark hover:text-black cursor-pointer"
            onClick={clearResults}
          />
        )}
      </div>
    </form>
  );
};

export default Search;
