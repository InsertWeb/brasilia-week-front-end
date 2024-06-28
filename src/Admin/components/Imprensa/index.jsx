import { ModalAddNotices } from "./ModalAddNotices";
import { CardImprensa } from "../../../components/imprensa-components/CardImprensa";
import { confirmAlert } from "react-confirm-alert";
import { PageConfig } from "../../../Utils/services";
import { useEffect, useState } from "react";

export function AdminImprensa() {
  const [isLoading, setIsLoading] = useState(null);
  const [notices, setNotices] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    getNotices();
  }, []);

  async function getNotices() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getImprensa();
        if (response && response.status === 200) {
          setNotices(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  }

  function openEditEvent(e) {
    setNotice(e);
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
              await PageConfig.deleteImprensa(id);
              getNotices();
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
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium">Configurações - IMPRENSA</h2>
          <ModalAddNotices
            notice={notice}
            isOpen={isOpen}
            reload={getNotices}
            setIsOpen={setIsOpen}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-3 gap-5 py-4">
            <div className="space-y-4 animate-pulse">
              <div className="relative">
                <div className="w-full h-72 bg-gray-300 rounded-xl"></div>
                <div className="absolute top-4 left-4 bg-gray-200 w-32 h-8 rounded-md"></div>
              </div>
              <div className="w-1/2 h-8 bg-gray-300 rounded-md"></div>
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-300 rounded-md"></div>
                <div className="w-5/6 h-4 bg-gray-300 rounded-md"></div>
                <div className="w-4/6 h-4 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-5 py-4">
            {notices?.data.map((e) => (
              <div key={e.id}>
                <CardImprensa data={e} />
                <div className="flex justify-between text-sm pt-5">
                  <button
                    className="font-medium hover:text-gray-500 duration-300 w-full"
                    type="button"
                    onClick={() => openEditEvent(e)}
                  >
                    Editar
                  </button>
                  <button
                    className="font-medium hover:text-red-500 duration-300 w-full"
                    type="button"
                    onClick={() => deleteEvent(e.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
