import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function QueroApoiar() {
  return (
    <div className="font-['Sora']">
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-5xl pb-10 font-['Helvetica']">Quero apoiar</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          <p className="tracking-widest">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. 
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
