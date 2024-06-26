import { useEffect, useState } from "react";
import { Login } from "../../../Utils/services";
import { ModalAddUsers } from "./ModalAddUsers";

export function AdminUsuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllClients();
  }, []);

  async function getAllClients() {
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
    }
  }

  return (
    <div className="bg-white rounded-lg p-5 space-y-5">
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">Usuários</h3>
        <ModalAddUsers />
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-3 font-medium">
          <span>Nome</span>
          <span>E-mail</span>
          <span>Administrador</span>
        </div>
        {users.map((e) => (
          <div className="grid grid-cols-3 text-sm">
            <span>{e.name}</span>
            <span>{e.email}</span>
            <span>{e.is_admin ? "Sim" : "Não"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
