import { useEffect, useState } from "react";
import { ModalAddEvento } from "./ModalAddEvento";
import { PageConfig } from "../../../Utils/services";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert";

export function AdminProgramacao() {
  const [isLoading, setIsLoading] = useState(null);
  const [eventos, setEventos] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEventos();
  }, []);

  async function getEventos() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getEventosProgramacaoPage();
        if (response && response.status === 200) {
          setEventos(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  }

  function openEditEvent(e) {
    setEvent(e);
    setIsOpen(true);
    setIsEdit(true);
  }

  async function deleteDeskIndividual(id) {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza que deseja excluir o evento?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            try {
              await PageConfig.deleteEventosProgramacaoPage(id);
              getEventos();
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
      <h2 className="text-2xl font-medium">Configurações - PROGRAMAÇÃO</h2>

      <div>
        <div className="flex justify-between">
          <h4 className="text-lg">Lista de Eventos</h4>
          <ModalAddEvento
            event={event}
            isOpen={isOpen}
            reload={getEventos}
            setIsOpen={setIsOpen}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </div>
        {isLoading ? (
          <div className="grid grid-cols-5 gap-5 items-center animate-pulse">
            <div className="w-full h-24 bg-gray-300 rounded"></div>
            <div className="flex flex-col">
              <div className="w-32 h-4 bg-gray-300 rounded"></div>
              <div className="w-32 h-4 bg-gray-300 rounded mt-1"></div>
            </div>
            <div className="flex flex-col">
              <div className="w-64 h-4 bg-gray-300 rounded"></div>
              <div className="w-64 h-4 bg-gray-300 rounded mt-1"></div>
            </div>
            <div className="flex flex-col">
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
              <div className="w-20 h-4 bg-gray-300 rounded mt-1"></div>
            </div>
            <div className="flex flex-col">
              <div className="w-20 h-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {eventos?.data.map((e) => (
              <div className="grid grid-cols-5 gap-5 items-center">
                <img
                  src={e.filePath ?? "/bgBlack.png"}
                  alt={e.title_pt}
                  className="w-full h-24 object-cover"
                />
                <div className="flex flex-col">
                  <span>{e.title_pt}</span>
                  <span>{e.title_en}</span>
                </div>
                <div className="flex flex-col">
                  <span>{e.descricao_pt}</span>
                  <span>{e.descricao_en}</span>
                </div>
                <div className="flex flex-col">
                  <span>{moment(e.date).format("DD/MM")}</span>
                  <span>{e.horario}</span>
                </div>
                <div className="flex flex-col text-sm">
                  <button
                    className="font-medium hover:text-gray-500 duration-300"
                    type="button"
                    onClick={() => openEditEvent(e)}
                  >
                    Editar
                  </button>
                  <button
                    className="font-medium hover:text-red-500 duration-300"
                    type="button"
                    onClick={() => deleteDeskIndividual(e.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </div>
  );
}
