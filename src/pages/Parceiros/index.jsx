import { useGetInfos } from "../../Utils/useGetInfos";
import { CardParceiro } from "../../components/parceiros-components/CardParceiro";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";
import { useQuery } from "../Home/Homepage";

export function ParceirosPage() {
  const context = useGetInfos();
  const parceiros = context?.dataHomepage?.parceiros;

  const query = useQuery();
  const lang = query.get("lang");

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-5xl pb-16">
          {lang === "en" ? "Partners" : "Parceiros"}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {parceiros?.map((e) => (
            <div key={e.id}>
              <CardParceiro data={e} lang={lang} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
