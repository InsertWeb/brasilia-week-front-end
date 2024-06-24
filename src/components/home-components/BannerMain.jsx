import { useState } from "react";
import { IconCircle, IconInstagram, MenuHamburguer } from "../../assets/Icons";
import { Link } from "react-router-dom";

export function BannerMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[url('/bgMain.png')] bg-cover bg-center relative overflow-hidden">
      <div className="absolute top-1/3 left-1/3 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <IconCircle />
      </div>
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

      <main className="max-w-6xl px-4 mx-auto py-5">
        <div className="flex flex-col items-end gap-5 sm:gap-10 text-white">
          <button>PT | ENG</button>
          <a href="#" target="_blank">
            <IconInstagram />
          </a>
        </div>

        <div className="flex flex-col justify-center items-center text-white gap-32 py-36 text-4xl sm:text-5xl font-thin">
          <h2>#bdw24</h2>
          <h1 className="tracking-[20px]">BRASÍLIA DESIGN WEEK</h1>
        </div>
      </main>
    </div>
  );
}
