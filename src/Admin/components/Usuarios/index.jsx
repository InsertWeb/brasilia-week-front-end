import { useEffect, useState } from "react";
import { Login } from "../../../Utils/services";
import { ModalAddUsers } from "./ModalAddUsers";
import { confirmAlert } from "react-confirm-alert";

export function AdminUsuarios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getAllClients();
  }, []);

  async function getAllClients() {
    setLoading(true);
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "{}");
      if (token) {
        const response = await Login.getUsers();
        if (response.status === 200) {
          setUsers(response.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function openEditEvent(e) {
    setUser(e);
    setIsOpen(true);
    setIsEdit(true);
  }

  async function deleteEvent(id) {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza que deseja excluir esse usuário?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            try {
              await Login.DeleteUser(id);
              getAllClients();
            } catch {
              toast.error("Erro ao Deletar Evento");
            }
          },
        },
        {
          label: "Cancelar",
          onClick: () => {},
        },
      ],
    });
  }
  return (
    <div className="bg-white rounded-lg p-2 sm:p-5 space-y-5">
      <div className="flex flex-col  sm:flex-row gap-3 justify-between">
        <h2 className="text-2xl font-medium">Configurações - Usuários</h2>
        <ModalAddUsers
          user={user}
          isOpen={isOpen}
          reload={getAllClients}
          setIsOpen={setIsOpen}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-4 font-medium">
          <span className="sm:hidden block">Usuários</span>
          <span className="hidden sm:block">Nome</span>
          <span className="hidden sm:block">E-mail</span>
          <span className="hidden sm:block">Administrador</span>
        </div>
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-4 text-sm animate-pulse"
              >
                <span className="bg-gray-300 h-4 w-24 rounded-md"></span>
                <span className="bg-gray-300 h-4 w-36 rounded-md"></span>
                <span className="bg-gray-300 h-4 w-12 rounded-md"></span>
                <span className="bg-gray-300 h-4 w-12 rounded-md"></span>
              </div>
            ))
          : users.map((e) => (
              <div key={e.id} className="grid sm:grid-cols-4 text-sm">
                <span>{e.name}</span>
                <span>{e.email}</span>
                <span>{e.is_admin ? "Sim" : "Não"}</span>
                <div className="flex gap-5">
                  <button
                    onClick={() => openEditEvent(e)}
                    className="hover:text-gray-500"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteEvent(e.id)}
                    className="hover:text-red-500"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
