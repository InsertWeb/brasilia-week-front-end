import { ModalAddPodcast } from "./ModalAddPodcast";
import { CardPodcast } from "../../../components/podcast-components/CardPodcast";

export function AdminPodcast() {
  return (
    <form className="bg-white rounded-lg p-5 space-y-5">
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium">Configurações - Podcast</h2>
          <ModalAddPodcast />
        </div>

        <div className="grid grid-cols-4 py-4">
          <CardPodcast />
        </div>
      </div>
      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </form>
  );
}
