import { ModalAddLocal } from "./ModalAddLocal";
import { IconLocalization, IconSite } from "../../../assets/Icons";
import { useEffect, useState } from "react";
import { PageConfig } from "../../../Utils/services";
import { confirmAlert } from "react-confirm-alert";

export function AdminLocais() {
  const [isLoading, setIsLoading] = useState(null);
  const [locais, setLocais] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const lang = localStorage.getItem("lang");
  const [isOpen, setIsOpen] = useState(false);
  const [local, setLocal] = useState([]);

  useEffect(() => {
    getLocais();
  }, []);

  async function getLocais() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getLocais();
        if (response && response.status === 200) {
          setLocais(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  }

  function openEditLocal(e) {
    setLocal(e);
    setIsOpen(true);
    setIsEdit(true);
  }

  async function deleteLocal(id) {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza que deseja excluir?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            try {
              await PageConfig.deleteLocais(id);
              getLocais();
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
          <h2 className="text-2xl font-medium">Configurações - Locais</h2>
          <ModalAddLocal
            local={local}
            isOpen={isOpen}
            reload={getLocais}
            setIsOpen={setIsOpen}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </div>
        <div className="mt-4 space-y-5">
          {isLoading ? (
            <div className="animate-pulse">
              <div className="mb-4">
                <div className="grid grid-cols-2">
                  <div className="space-y-1">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="text-[#83BF45] flex gap-2 items-center">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <span className="h-4 bg-gray-200 rounded w-1/2"></span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <span className="h-4 bg-gray-200 rounded w-1/2"></span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm pt-5">
                  <div className="h-6 bg-gray-200 rounded w-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {locais?.data.map((e) => (
                <div key={e.id} className="text-sm sm:text-base">
                  <div className="space-y-2">
                    <h3 className="sm:text-xl">
                      {lang === "en" ? e.title_en : e.title_pt}
                    </h3>
                    <div className="text-[#83BF45] flex flex-col sm:flex-row gap-2 items-center">
                      <IconLocalization />
                      <span className="text-black">
                        {lang === "en" ? e?.descricao_en : e?.descricao_pt}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#83BF45"
                        class="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                      <span>{e.website}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm pt-5">
                    <button
                      className="font-medium hover:text-gray-500 duration-300 w-full"
                      type="button"
                      onClick={() => openEditLocal(e)}
                    >
                      Editar
                    </button>
                    <button
                      className="font-medium hover:text-red-500 duration-300 w-full"
                      type="button"
                      onClick={() => deleteLocal(e.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
