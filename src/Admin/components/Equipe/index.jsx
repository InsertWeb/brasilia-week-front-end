import { ModalAddEquipe } from "./ModalAddEquipe";
import { CardEquipe } from "../../../components/equipe-components/CardEquipe";

export function AdminEquipe() {
  return (
    <form className="bg-white rounded-lg p-5 space-y-5">
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium">Configurações - Equipe</h2>

          <ModalAddEquipe />
        </div>

        <div className="grid grid-cols-6 py-4">
          <CardEquipe />
        </div>
      </div>
      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </form>
  );
}
