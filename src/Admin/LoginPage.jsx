import { Link } from "react-router-dom";
import { Header } from "../components/utils/Header";

export function LoginPage() {
  return (
    <div className="bg-zinc-50 min-h-screen flex flex-col">
      <Header />
      <form className="bg-white flex flex-col max-w-md w-full rounded-xl mx-auto p-8 space-y-5 mt-20">
        <h2 className="text-2xl font-bold font-['Helvetica'] text-center">
          Fazer Login
        </h2>

        <label className="flex flex-col text-start gap-2">
          <span>E-mail:</span>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="bg-zinc-100 rounded-lg px-5 py-2"
          />
        </label>
        <label className="flex flex-col text-start gap-2">
          <span>Senha:</span>
          <input
            type="password"
            placeholder="***********"
            className="bg-zinc-100 rounded-lg px-5 py-2"
          />
        </label>

        {/* <button className="bg-black text-white py-2 rounded-lg hover:bg-black/80 duration-300">
          Entrar
        </button> */}
        <Link
          to={"/admin"}
          className="bg-black text-white py-2 rounded-lg hover:bg-black/80 duration-300 text-center"
        >
          Entrar
        </Link>
      </form>
    </div>
  );
}
