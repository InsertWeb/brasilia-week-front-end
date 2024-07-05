import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconInstagram, MenuHamburguer } from "../../assets/Icons";
import { useState } from "react";
import { TogleLanguage } from "./TogleLanguage";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black">
      <header className="max-w-6xl px-4 mx-auto flex justify-between items-center py-5">
        <Link to={"/"} className="text-3xl text-white fontHelveticaLight">
          BDW
        </Link>
        <button onClick={toggleMenu}>
          <MenuHamburguer />
        </button>
      </header>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 right-0 bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out py-6 z-40 w-full md:w-1/4 lg:w-1/6`}
      >
        <div className="flex justify-between max-w-6xl mx-auto px-4">
          <span className="text-2xl lg:text-3xl">BDW</span>
          <button
            className="text-white "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3.48199"
                width="38.8537"
                height="4.92429"
                transform="rotate(45 3.48199 0)"
                fill="white"
              />
              <rect
                x="30.9557"
                y="3.482"
                width="38.8537"
                height="4.92429"
                transform="rotate(135 30.9557 3.482)"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <nav className="max-w-6xl mx-auto px-4 pt-8 fontHelveticaLight grid grid-cols-2">
          <ul className="text-xl md:text-xl lg:2xl space-y-3 font-semibold uppercase">
            <li>
              <Link
                to="/programacao"
                className="hover:text-[#83BF45] duration-300"
              >
                Programação
              </Link>
            </li>
            {/*  <li>
              <Link to="/galeria" className="hover:text-[#83BF45] duration-300">
                Galeria
              </Link>
            </li> */}
            <li>
              <Link to="/sobre" className="hover:text-[#83BF45] duration-300">
                Sobre
              </Link>
            </li>
            {/* <li>
              <Link
                to="/parceiros"
                className="hover:text-[#83BF45] duration-300"
              >
                Parceiros
              </Link>
            </li> */}
            <li>
              <Link
                to="/imprensa"
                className="hover:text-[#83BF45] duration-300"
              >
                Imprensa
              </Link>
            </li>
            {/* <li>
              <Link to="/podcast" className="hover:text-[#83BF45] duration-300">
                Podcast
              </Link>
            </li> */}
            <li>
              <Link to="/apoiar" className="hover:text-[#83BF45] duration-300">
                QUERO APOIAR
              </Link>
            </li>
            <li>
              <Link to="/equipe" className="hover:text-[#83BF45] duration-300">
                EQUIPE
              </Link>
            </li>
            <li>
              <Link to="/locais" className="hover:text-[#83BF45] duration-300">
                Circuito BDW24
              </Link>
            </li>
          </ul>
          {/*  <div className="flex flex-col items-end gap-5 sm:gap-10 text-white">
            <a href="#" target="_blank">
              <IconInstagram />
            </a>
          </div> */}
        </nav>
      </div>
    </div>
  );
}
