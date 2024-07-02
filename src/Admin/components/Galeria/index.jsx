import { ModalAddFoto } from "./ModalAddFoto";
import ImageGalery from "../../../assets/galery/galeria1.png";
import { useEffect, useState } from "react";
import { PageConfig } from "../../../Utils/services";
import { confirmAlert } from "react-confirm-alert";

export function AdminGaleria() {
  const [isLoading, setIsLoading] = useState(null);
  const [galeriaImages, setGaleriaImages] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [galeriaImage, setGaleriaImage] = useState([]);

  useEffect(() => {
    getGaleriaImages();
  }, []);

  async function getGaleriaImages() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getGaleria();
        if (response && response.status === 200) {
          setGaleriaImages(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  }

  function openEditGaleriaImage(e) {
    setGaleriaImage(e);
    setIsOpen(true);
    setIsEdit(true);
  }

  async function deleteImageGaleria(id) {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza que deseja excluir essa foto?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            try {
              await PageConfig.deleteGaleria(id);
              getGaleriaImages();
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
        <div className="flex flex-col gap-5 sm:flex-row justify-between">
          <h2 className="text-2xl font-medium">Configurações - GALERIA</h2>
          <ModalAddFoto
            galeriaImage={galeriaImage}
            isOpen={isOpen}
            reload={getGaleriaImages}
            setIsOpen={setIsOpen}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </div>
        <div className="space-y-5 pt-4">
          {isLoading ? (
            <div className="grid grid-cols-4 gap-5 items-center animate-pulse">
              <div className="w-full h-16 bg-gray-300 rounded-lg"></div>
              <div className="w-full h-8 bg-gray-300 rounded"></div>
              <div className="w-full h-8 bg-gray-300 rounded"></div>
              <div className="flex flex-col text-sm">
                <div className="w-20 h-8 bg-gray-300 rounded mt-1"></div>
                <div className="w-20 h-8 bg-gray-300 rounded mt-1"></div>
              </div>
            </div>
          ) : (
            <>
              {galeriaImages?.data.map((e) => (
                <div
                  className="grid sm:grid-cols-4 text-center sm:text-start gap-5 items-center"
                  key={e.id}
                >
                  <img
                    src={e.filePath ?? ImageGalery}
                    alt=""
                    className="w-full h-16 object-cover rounded-lg"
                  />
                  <p>{e.title_pt}</p>
                  <p>{e.title_en}</p>
                  <div className="flex flex-col text-sm">
                    <button
                      className="font-medium hover:text-gray-500 duration-300"
                      type="button"
                      onClick={() => openEditGaleriaImage(e)}
                    >
                      Editar
                    </button>
                    <button
                      className="font-medium hover:text-red-500 duration-300"
                      type="button"
                      onClick={() => deleteImageGaleria(e.id)}
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
