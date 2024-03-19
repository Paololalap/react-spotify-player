const LikedSongs = () => {
  return (
    <button className="group hidden sm:relative sm:block sm:cursor-pointer">
      <img
        src="liked-songs.png"
        alt=""
        className="hidden sm:block sm:h-12 sm:max-w-full sm:rounded-[0.3rem] "
      />
      <div className="hidden sm:absolute sm:left-1/2 sm:top-1/2 sm:block sm:h-12 sm:w-full sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[0.3rem] sm:hover:scale-125 sm:hover:bg-white sm:hover:opacity-5"></div>
      <span className="hidden sm:invisible sm:absolute sm:left-full sm:top-1/2 sm:z-10 sm:ml-2 sm:inline sm:w-auto sm:-translate-y-1/2 sm:translate-x-2 sm:rounded-[0.3rem] sm:bg-[#1f1f1f] sm:px-[0.55rem] sm:py-[0.3rem] sm:text-left sm:font-[500] sm:leading-[1.10rem] sm:opacity-0 sm:transition-opacity sm:delay-300 sm:group-hover:visible sm:group-hover:opacity-100">
        <span className="hidden sm:inline sm:whitespace-nowrap sm:text-green-500">
          Liked Songs
        </span>
        <br />
        <span className="hidden sm:inline sm:whitespace-nowrap sm:text-[0.72rem] sm:text-gray-400">
          Playlist &bull; 56 songs
        </span>
      </span>
    </button>
  );
};

export default LikedSongs;
