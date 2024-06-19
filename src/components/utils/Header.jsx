import { Link } from "react-router-dom";
import { IconInstagram, MenuHamburguer } from "../../assets/Icons";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black">
      <header className="max-w-6xl px-4 mx-auto flex justify-between items-center py-5">
        <Link to={"/"} className="text-3xl text-white font-['Helvetica']">
          BDW
        </Link>
        <button onClick={toggleMenu}>
          <MenuHamburguer />
        </button>
      </header>
      <div
        className={`fixed inset-0 bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out py-6 z-20`}
      >
        <div className="flex justify-between max-w-6xl mx-auto px-4">
          <Link to={"/"} className="text-2xl sm:text-3xl">
            BDW
          </Link>
          <button className="text-white " onClick={toggleMenu}>
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
        <nav className="max-w-6xl mx-auto px-4 pt-8 font-['Helvetica'] grid grid-cols-2">
          <ul className="text-3xl sm:text-5xl space-y-3 font-semibold uppercase">
            <li>
              <Link
                to="/programacao"
                className="hover:text-[#83BF45] duration-300"
              >
                Programação
              </Link>
            </li>
            <li>
              <Link to="/galeria" className="hover:text-[#83BF45] duration-300">
                Galeria
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-[#83BF45] duration-300">
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/parceiros"
                className="hover:text-[#83BF45] duration-300"
              >
                Parceiros
              </Link>
            </li>
            <li>
              <Link
                to="/imprensa"
                className="hover:text-[#83BF45] duration-300"
              >
                Imprensa
              </Link>
            </li>
            <li>
              <Link to="/podcast" className="hover:text-[#83BF45] duration-300">
                Podcast
              </Link>
            </li>
            <li>
              <Link to="/apoiar" className="hover:text-[#83BF45] duration-300">
                Inspire-se
              </Link>
            </li>
            <li>
              <Link to="/equipe" className="hover:text-[#83BF45] duration-300">
                EQUIPE
              </Link>
            </li>
            <li>
              <Link to="/locais" className="hover:text-[#83BF45] duration-300">
                Locais
              </Link>
            </li>
          </ul>
          <div className="flex flex-col items-end gap-5 sm:gap-10 text-white">
            <button>PT | ENG</button>
            <a href="#" target="_blank">
              <IconInstagram />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
