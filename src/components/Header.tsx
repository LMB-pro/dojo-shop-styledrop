import { HiBars3, HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";
import { useDarkMode } from "../hooks";

const Header = () => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  const { theme, toggleTheme } = useDarkMode();
  return (
    <>
    <header className="max-w-screen-2xl flex text-center justify-between items-center py-4 px-5 text-black dark:text-white mx-auto max-sm:px-5 max-[400px]:px-3">
      <HiBars3 className="text-2xl max-sm:text-xl mr-20 max-lg:mr-0 cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
      <Link to="/" className="flex items-center">
        <img
          src="https://images.prismic.io/exalt/ZlTQKaWtHYXtT1CW_HEADER_Logo.png?auto=format%2Ccompress&fit=max&w=256"
          alt="eXalt"
          className="h-8 max-sm:h-6 dark:invert"
        />
      </Link>
      <div className="flex gap-4 items-center max-sm:gap-2">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
          className="flex items-center justify-center"
        >
          {theme === "dark" ? (
            <HiOutlineSun className="text-2xl max-sm:text-xl" />
          ) : (
            <HiOutlineMoon className="text-2xl max-sm:text-xl" />
          )}
        </button>
        <Link to="/search">
          <HiOutlineMagnifyingGlass className="text-2xl max-sm:text-xl" />
        </Link>
        <Link to="/login">
          <HiOutlineUser className="text-2xl max-sm:text-xl" />
        </Link>
        <Link to="/cart">
          <HiOutlineShoppingBag className="text-2xl max-sm:text-xl" />
        </Link>
      </div>
    </header>
    <SidebarMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};
export default Header;
