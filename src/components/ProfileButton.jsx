const ProfileButton = () => {
  return (
    <button className="group hidden sm:relative sm:inline-block">
      <div className="hidden sm:relative sm:block sm:size-[2.1rem] sm:cursor-pointer sm:rounded-full sm:border-solid sm:bg-black sm:bg-opacity-50 sm:p-2 sm:hover:scale-110">
        <div className="hidden sm:absolute sm:left-1/2 sm:top-1/2 sm:block sm:size-[1.64rem] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-full sm:border-solid sm:bg-violet-400 sm:p-2 sm:text-center sm:font-bold  sm:leading-[.63rem] sm:text-black">
          P
        </div>
      </div>
      <span className=" hidden sm:invisible sm:absolute sm:left-0 sm:top-4 sm:z-10 sm:inline sm:w-auto sm:-translate-x-1/2 sm:translate-y-full sm:whitespace-nowrap sm:rounded-[0.2rem] sm:bg-[#1f1f1f] sm:px-[0.4rem] sm:py-[0.1rem] sm:text-center sm:text-[0.9rem] sm:font-[500] sm:text-white sm:opacity-0 sm:transition-opacity sm:delay-300 sm:group-hover:visible sm:group-hover:opacity-100">
        paoloLalap
      </span>
    </button>
  );
};

export default ProfileButton;
