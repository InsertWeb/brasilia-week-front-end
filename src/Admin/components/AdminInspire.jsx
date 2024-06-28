import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PageConfig } from "../../Utils/services";

export function AdminInspire() {
  const [isLoading, setIsLoading] = useState(null);
  const [infoInspireSe, setInfoInspireSe] = useState(null);

  const { register, handleSubmit, watch, setValue } = useForm();

  useEffect(() => {
    getInfoInspireSe();
  }, []);

  useEffect(() => {
    if (infoInspireSe) {
      setValue("title_pt", infoInspireSe.data.title_pt ?? "");
      setValue("title_en", infoInspireSe.data.title_en ?? "");
      setValue("descricao_pt", infoInspireSe.data.descricao_pt ?? "");
      setValue("descricao_en", infoInspireSe.data.descricao_en ?? "");
    }
  }, [infoInspireSe]);

  const onSubmit = async (payload) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const response = await PageConfig.updateInspire(payload);
      }
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  async function getInfoInspireSe() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getInspire();
        if (response && response.status === 200) {
          setInfoInspireSe(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <form
      className="bg-white rounded-lg p-5 space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-medium">Configurações - Inspire-se</h2>

      <div className="grid grid-cols-2 gap-5">
        <label className="flex flex-col gap-1 text-sm">
          <span>Titulo (PT)</span>
          <input
            type="text"
            {...register("title_pt")}
            className="bg-zinc-50 px-5 py-2"
            placeholder="Titulo"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span>Titulo (EN)</span>
          <input
            type="text"
            {...register("title_en")}
            className="bg-zinc-50 px-5 py-2 rounded-lg"
            placeholder="Title"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <label className="flex flex-col gap-1 text-sm">
          <span>Descrição (PT)</span>
          <textarea
            type="text"
            {...register("descricao_pt")}
            className="bg-zinc-50 px-5 py-2 resize-none h-44"
            placeholder="Descrição"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span>Descrição (EN)</span>
          <textarea
            type="text"
            {...register("descricao_en")}
            className="bg-zinc-50 px-5 py-2 resize-none h-44"
            placeholder="Description"
          />
        </label>
      </div>

      <button
        className="bg-black w-full text-white py-2 rounded-lg"
        disabled={isLoading}
      >
        {isLoading ? "Salvando" : "Salvar"}
      </button>
    </form>
  );
}
