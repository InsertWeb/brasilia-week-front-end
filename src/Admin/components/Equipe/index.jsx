import { ModalAddEquipe } from "./ModalAddEquipe";
import { CardEquipe } from "../../../components/equipe-components/CardEquipe";
import { PageConfig } from "../../../Utils/services";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";

export function AdminEquipe() {
  const [isLoading, setIsLoading] = useState(null);
  const [equipes, setEquipes] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [equipe, setEquipe] = useState([]);

  useEffect(() => {
    getEquipe();
  }, []);

  async function getEquipe() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getEquipes();
        if (response && response.status === 200) {
          setEquipes(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  }

  function openEditEquipe(e) {
    setEquipe(e);
    setIsOpen(true);
    setIsEdit(true);
  }

  async function deleteEquipe(id) {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza que deseja excluir?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            try {
              await PageConfig.deleteEquipes(id);
              getEquipe();
            } catch {
              toast.error("Erro ao Deletar Equipe");
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
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <h2 className="text-2xl font-medium">Configurações - Equipe</h2>

          <ModalAddEquipe
            equipe={equipe}
            isOpen={isOpen}
            reload={getEquipe}
            setIsOpen={setIsOpen}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </div>
        {isLoading ? (
          <div className="grid sm:grid-cols-3 gap-5 py-4">
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
          <div className="grid sm:grid-cols-3 gap-5 py-4">
            {equipes?.data.map((e) => (
              <div key={e.id}>
                <CardEquipe data={e} />
                <div className="flex justify-between text-sm pt-5">
                  <button
                    className="font-medium hover:text-gray-500 duration-300 w-full"
                    type="button"
                    onClick={() => openEditEquipe(e)}
                  >
                    Editar
                  </button>
                  <button
                    className="font-medium hover:text-red-500 duration-300 w-full"
                    type="button"
                    onClick={() => deleteEquipe(e.id)}
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
