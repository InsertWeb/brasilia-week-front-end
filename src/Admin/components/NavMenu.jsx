import { Link } from "react-router-dom";
import FotoUser from "../../assets/parceiros1.png";
import { useState } from "react";

export function NavMenu() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className="max-w-56 w-full">
      <div className="bg-[url('/bgMain.png')] bg-cover bg-center w-full">
        <div className="flex flex-col items-center py-3 bg-black/40">
          <img src={FotoUser} alt="" className="w-20 rounded-full" />
          <button className="text-white pt-2 font-medium text-sm">
            Nome Usuario
          </button>
        </div>
      </div>
      <nav className="bg-zinc-50 h-full uppercase p-4">
        <ul>
          <li>
            <button
              onClick={toggleSubmenu}
              className="w-full px-5 py-2 text-start uppercase duration-300 hover:bg-[#83BF45] hover:text-white"
            >
              Página Inicial
            </button>
            {isSubmenuOpen && (
              <ul className="pl-4 transition-all duration-300 ease-in-out text-sm">
                <Link>
                  <li className="hover:text-[#83BF45] py-1 px-4 duration-300">
                    Banner
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#83BF45] py-1 px-4 duration-300">
                    Programação
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#83BF45] py-1 px-4 duration-300">
                    Galeria
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#83BF45] py-1 px-4 duration-300">
                    Sobre
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#83BF45] py-1 px-4 duration-300">
                    Parceiros
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#83BF45] py-1 px-4 duration-300">
                    Imprensa
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#83BF45] py-1 px-4 duration-300">
                    Podcast
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#83BF45] py-1 px-4 duration-300">
                    Inspire-se
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#83BF45] py-1 px-4 duration-300">
                    Equipe
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#83BF45] py-1 px-4 duration-300">
                    Locais
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Programação
            </li>
          </Link>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Galeria
            </li>
          </Link>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Sobre
            </li>
          </Link>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Parceiros
            </li>
          </Link>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Imprensa
            </li>
          </Link>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Podcast
            </li>
          </Link>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Inspire-se
            </li>
          </Link>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Equipe
            </li>
          </Link>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Locais
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
