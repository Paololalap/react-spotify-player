/* eslint-disable react/prop-types */
const Sidebar = ({ children }) => {
  return (
    <aside className="hidden sm:block sm:min-h-screen sm:w-auto">{children}</aside>
  );
};

export default Sidebar;
