const Showcase = () => {
  
  return (
    <section className="hidden sm:absolute sm:top-[12rem] sm:flex sm:h-[4rem] sm:w-full">
      <div className="hidden sm:ml-[16px] sm:block">
        <div className="hidden sm:relative sm:flex sm:items-center">
          <img
            src="verified.svg"
            alt=""
            className="hidden sm:block sm:h-6 sm:max-w-full "
          />
          <div className="hidden sm:absolute sm:left-1 sm:top-1 sm:-z-10 sm:block sm:size-4 sm:rounded-full sm:bg-white"></div>
          <div className="sm:text-md hidden sm:ml-2 sm:block sm:font-bold sm:text-white">
            Verified Artist
          </div>
        </div>
        <div className="hidden sm:block sm:font-poppins sm:text-[6rem] sm:font-[700] sm:leading-[0.90] sm:tracking-tight sm:text-white">
          Vaundy
        </div>
        <div className="hidden sm:mt-6 sm:block sm:font-poppins sm:font-[500] sm:text-white">
          <span className="sm:font-DEFAULT hidden sm:inline sm:text-[1rem]">
            5,343,861
          </span>{" "}
          monthly listeners
        </div>
      </div>
    </section>
  );
}

export default Showcase