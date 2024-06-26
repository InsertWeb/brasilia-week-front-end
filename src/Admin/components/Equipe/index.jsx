import { ModalAddEquipe } from "./ModalAddEquipe";
import { CardEquipe } from "../../../components/equipe-components/CardEquipe";

export function AdminEquipe() {
  return (
    <form className="bg-white rounded-lg p-5 space-y-5">
      <div>
        <div className="flex justify-between">
          <h3 className="text-lg font-medium uppercase">Equipe</h3>
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
