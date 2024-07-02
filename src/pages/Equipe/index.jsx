import { useGetInfos } from "../../Utils/useGetInfos";
import { CardEquipe } from "../../components/equipe-components/CardEquipe";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function EquipePage() {
  const context = useGetInfos();
  const equipe = context?.dataHomepage?.equipes;

  const lang = localStorage.getItem("lang");

  return (
    <div className="fontHelveticaLight">
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-5xl pb-16">{lang === "en" ? "Team" : "Equipe"}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-16">
          {equipe?.map((e) => (
            <div key={e.id}>
              <CardEquipe data={e} lang={lang} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
