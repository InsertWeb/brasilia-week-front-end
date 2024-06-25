import { AdminBanner } from "./AdminBanner";
import { AdminSobre } from "./AdminSobre";
import { AdminProgramacao } from "./Programacao";
import { AdminGaleria } from "./Galeria";
import { AdminParceiros } from "./Parceiros";
import { AdminPatrocinadores } from "./AdminPatrocinadores";
import { useLocation } from "react-router";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function HomePage() {
  const query = useQuery();
  const page = query.get("page");

  return (
    <div className="px-8 py-5 bg-zinc-50 min-h-screen h-full">
      <h2 className="text-2xl font-medium pb-5">
        Configurações - Página Inicial
      </h2>
      {page === "banner" && <AdminBanner />}
      {page === "sobre" && <AdminSobre />}
      {page === "programacao" && <AdminProgramacao />}
      {page === "galeria" && <AdminGaleria />}
      {page === "parceiros" && <AdminParceiros />}
      {page === "patrocinadores" && <AdminPatrocinadores />}
    </div>
  );
}
