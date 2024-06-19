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
        <span className="text-3xl text-white font-['Helvetica']">BDW</span>
        <button onClick={toggleMenu}>
          <MenuHamburguer />
        </button>
      </header>
      <div
        className={`fixed inset-0 bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out py-6`}
      >
        <div className="flex justify-between max-w-6xl mx-auto px-4">
          <span className="text-2xl sm:text-3xl">BDW</span>
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
              <a href="#home" className="hover:text-[#83BF45] duration-300">
                Galeria
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-[#83BF45] duration-300">
                Sobre
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-[#83BF45] duration-300">
                Parceiros
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-[#83BF45] duration-300">
                Imprensa
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-[#83BF45] duration-300">
                Podcast
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-[#83BF45] duration-300">
                Inspire-se
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-[#83BF45] duration-300">
                EQUIPE
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-[#83BF45] duration-300">
                Locais
              </a>
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
