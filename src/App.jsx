import Mobile from "./Pages/Mobile";
import Desktop from "./Pages/Desktop";

const PlayerPage = () => {
  return (
    <>
      {/* Mobile Navigation */}
      <Mobile className="min-h-screen w-auto sm:hidden" />

      {/* Desktop Navigation */}
      <Desktop className="hidden  bg-black sm:flex sm:h-screen sm:gap-2 sm:p-2 sm:pb-0 " />
    </>
  );
};

export default PlayerPage;
