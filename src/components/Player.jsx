const Player = () => {
  return (
    <>
      <section className="hidden sm:fixed sm:bottom-1 sm:left-1/2 sm:flex sm:h-auto sm:w-[99vw] sm:-translate-x-1/2 sm:flex-col sm:justify-center sm:gap-2 sm:bg-black sm:pt-4">
        <div className="hidden sm:flex sm:justify-between sm:px-2">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:gap-4">
            <img
              src="/album-cover-1.jpg"
              alt=""
              className="hidden sm:block sm:h-14 sm:max-w-full sm:rounded-t-[3px]"
            />
            <div className="hidden sm:flex sm:flex-col">
              <span className="hidden sm:block sm:text-white">
                Kaiju no Hanauta
              </span>
              <span className="hidden sm:block sm:text-xs sm:text-gray-400">
                Vaundy
              </span>
            </div>
            <img
              src="liked.svg"
              alt=""
              className="hidden sm:ml-2 sm:block sm:h-5 sm:max-w-full sm:hover:cursor-pointer"
            />
          </div>

          <div className="hidden sm:relative sm:flex sm:flex-1 sm:flex-col sm:justify-center sm:gap-2 ">
            <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-6">
              <div className="hidden sm:relative sm:block sm:hover:cursor-pointer">
                <img
                  src="shuffle.svg"
                  alt=""
                  className="hidden sm:block sm:h-4 sm:max-w-full"
                />
                <div className="hidden sm:absolute sm:left-1/2 sm:top-full sm:-ml-[1px] sm:mt-[2px] sm:block sm:size-1 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-full sm:bg-[#1ed760]"></div>
              </div>
              <img
                src="previous.svg"
                alt=""
                className="hidden sm:block sm:h-4 sm:max-w-full sm:opacity-70 sm:invert sm:hover:cursor-pointer"
              />
              <div className="hidden sm:relative sm:block sm:size-8 sm:hover:cursor-pointer ">
                <img
                  src="pause.svg"
                  alt=""
                  className="hidden sm:absolute sm:left-1/2 sm:top-1/2 sm:z-10 sm:block sm:h-5 sm:max-w-full sm:-translate-x-1/2 sm:-translate-y-1/2"
                />
                <div className="hidden sm:absolute sm:left-1/2 sm:top-1/2 sm:block sm:size-8 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-full sm:bg-white"></div>
              </div>
              <img
                src="next.svg"
                alt=""
                className="hidden sm:block sm:h-4 sm:max-w-full sm:opacity-70 sm:invert sm:hover:cursor-pointer"
              />
              <img
                src="repeat.svg"
                alt=""
                className="hidden sm:block sm:h-4 sm:max-w-full sm:opacity-70 sm:invert sm:hover:cursor-pointer"
              />
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-2">
              <div className="hidden sm:block sm:text-xs sm:text-white">
                0:05
              </div>
              <div className="hidden sm:block sm:h-1 sm:w-[33vw] sm:rounded-xl sm:bg-gray-400 sm:hover:cursor-pointer"></div>
              <div className="hidden sm:block sm:text-xs sm:text-white">
                3:44
              </div>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end sm:gap-4">
            <img
              src="now-playing-view.svg"
              alt=""
              className="hidden sm:block sm:h-4 sm:max-w-full sm:opacity-70 sm:invert sm:hover:cursor-pointer"
            />
            <img
              src="mic.svg"
              alt=""
              className="hidden sm:block sm:h-4 sm:max-w-full sm:opacity-70 sm:invert sm:hover:cursor-pointer"
            />
            <img
              src="queue.svg"
              alt=""
              className="hidden sm:block sm:h-4 sm:max-w-full sm:opacity-70 sm:invert sm:hover:cursor-pointer"
            />
            <div className="hidden sm:relative sm:block">
              <img
                src="desktop.svg"
                alt=""
                className="hidden sm:block sm:h-4 sm:max-w-full sm:hover:cursor-pointer"
              />
              <div className="hidden sm:absolute sm:top-9 sm:block sm:size-4 sm:rotate-45 sm:bg-[#1ed760]"></div>
              <div className="hidden sm:absolute sm:left-1/2 sm:top-[47px] sm:z-20 sm:flex sm:size-[18px] sm:-translate-x-1/2 sm:items-center sm:justify-center sm:gap-2">
                <img
                  src="playing-on-web.svg"
                  alt=""
                  className="hidden sm:block sm:size-[18px]"
                />
                <span className="hidden sm:block sm:whitespace-nowrap sm:text-[13px] sm:font-[500] sm:tracking-wide">
                  Playing on Web Player(Chrome)
                </span>
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <img
                src="volume.svg"
                alt=""
                className="hidden sm:mr-2 sm:block sm:h-4 sm:max-w-full sm:opacity-70 sm:invert sm:hover:cursor-pointer"
              />
              <div className="hidden sm:block sm:h-1 sm:w-[6vw] sm:rounded-xl sm:bg-gray-400 sm:hover:cursor-pointer"></div>
            </div>
            <img
              src="fullscreen.svg"
              alt=""
              className="hidden sm:block sm:h-4 sm:max-w-full sm:opacity-70 sm:invert sm:hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="hidden sm:block sm:h-6 sm:w-[99vw] sm:rounded-[4px] sm:bg-[#1ed760]"></div>
      </section>
    </>
  );
};

export default Player;
