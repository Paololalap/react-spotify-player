import songs from "../api/mockapi/songs";

const SongList = () => {
  return (
    <ul className="hidden sm:block sm:h-[18rem]">
      {songs.map((song) => (
        <li
          key={song.id}
          className="group hidden sm:mx-auto sm:flex sm:h-10 sm:w-[95%] sm:items-center sm:justify-between sm:rounded-[3px] sm:px-5 sm:py-7 sm:hover:bg-white sm:hover:bg-opacity-[0.15]"
        >
          <div className="hidden sm:flex sm:w-[15rem] sm:items-center sm:justify-start sm:space-x-4 ">
            <div className="group/play hidden sm:relative sm:flex sm:w-4">
              <span className="hidden sm:mr-2 sm:block sm:items-center sm:text-sm sm:text-gray-400 sm:group-hover:text-[0.1px]">
                {song.id}
              </span>
              {/* Play button */}
              <button className="cursor-default">
                <img
                  src="play.svg"
                  alt=""
                  className="hidden sm:invisible sm:absolute sm:left-[4px] sm:top-1/2 sm:block sm:max-w-full sm:-translate-x-1/2 sm:-translate-y-1/2 sm:scale-[1.50] sm:invert sm:group-hover:visible"
                />
              </button>
              {/* Song title on hover */}
              <span className="hidden sm:invisible sm:absolute sm:left-[-35px] sm:top-[-15px] sm:z-10 sm:inline sm:w-auto sm:-translate-y-full sm:whitespace-nowrap  sm:rounded-[0.2rem] sm:bg-[#1f1f1f] sm:px-[0.4rem] sm:py-[0.1rem] sm:text-center sm:text-[15px] sm:font-[500] sm:text-white sm:opacity-0 sm:transition-opacity sm:delay-300 sm:group-hover/play:visible sm:group-hover/play:opacity-100">
                Play {song.title} by {song.artist}
              </span>
            </div>
            {/* Album cover */}
            <img
              src={song.cover}
              alt=""
              className="hidden sm:block sm:h-10 sm:max-w-full sm:rounded-[5px]"
            />
            {/* Song title */}
            <div className="group/nest hidden sm:relative sm:block">
              <span className="hidden sm:mt-0 sm:block sm:cursor-pointer sm:whitespace-nowrap sm:text-[1rem] sm:font-bold sm:text-white sm:hover:underline sm:hover:decoration-2">
                {song.title}
              </span>
              {/* Song title on hover */}
              <span className="sm:text-md hidden sm:invisible sm:absolute sm:left-1/2 sm:top-[-5px] sm:z-20 sm:inline sm:w-auto sm:-translate-x-1/2 sm:-translate-y-full sm:whitespace-nowrap sm:rounded-[0.2rem] sm:bg-[#1f1f1f] sm:px-[0.4rem] sm:py-[0.1rem] sm:text-center sm:font-[500] sm:text-white sm:opacity-0 sm:transition-opacity sm:delay-1000 sm:group-hover/nest:visible sm:group-hover/nest:opacity-100">
                {song.title}
              </span>
            </div>
          </div>
          {/* Song plays */}
          <span className="hidden sm:mt-0 sm:block sm:text-right sm:font-bold sm:text-gray-400 sm:group-hover:text-white">
            {song.plays}
          </span>
          {/* Action buttons */}
          <div className="hidden sm:flex sm:space-x-2">
            {/* Heart button */}
            <button className="group/heart hidden sm:relative sm:block">
              <img
                src="heart.svg"
                alt=""
                className="hidden sm:invisible sm:mr-4 sm:block sm:h-5 sm:max-w-full sm:scale-[.80] sm:cursor-pointer sm:opacity-50 sm:invert sm:hover:opacity-100  sm:group-hover:visible"
              />
              {/* Save to Library on hover */}
              <span className="hidden sm:invisible sm:absolute sm:left-1/2 sm:top-[-15px] sm:z-10 sm:inline sm:w-auto sm:-translate-x-1/2 sm:-translate-y-full sm:whitespace-nowrap sm:rounded-[0.2rem] sm:bg-[#1f1f1f] sm:px-[0.4rem] sm:py-[0.1rem] sm:text-center sm:text-[13px] sm:font-[500] sm:text-white sm:opacity-0 sm:transition-opacity sm:delay-300 sm:group-hover/heart:visible sm:group-hover/heart:opacity-100">
                Save to Your Library
              </span>
            </button>
            {/* Song duration */}
            <span className="hidden sm:mt-0 sm:block sm:font-bold sm:text-gray-400">
              {song.duration}
            </span>
            {/* More options button */}
            <button className="group/tripledot hidden sm:relative sm:block">
              <img
                src="triple-dot.svg"
                alt=""
                className="hidden sm:invisible sm:block sm:h-5 sm:max-w-full sm:cursor-pointer sm:invert sm:hover:scale-110 sm:group-hover:visible"
              />
              {/* More options on hover */}
              <span className="hidden text-white sm:invisible sm:absolute sm:left-[40.5px] sm:top-[-15px] sm:z-10 sm:inline sm:w-auto sm:-translate-x-full sm:-translate-y-full sm:whitespace-nowrap sm:rounded-[0.2rem] sm:bg-[#1f1f1f] sm:px-[0.4rem] sm:py-[0.1rem] sm:text-center sm:text-[13px] sm:font-[500] sm:opacity-0 sm:transition-opacity sm:delay-300 sm:group-hover/tripledot:visible sm:group-hover/tripledot:opacity-100">
                More options for {song.title} by {song.artist}
              </span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
