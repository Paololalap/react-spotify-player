import { useState } from "react";

const SearchButton = () => {
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const handleSearchButtonClicked = () => {
    setIsSearchButtonClicked(!isSearchButtonClicked);
  };
  return (
    <button className="group hidden sm:relative sm:block">
      <img
        src={isSearchButtonClicked ? "search-filled.svg" : "search.svg"}
        alt=""
        className={`hidden sm:block sm:h-5 sm:max-w-full sm:invert ${
          isSearchButtonClicked || "sm:opacity-70 sm:hover:opacity-100"
        } sm:hover:cursor-pointer`}
        onClick={handleSearchButtonClicked}
      />
      <span className="hidden sm:invisible sm:absolute sm:left-full sm:top-1/2 sm:z-10 sm:ml-3 sm:inline sm:w-auto sm:-translate-x-0 sm:-translate-y-1/2 sm:rounded-[0.2rem] sm:bg-[#1f1f1f] sm:px-[0.4rem] sm:py-[0.1rem] sm:text-center sm:font-[500] sm:text-white sm:opacity-0 sm:transition-opacity sm:delay-300 sm:group-hover:visible sm:group-hover:opacity-100">
        Search
      </span>
    </button>
  );
};

export default SearchButton;
