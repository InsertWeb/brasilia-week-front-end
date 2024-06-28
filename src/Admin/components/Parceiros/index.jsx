import { ModalAddParceiros } from "./ModalAddParceiros";
import ImageGalery from "../../../assets/galery/galeria1.png";
import { useEffect, useState } from "react";
import { PageConfig } from "../../../Utils/services";
import { confirmAlert } from "react-confirm-alert";

export function AdminParceiros() {
  const [isLoading, setIsLoading] = useState(null);
  const [parceiros, setParceiros] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [parceiro, setParceiro] = useState([]);

  useEffect(() => {
    getParceiros();
  }, []);

  async function getParceiros() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getParceiros();
        if (response && response.status === 200) {
          setParceiros(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  }

  function openEditEvent(e) {
    setParceiro(e);
    setIsOpen(true);
    setIsEdit(true);
  }

  async function deleteEvent(id) {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza que deseja excluir o evento?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            try {
              await PageConfig.deleteParceiros(id);
              getParceiros();
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
    <div className="bg-white rounded-lg p-5 space-y-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium">Configurações - PARCEIROS</h2>
        <ModalAddParceiros
          parceiro={parceiro}
          isOpen={isOpen}
          reload={getParceiros}
          setIsOpen={setIsOpen}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </div>
      <table className="text-center rounded-xl overflow-hidden">
        <body>
          <tr className="text-sm font-medium bg-zinc-100 ">
            <td className="py-2 ">Foto</td>
            <td className="py-2">Nome</td>
            <td className="py-2">Rede Social</td>
            <td className="py-2">Título(PT)</td>
            <td className="py-2">Título(EN)</td>
            <td className="py-2">Descrição(PT)</td>
            <td className="py-2">Descrição(EN)</td>
            <td className="py-2"></td>
          </tr>
          {isLoading ? (
            Array.from({ length: 5 }).map((e, index) => (
              <tr key={index} className="align-middle text-sm animate-pulse">
                <td className="py-2">
                  <div className="w-24 h-16 bg-gray-300 rounded-lg"></div>
                </td>
                <td className="px-4 py-2">
                  <div className="w-24 h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="px-4 py-2">
                  <div className="w-24 h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="px-4 py-2">
                  <div className="w-24 h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="px-4 py-2">
                  <div className="w-24 h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="px-4 py-2">
                  <div className="w-24 h-4 bg-gray-300 rounded"></div>
                </td>

                <td className="px-4 py-2">
                  <div className="space-y-2">
                    <div className="w-16 h-6 bg-gray-300 rounded"></div>
                    <div className="w-16 h-6 bg-gray-300 rounded"></div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <>
              {parceiros?.data.map((e) => (
                <tr key={e.id} className="align-middle text-sm">
                  <td className="py-2">
                    <img
                      src={e.filePath ?? ImageGalery}
                      alt={e.nome}
                      className="w-24 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-2">{e.nome}</td>
                  <td className="px-4 py-2">{e.rede_social}</td>
                  <td className="px-4 py-2">{e.title_pt}</td>
                  <td className="px-4 py-2">{e.title_en}</td>
                  <td className="px-4 py-2">{e.descricao_pt}</td>
                  <td className="px-4 py-2">{e.descricao_en}</td>
                  <td className="px-4 py-2 font-medium">
                    <button
                      className="text-xs font-medium hover:text-gray-500 duration-300"
                      type="button"
                      onClick={() => openEditEvent(e)}
                    >
                      Editar
                    </button>
                    <button
                      className="text-xs font-medium hover:text-red-500 duration-300"
                      type="button"
                      onClick={() => deleteEvent(e.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </body>
      </table>
    </div>
  );
}
