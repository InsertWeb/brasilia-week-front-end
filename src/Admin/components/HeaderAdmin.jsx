import { Link } from "react-router-dom";
import { IconDown, MenuHamburguer } from "../../assets/Icons";
import FotoUser from "../../assets/parceiros1.png";

export function HeaderAdmin({ openMenu, setIsOpenMenu }) {
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
      <div className="flex items-center gap-3 text-white">
        <span>Nome User</span>
        <img src={FotoUser} alt="" className="w-10 h-10 rounded-full" />
        <button>
          <IconDown />
        </button>
      </div>
    </header>
  );
}
