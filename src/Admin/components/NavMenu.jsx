import { Link } from "react-router-dom";
import { useGetInfos } from "../../Utils/useGetInfos";

export function NavMenu() {
  const context = useGetInfos();

  return (
    <div className="max-w-56 w-full h-screen">
      <div className="bg-[url('/bgMain.png')] bg-cover bg-center w-full">
        <div className="flex flex-col items-center py-5 bg-black/90">
          <span className="text-white font-medium text-center">
            {context?.name}
          </span>
          <span className="text-white text-sm">{context?.email}</span>
        </div>
      </div>
      <nav className="bg-zinc-50 h-full uppercase p-4">
        <ul>
          <Link to={"/admin"}>
            <li
              className="w-full px-5 py-2 text-start uppercase duration-300
              hover:bg-[#83BF45] hover:text-white"
            >
              Usuários
            </li>
          </Link>
          <Link to={"/admin?page=banner"}>
            <li
              className="w-full px-5 py-2 text-start uppercase duration-300
              hover:bg-[#83BF45] hover:text-white"
            >
              Banner Principal
            </li>
          </Link>
          <Link to={"/admin?page=programacao"}>
            <li className="hover:bg-[#83BF45] hover:text-white py-2 px-5 duration-300">
              #BDW 24 em movimento
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
              QUERO APOIAR
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
