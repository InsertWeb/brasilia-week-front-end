import { Link } from "react-router-dom";
import FotoUser from "../../assets/parceiros1.png";

export function NavMenu() {
  return (
    <div className="max-w-56 w-full h-screen">
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
            <Link
              to={"/admin?page=banner"}
              className="w-full px-5 py-2 text-start uppercase duration-300 hover:bg-[#83BF45] hover:text-white"
            >
              Banner Principal
            </Link>
          </li>
          <Link to={"/admin?page=programacao"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Programação
            </li>
          </Link>
          <Link to={"/admin?page=galeria"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Galeria
            </li>
          </Link>
          <Link to={"/admin?page=sobre"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Sobre
            </li>
          </Link>
          <Link to={"/admin?page=parceiros"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Parceiros
            </li>
          </Link>
          <Link to={"/admin?page=imprensa"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Imprensa
            </li>
          </Link>
          <Link to={"/admin?page=podcast"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Podcast
            </li>
          </Link>
          <Link to={"/admin?page=inspire"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Inspire-se
            </li>
          </Link>
          <Link to={"/admin?page=equipe"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Equipe
            </li>
          </Link>
          <Link to={"/admin?page=locais"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Locais
            </li>
          </Link>
          <Link to={"/admin?page=patrocinadores"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              Patrocinadores
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
