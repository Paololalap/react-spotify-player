const LibraryButton = () => {
  return (
    <button className="group hidden sm:relative sm:block">
      <img
        src="library.svg"
        alt=""
        className="hidden sm:mb-2 sm:block sm:h-[1.3rem] sm:max-w-full sm:opacity-75 sm:invert sm:hover:cursor-pointer sm:hover:opacity-100"
      />
      <span className="hidden sm:invisible sm:absolute sm:left-full sm:top-1/2 sm:z-10 sm:-mt-1 sm:ml-4 sm:inline sm:w-auto sm:-translate-x-0 sm:-translate-y-1/2 sm:whitespace-nowrap sm:rounded-[0.2rem] sm:bg-[#1f1f1f] sm:px-[0.5rem] sm:py-[0.2rem] sm:text-center sm:font-[500] sm:text-white sm:opacity-0 sm:transition-opacity sm:delay-300 sm:group-hover:visible sm:group-hover:opacity-100">
        Expand your library
      </span>
    </button>
  );
};

export default LibraryButton;
