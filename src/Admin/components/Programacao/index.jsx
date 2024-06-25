import { ModalAddEvento } from "./ModalAddEvento";

export function AdminProgramacao() {
  return (
    <form className="bg-white rounded-lg p-5 space-y-5">
      <h3 className="text-lg font-medium">PROGRAMAÇÃO</h3>

      <div>
        <div className="flex justify-between">
          <h4 className="text-lg">Lista de Eventos</h4>
          <ModalAddEvento />
        </div>
        <div className="grid grid-cols-2 text-sm">
          <ul>
            <li>Evento 1</li>
            <li>Evento 1</li>
            <li>Evento 1</li>
            <li>Evento 1</li>
          </ul>
          <ul>
            <li>Evento 1</li>
            <li>Evento 1</li>
            <li>Evento 1</li>
            <li>Evento 1</li>
          </ul>
        </div>
      </div>
      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </form>
  );
}
