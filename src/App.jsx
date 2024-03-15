import { useState } from "react";
import Mobile from "./Pages/Mobile";
import Desktop from "./Pages/Desktop";
import Sidebar from "./components/Sidebar";
import HomeButton from "./components/HomeButton";
import SearchButton from "./components/SearchButton";
import LibraryButton from "./components/LibraryButton";
import LikedSongs from "./components/LikedSongs";
import Playlist from "./components/Playlist";
import MainContent from "./components/MainContent";
import BackButton from "./components/BackButton";
import InstallAppButton from "./components/InstallAppButton";
import BellButton from "./components/BellButton";
import ProfileButton from "./components/ProfileButton";
import Showcase from "./components/Showcase";
import SongList from "./components/SongList";

const PlayerPage = () => {
  const [isPlayButtonClicked, setIsPlayButtonClicked] = useState(false);

  const handlePlayButtonClicked = () => {
    setIsPlayButtonClicked(!isPlayButtonClicked);
  };

  return (
    <>
      {/* Mobile Navigation */}
      <Mobile className="min-h-screen w-auto sm:hidden" />

      {/* Desktop Navigation */}
      <Desktop className="hidden sm:flex sm:gap-2 sm:overflow-hidden sm:bg-black sm:p-2">
        <Sidebar>
          <div className="hidden sm:flex sm:h-[7rem] sm:w-[4.5rem] sm:flex-col sm:items-center sm:justify-evenly sm:rounded-xl sm:bg-[#121212] ">
            <HomeButton />
            <SearchButton />
          </div>
          <div className="sm:mt-2 sm:flex sm:h-auto sm:w-[4.5rem] sm:flex-col sm:items-center sm:justify-evenly sm:space-y-[0.9rem] sm:rounded-xl sm:bg-[#121212] sm:py-5">
            <LibraryButton />
            <LikedSongs />
            <Playlist />
          </div>
        </Sidebar>

        <MainContent className="hidden sm:block sm:min-h-screen sm:w-full sm:overflow-y-hidden sm:rounded-lg ">
          {/* Background */}
          <div className="hidden sm:relative sm:block sm:min-h-screen sm:w-full sm:-translate-y-[4rem] sm:rounded-lg sm:bg-[url(https://lastfm.freetls.fastly.net/i/u/ar0/41bf054f9ab8ba7e2e60be69368fef17.jpg)] sm:bg-cover sm:bg-fixed sm:bg-left sm:bg-no-repeat">
            <div className="hidden sm:absolute sm:left-0 sm:top-0  sm:-z-20 sm:block sm:h-screen sm:w-full sm:bg-gradient-to-b sm:from-transparent sm:to-black"></div>
            <div className="hidden sm:absolute sm:top-[4rem] sm:flex sm:h-[4rem] sm:w-full">
              <div className="hidden sm:flex sm:w-full sm:justify-between sm:p-4">
                <BackButton />

                <div className="hidden sm:flex sm:space-x-[7px]">
                  <InstallAppButton />
                  <BellButton />
                  <ProfileButton />
                </div>
              </div>
            </div>
            <Showcase />
            <div className="hidden sm:absolute sm:top-[23.5rem] sm:block sm:h-screen sm:w-full sm:bg-gradient-to-b sm:from-red-950 sm:via-black sm:via-15% sm:to-black">
              <div className="hidden sm:flex sm:items-center sm:space-x-4 sm:p-4">
                <button
                  className="hidden sm:mr-2 sm:flex sm:size-[56px] sm:items-center sm:justify-center sm:rounded-full sm:bg-[#1ed760] sm:hover:scale-[1.05]"
                  onClick={handlePlayButtonClicked}
                >
                  <img
                    src={isPlayButtonClicked ? "play.svg" : "pause.svg"}
                    alt=""
                    className="hidden sm:block sm:h-7 sm:max-w-full"
                  />
                </button>
                <div className="hidden sm:block sm:h-8 sm:w-24 sm:cursor-pointer sm:rounded-full sm:border sm:border-opacity-50 sm:text-center sm:text-[0.80rem] sm:font-bold sm:leading-8 sm:transition-colors sm:hover:scale-[1.03] sm:hover:border-white">
                  Following
                </div>

                <div className="group hidden sm:relative sm:block sm:cursor-pointer sm:rounded-full sm:p-1 sm:opacity-70 sm:hover:scale-[1.05] sm:hover:opacity-100">
                  <img
                    src="triple-dot.svg"
                    alt=""
                    className="hidden sm:block sm:size-8 sm:invert "
                  />
                  <span className="hidden sm:invisible sm:absolute sm:left-1/2 sm:top-[-15px] sm:z-10 sm:inline sm:w-auto sm:-translate-x-1/2 sm:-translate-y-full sm:whitespace-nowrap sm:rounded-[0.2rem] sm:bg-[#1f1f1f] sm:px-[0.4rem] sm:py-[0.1rem] sm:text-center sm:text-[13px] sm:font-[500] sm:opacity-0 sm:transition-opacity sm:delay-300 sm:group-hover:visible sm:group-hover:opacity-100">
                    More options for Vaundy
                  </span>
                </div>
              </div>
              <div className="hidden sm:-mt-4 sm:block sm:h-[4rem] sm:w-full sm:p-4 ">
                <p className="hidden sm:block sm:text-[1.4rem] sm:font-bold sm:text-white">
                  Popular
                </p>
              </div>
              <SongList />
            </div>
          </div>
        </MainContent>
      </Desktop>
    </>
  );
};

export default PlayerPage;
