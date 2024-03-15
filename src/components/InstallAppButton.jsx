const InstallAppButton = () => {
  return (
    <button className="hidden sm:flex sm:h-[2rem] sm:max-w-full sm:cursor-pointer sm:items-center sm:justify-center sm:rounded-full sm:bg-black sm:bg-opacity-50 sm:px-1 sm:hover:scale-[1.05]">
      <img
        src="download.svg"
        alt=""
        className="hidden sm:block sm:h-[2rem] sm:max-w-full sm:border-solid sm:p-2 sm:invert"
      />
      <span className="hidden sm:ml-[-3px] sm:block sm:pr-2 sm:text-[13px] sm:font-bold sm:leading-7">
        Install App
      </span>
    </button>
  );
}

export default InstallAppButton