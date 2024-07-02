import { useForm } from "react-hook-form";
import { Header } from "../components/utils/Header";
import { Navigate, useNavigate } from "react-router";
import { useState } from "react";
import { Login } from "../Utils/services";

export function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = !!localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (payload) => {
    setIsLoading(true);
    try {
      const response = await Login.auth(payload);
      if (response && response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", JSON.stringify(token));

        navigate("/admin");
      } else {
      }
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-zinc-50 min-h-screen flex flex-col">
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white flex flex-col max-w-md w-full rounded-xl mx-auto p-8 space-y-5 mt-20"
      >
        <h2 className="text-2xl font-bold fontHelveticaLight text-center">
          Fazer Login
        </h2>

        <label className="flex flex-col text-start gap-2">
          <span>E-mail:</span>
          <input
            type="email"
            required
            {...register("email")}
            placeholder="Digite seu e-mail"
            className="bg-zinc-100 rounded-lg px-5 py-2"
          />
        </label>
        <label className="flex flex-col text-start gap-2">
          <span>Senha:</span>
          <input
            type="password"
            required
            {...register("password")}
            placeholder="***********"
            className="bg-zinc-100 rounded-lg px-5 py-2"
          />
        </label>

        <button
          className="bg-black text-white py-2 rounded-lg hover:bg-black/80 duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Entrando" : "Entrar"}
        </button>
      </form>
      {isAuthenticated && <Navigate to={"/admin"} />}
    </div>
  );
}
