import { AdminBanner } from "./AdminBanner";
import { AdminSobre } from "./AdminSobre";
import { AdminProgramacao } from "./Programacao";
import { AdminGaleria } from "./Galeria";
import { AdminParceiros } from "./Parceiros";
import { AdminPatrocinadores } from "./AdminPatrocinadores";

export function HomePage() {
  return (
    <div className="px-8 py-5 bg-zinc-50">
      <h2 className="text-2xl font-medium pb-5">
        Configurações - Página Inicial
      </h2>
      <AdminBanner />
      <AdminSobre />
      <AdminProgramacao />
      <AdminGaleria />
      <AdminParceiros />
      <AdminPatrocinadores />
    </div>
  );
}
