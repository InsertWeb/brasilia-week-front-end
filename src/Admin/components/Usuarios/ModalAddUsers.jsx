import { useState } from "react";
import { useForm } from "react-hook-form";
import { Login } from "../../../Utils/services";

export const ModalAddUsers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (payload) => {
    setIsSubmiting(true);
    try {
      const res = await Login.addNewUser(payload);
      if (res.status === 200) {
        setIsOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-black px-5 py-1 text-white rounded-lg hover:bg-black/90 duration-300"
      >
        Adicionar Usuários
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative">
            <h2 className="text-xl font-bold mb-4">Adicionar Usuários</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <label className="flex flex-col gap-1">
                <span>Nome</span>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Nome do Usuários"
                  className="bg-zinc-50 px-3 py-1 rounded-md"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>E-mail</span>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="E-mail"
                  className="bg-zinc-50 px-3 py-1 rounded-md"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Senha</span>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="******"
                  className="bg-zinc-50 px-3 py-1 rounded-md"
                />
              </label>

              <button
                disabled={isSubmiting}
                className="bg-black w-full text-white py-1 rounded-md"
              >
                {isSubmiting ? "Salvando" : "Salvar"}
              </button>
            </form>

            <button
              onClick={() => setIsOpen(false)}
              type="button"
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
