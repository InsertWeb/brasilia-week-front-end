import { ModalAddParceiros } from "./ModalAddParceiros";
import ImageGalery from "../../../assets/galery/galeria1.png";

export function AdminParceiros() {
  return (
    <form className="bg-white rounded-lg p-5 space-y-5">
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium">Configurações - PARCEIROS</h2>
          <ModalAddParceiros />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-4">
          <label className="flex flex-col gap-1">
            <span>Texto botão (PT)</span>
            <input
              type="text"
              placeholder="Texto do Botão"
              className="bg-zinc-50 px-5 py-1 rounded-lg"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>Texto botão (EN)</span>
            <input
              type="text"
              placeholder="Button Text"
              className="bg-zinc-50 px-5 py-1 rounded-lg"
            />
          </label>
        </div>

        <div className="mt-4 space-y-5">
          <div className="flex gap-3 text-sm items-center">
            <img
              src={ImageGalery}
              alt=""
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <span>Name lorem</span>
              <div className="grid grid-cols-2 gap-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus ullam ex tenetur iusto at inventore.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus ullam ex tenetur iusto at inventore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </form>
  );
}
