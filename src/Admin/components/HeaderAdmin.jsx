import { Link, Navigate } from "react-router-dom";
import { IconDown, MenuHamburguer } from "../../assets/Icons";
import { useState } from "react";
import { useGetInfos } from "../../Utils/useGetInfos";

export function HeaderAdmin({ openMenu, setIsOpenMenu }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const context = useGetInfos();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.success("Deslogado com Sucesso!");
  };

  return (
    <header className="px-4 flex justify-between items-center py-3 bg-black">
      <div className="max-w-52 w-full flex justify-between">
        <Link to={"/admin"} className="text-3xl text-white font-['Helvetica']">
          BDW
        </Link>
        <button onClick={() => setIsOpenMenu(!openMenu)}>
          <MenuHamburguer />
        </button>
      </div>
      <div className="relative flex items-center gap-3 text-white">
        <span>{context?.name}</span>

        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <IconDown />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 -bottom-10 mt-2 w-32 bg-white text-black rounded-md shadow-lg z-10">
            <button
              onClick={handleLogout}
              className="w-full text-center px-4 py-2 hover:bg-gray-100 rounded-md flex gap-2 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                />
              </svg>
              Logout
            </button>
            {!isLoggedIn && <Navigate to="/login" />}
          </div>
        )}
      </div>
    </header>
  );
}
