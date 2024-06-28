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
        <div className="flex justify-between">
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
                <div key={e.id}>
                  <div className="space-y-2">
                    <h3 className="text-xl">
                      {lang === "en" ? e.title_en : e.title_pt}
                    </h3>
                    <div className="text-[#83BF45] flex gap-2 items-center">
                      <IconLocalization />
                      <span className="text-black">
                        {lang === "en" ? e?.descricao_en : e?.descricao_pt}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <IconSite />
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
