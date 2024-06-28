import { useEffect, useState } from "react";
import { Login } from "../../../Utils/services";
import { ModalAddUsers } from "./ModalAddUsers";

export function AdminUsuarios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="bg-white rounded-lg p-5 space-y-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium">Configurações - Usuários</h2>
        <ModalAddUsers />
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-3 font-medium">
          <span>Nome</span>
          <span>E-mail</span>
          <span>Administrador</span>
        </div>
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-3 text-sm animate-pulse"
              >
                <span className="bg-gray-300 h-4 w-24 rounded-md"></span>
                <span className="bg-gray-300 h-4 w-36 rounded-md"></span>
                <span className="bg-gray-300 h-4 w-12 rounded-md"></span>
              </div>
            ))
          : users.map((e) => (
              <div key={e.id} className="grid grid-cols-3 text-sm">
                <span>{e.name}</span>
                <span>{e.email}</span>
                <span>{e.is_admin ? "Sim" : "Não"}</span>
              </div>
            ))}
      </div>
    </div>
  );
}
