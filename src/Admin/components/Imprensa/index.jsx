import { ModalAddNotices } from "./ModalAddNotices";
import { CardImprensa } from "../../../components/imprensa-components/CardImprensa";

export function AdminImprensa() {
  return (
    <form className="bg-white rounded-lg p-5 space-y-5">
      <div>
        <div className="flex justify-between">
          <h3 className="text-lg font-medium">IMPRENSA</h3>
          <ModalAddNotices />
        </div>

        <div className="grid grid-cols-4 py-4">
          <CardImprensa />
        </div>
      </div>
      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </form>
  );
}
