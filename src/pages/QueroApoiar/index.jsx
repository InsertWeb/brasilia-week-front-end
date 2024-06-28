import { useGetInfos } from "../../Utils/useGetInfos";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function QueroApoiar() {
  const context = useGetInfos();
  const inspireSe = context?.dataHomepage?.inspireSe;

  const lang = localStorage.getItem("lang");

  return (
    <div className="font-['Sora']">
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-5xl pb-10 font-['Helvetica']">
          {lang === "en" ? "I want to support" : "Quero apoiar"}
        </h2>
        <div className="grid sm:grid-cols-2 gap-10">
          <p className="tracking-widest">
            {lang === "en" ? inspireSe?.descricao_en : inspireSe?.descricao_pt}
          </p>
          <form className="space-y-8">
            <label className="flex flex-col gap-2">
              <span>Nome completo:</span>
              <input
                type="text"
                placeholder="Digite o seu nome aqui."
                className="px-5 py-3 w-full border border-black"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span>Empresa (opcional):</span>
              <input
                type="text"
                placeholder="Digite o nome da sua empresa aqui"
                className="px-5 py-3 w-full border border-black"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span>E-mail:</span>
              <input
                type="text"
                placeholder="Digite o seu e-mail aqui"
                className="px-5 py-3 w-full border border-black"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span>Tel/Celular:</span>
              <input
                type="text"
                placeholder="Digite o seu telefone ou celular aqui."
                className="px-5 py-3 w-full border border-black"
              />
            </label>
            <button className="bg-black w-full py-3 text-white">ENVIAR</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
