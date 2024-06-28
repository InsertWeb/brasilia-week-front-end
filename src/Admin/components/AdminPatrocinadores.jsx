import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PageConfig } from "../../Utils/services";
import { confirmAlert } from "react-confirm-alert";

export function AdminPatrocinadores() {
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [patrocinadores, setPatrocinadores] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (payload) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const formData = new FormData();

        for (const key in payload) {
          if (key !== "img") {
            formData.append(key, payload[key]);
          }
        }

        if (payload.img && payload.img.length > 0) {
          formData.append("img", payload.img[0]);
        }

        const response = await PageConfig.addPatrocinadores(formData);
        getPatrocinadores();
        reset();
        setImagePreview(null);
      }
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPatrocinadores();
  }, []);

  async function getPatrocinadores() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getPatrocinadores();
        if (response && response.status === 200) {
          setPatrocinadores(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function deletepatrocinador(id) {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza que deseja excluir esse Patrocinador?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            try {
              await PageConfig.deletePatrocinadores(id);
              getPatrocinadores();
            } catch {
              toast.error("Erro ao Deletar Patrocinador");
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
      <h2 className="text-2xl font-medium">Configurações - PATROCINADORES</h2>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-sm grid grid-cols-2">
          <label className="flex flex-col space-y-3 gap-1 h-fit">
            <span>Logo do Patrocinador</span>
            <input
              {...register("img")}
              type="file"
              required
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          <div>
            {imagePreview && (
              <div>
                <p className="text-gray-700 mb-2">
                  Pré-visualização da Imagem:
                </p>
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="rounded-lg object-cover max-h-40"
                />
              </div>
            )}
          </div>
        </div>
        <label className="flex flex-col gap-1 text-sm">
          <span>Nome</span>
          <input
            type="text"
            required
            {...register("nome")}
            className="bg-zinc-50 px-5 py-2"
            placeholder="Nome do Patrocinador"
          />
        </label>
        <button
          className="bg-black text-white w-full py-1 rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? "Adicionando" : "Adicionar"}
        </button>
      </form>

      <div className="mt-8 grid gap-5 grid-cols-6">
        {patrocinadores?.data.map((e) => (
          <div className="text-center">
            <img
              src={e.filePath}
              alt=""
              className="w-full h-16 object-cover rounded-lg"
            />
            <span>{e.nome}</span>
            <button
              className="text-sm hover:text-red-500 duration-300 w-full"
              type="button"
              onClick={() => deletepatrocinador(e.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
