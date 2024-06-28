import { ModalAddPodcast } from "./ModalAddPodcast";
import { CardPodcast } from "../../../components/podcast-components/CardPodcast";
import { useEffect, useState } from "react";
import { PageConfig } from "../../../Utils/services";
import { confirmAlert } from "react-confirm-alert";

export function AdminPodcast() {
  const [isLoading, setIsLoading] = useState(null);
  const [podcasts, setPodcasts] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [podcast, setPodcast] = useState([]);

  useEffect(() => {
    getPodcasts();
  }, []);

  async function getPodcasts() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getPodCast();
        if (response && response.status === 200) {
          setPodcasts(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  }

  function openEditPodcast(e) {
    setPodcast(e);
    setIsOpen(true);
    setIsEdit(true);
  }

  async function deletePodcast(id) {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza que deseja excluir esse Podcast?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            try {
              await PageConfig.deletePodCast(id);
              getPodcasts();
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
          <h2 className="text-2xl font-medium">Configurações - Podcast</h2>
          <ModalAddPodcast
            podcast={podcast}
            isOpen={isOpen}
            reload={getPodcasts}
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
            {podcasts?.data.map((e) => (
              <div key={e.id}>
                <CardPodcast data={e} />
                <div className="flex justify-between text-sm pt-5">
                  <button
                    className="font-medium hover:text-gray-500 duration-300 w-full"
                    type="button"
                    onClick={() => openEditPodcast(e)}
                  >
                    Editar
                  </button>
                  <button
                    className="font-medium hover:text-red-500 duration-300 w-full"
                    type="button"
                    onClick={() => deletePodcast(e.id)}
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
