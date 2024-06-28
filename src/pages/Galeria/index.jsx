import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";
import { useGetInfos } from "../../Utils/useGetInfos";

export function GaleriaPage() {
  const context = useGetInfos();
  const eventos = context?.dataHomepage?.galeria;

  const lang = localStorage.getItem("lang");

  return (
    <div>
      <Header />
      <div className="font-['Helvetica'] max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl pb-16">
          {lang === "en" ? "GALERY" : "GALERIA"}
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14">
          {eventos?.map((e) => (
            <div className="space-y-3 font-semibold" key={e.id}>
              <img
                src={e.filePath}
                alt={lang === "en" ? e.descricao_en : e.descricao_pt}
                className="w-full h-80 object-cover"
              />
              <p>{lang === "en" ? e.descricao_en : e.descricao_pt}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
