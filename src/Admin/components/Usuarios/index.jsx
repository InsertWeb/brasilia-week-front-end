import { ModalAddUsers } from "./ModalAddUsers";

export function AdminUsuarios() {
  return (
    <div className="bg-white rounded-lg p-5 space-y-5">
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">Usuários</h3>
        <ModalAddUsers />
      </div>
      <div className="text-sm">
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </div>
  );
}
