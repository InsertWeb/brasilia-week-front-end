import { useState } from "react";
import { IconCircle, IconInstagram, MenuHamburguer } from "../../assets/Icons";
import { Link } from "react-router-dom";

export function BannerMain({ lang, data }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const backgroundImageUrl = data?.image ?? "/bgBlack.png";

  function downloadCatalogo() {
    const link = document.createElement("a");
    link.href = "../../assets/bdw24_catalago.pdf";
    link.download = "catalogo.pdf";
    link.click();
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
      className={`bg-cover bg-center relative overflow-hidden`}
    >
      <div className="absolute top-1/3 left-1/3 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <IconCircle />
      </div>
      <header className="max-w-6xl px-4 mx-auto flex justify-between items-center py-5">
        <Link to={"/"} className="text-3xl text-white fontHelveticaLight z-20">
          BDW
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="z-20">
          <MenuHamburguer />
        </button>
      </header>

      <div className="bg-black/40 absolute top-0 bottom-0 right-0 left-0 z-10" />
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
        <nav className="max-w-6xl mx-auto px-4 pt-8 fontHelveticaLight">
          <ul className="text-xl md:text-xl lg:text-2xl space-y-3 font-semibold uppercase">
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
            <li>
              <a onClick={downloadCatalogo} className="hover:text-[#83BF45] duration-300 cursor-pointer">
                Download  Catalogo
              </a>
            </li>
          </ul>
          {/*  <div className="flex flex-col items-end gap-5 sm:gap-10 text-white">
            <a href="#" target="_blank">
              <IconInstagram />
            </a>
          </div> */}
        </nav>
      </div>

      <main className="max-w-6xl px-4 mx-auto py-5">
        <div className="flex flex-col items-end gap-5 sm:gap-10 text-white">
          {/* <TogleLanguage /> */}
          <div className="invisible">a</div>
          <a
            href="https://www.instagram.com/bsbdesignweek/"
            className="z-20"
            target="_blank"
          >
            <IconInstagram />
          </a>
        </div>

        <div className="flex flex-col justify-center items-center text-white gap-32 py-36 text-4xl sm:text-5xl font-thin">
          <h2 className="z-20">#bdw24</h2>
          <h1 className="tracking-[20px] z-20">
            {lang === "en" ? data?.title_en : data?.title_pt}
          </h1>
        </div>
      </main>
    </div>
  );
}
