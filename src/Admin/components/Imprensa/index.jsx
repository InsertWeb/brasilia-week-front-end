import { ModalAddNotices } from "./ModalAddNotices";
import { CardImprensa } from "../../../components/imprensa-components/CardImprensa";

export function AdminImprensa() {
  return (
    <div className="bg-white rounded-lg p-5 space-y-5">
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium">Configurações - IMPRENSA</h2>
          <ModalAddNotices />
        </div>

        <div className="grid grid-cols-4 py-4">
          <CardImprensa />
        </div>
      </div>
    </div>
  );
}
