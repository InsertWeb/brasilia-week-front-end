import { Link } from "react-router-dom";
import FotoUser from "../../assets/parceiros1.png";

export function NavMenu() {
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
      <nav className="bg-zinc-50 h-screen uppercase p-4">
        <ul>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Dashboard
            </li>
          </Link>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Sobre
            </li>
          </Link>
          <Link>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Homepage
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
