const BellButton = () => {
  return (
    <button className="group hidden sm:relative sm:inline-block">
      <div className="hidden sm:relative sm:block sm:cursor-pointer sm:hover:scale-110">
        <img
          src="bell.svg"
          alt=""
          className="hidden sm:block sm:h-[2.1rem] sm:max-w-full sm:rounded-full sm:border-solid sm:p-2 sm:opacity-50 sm:invert sm:hover:opacity-100"
        />
        <div className="hidden sm:absolute sm:top-0 sm:-z-10 sm:block sm:size-[2.1rem] sm:rounded-full sm:border-solid sm:bg-black sm:bg-opacity-50"></div>
      </div>
      <span className="hidden sm:invisible sm:absolute sm:left-3 sm:top-4 sm:z-10 sm:inline sm:w-auto sm:-translate-x-1/2 sm:translate-y-full sm:whitespace-nowrap sm:rounded-[0.2rem] sm:bg-[#1f1f1f] sm:px-[0.4rem] sm:py-[0.1rem] sm:text-center sm:text-[0.9rem] sm:font-[500] sm:opacity-0 sm:transition-opacity sm:delay-300 sm:group-hover:visible sm:group-hover:opacity-100">
        What&apos;s new
      </span>
    </button>
  );
}

export default BellButton