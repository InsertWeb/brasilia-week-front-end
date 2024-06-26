import { AdminBanner } from "./AdminBanner";
import { AdminSobre } from "./AdminSobre";
import { AdminProgramacao } from "./Programacao";
import { AdminGaleria } from "./Galeria";
import { AdminParceiros } from "./Parceiros";
import { AdminPatrocinadores } from "./AdminPatrocinadores";
import { useLocation } from "react-router";
import { AdminImprensa } from "./Imprensa";
import { AdminPodcast } from "./Podcast";
import { AdminInspire } from "./AdminInspire";
import { AdminEquipe } from "./Equipe";
import { AdminLocais } from "./Locais";
import { AdminUsuarios } from "./Usuarios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function HomePage() {
  const query = useQuery();
  const page = query.get("page");

  return (
    <div className="px-8 py-5 bg-zinc-50 min-h-screen h-full">
      {!page && <AdminUsuarios />}
      {page === "banner" && <AdminBanner />}
      {page === "sobre" && <AdminSobre />}
      {page === "programacao" && <AdminProgramacao />}
      {page === "galeria" && <AdminGaleria />}
      {page === "parceiros" && <AdminParceiros />}
      {page === "patrocinadores" && <AdminPatrocinadores />}
      {page === "imprensa" && <AdminImprensa />}
      {page === "podcast" && <AdminPodcast />}
      {page === "inspire" && <AdminInspire />}
      {page === "equipe" && <AdminEquipe />}
      {page === "locais" && <AdminLocais />}
    </div>
  );
}
