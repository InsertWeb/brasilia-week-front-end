import { ModalAddFoto } from "./ModalAddFoto";
import ImageGalery from "../../../assets/galery/galeria1.png";

export function AdminGaleria() {
  return (
    <form className="bg-white rounded-lg p-5 space-y-5">
      <div>
        <div className="flex justify-between">
          <h3 className="text-lg font-medium">GALERIA</h3>
          <ModalAddFoto />
        </div>
        <div className="mt-4 space-y-5">
          <div className="flex gap-3 text-sm items-center">
            <img
              src={ImageGalery}
              alt=""
              className="w-16 h-16 object-cover rounded-lg"
            />
            <p className="border-r-2 pr-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ullam ex tenetur iusto at inventore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ullam ex tenetur iusto at inventore.
            </p>
          </div>
        </div>
      </div>
      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </form>
  );
}
