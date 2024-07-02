import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PageConfig } from "../../../Utils/services";

export const ModalAddLocal = ({
  local,
  isOpen,
  setIsOpen,
  isEdit,
  setIsEdit,
  reload,
}) => {
  const [isLoading, setIsLoading] = useState(null);
  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    if (isEdit) {
      setValue("title_pt", local.title_pt ?? "");
      setValue("title_en", local.title_en ?? "");
      setValue("endereco_pt", local.descricao_pt ?? "");
      setValue("endereco_en", local.descricao_en ?? "");
      setValue("website", local.website ?? "");
    }
  }, [local, isEdit]);

  const onSubmit = async (payload) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    try {
      if (token) {
        let response;
        if (isEdit) {
          response = await PageConfig.editLocais(payload, local.id);
        } else {
          response = await PageConfig.addLocais(payload);
        }

        if (response.status === 200) {
          reset();
          reload();
          setIsOpen(false);
          setIsEdit(false);
        }
      }
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-black px-5 py-1 text-white rounded-lg hover:bg-black/90 duration-300"
      >
        Adicionar Local
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative max-h-[85%] overflow-auto">
            <h2 className="text-xl font-bold mb-4">Adicionar Local</h2>
            <form
              className="grid sm:grid-cols-2 gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="flex flex-col gap-1">
                <span>Título (PT)</span>
                <textarea
                  type="text"
                  {...register("title_pt")}
                  placeholder="Título"
                  className="bg-zinc-50 px-3 py-1 rounded-md resize-none h-24"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Título (EN)</span>
                <textarea
                  type="text"
                  {...register("title_en")}
                  placeholder="Title"
                  className="bg-zinc-50 px-3 py-1 rounded-md resize-none h-24"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Endereço (PT)</span>
                <textarea
                  type="text"
                  {...register("endereco_pt")}
                  placeholder="Endereço"
                  className="bg-zinc-50 px-3 py-1 rounded-md resize-none h-24"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Endereço (EN)</span>
                <textarea
                  type="text"
                  {...register("endereco_en")}
                  placeholder="Endereço"
                  className="bg-zinc-50 px-3 py-1 rounded-md resize-none h-24"
                />
              </label>

              <label className="flex flex-col gap-1 sm:col-span-2">
                <span>Website</span>
                <textarea
                  type="text"
                  {...register("website")}
                  placeholder="Website"
                  className="bg-zinc-50 px-3 py-1 rounded-md resize-none h-24"
                />
              </label>

              <button
                className="bg-black sm:col-span-2 text-white py-1 rounded-md"
                disabled={isLoading}
              >
                {isLoading ? "Salvando" : "Salvar"}
              </button>
            </form>

            <button
              onClick={() => {
                reset();
                setIsEdit(false);
                setIsOpen(false);
              }}
              className="text-red-500 absolute top-3 right-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
