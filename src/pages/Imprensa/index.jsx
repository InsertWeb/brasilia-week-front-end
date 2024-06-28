import { useGetInfos } from "../../Utils/useGetInfos";
import { CardImprensa } from "../../components/imprensa-components/CardImprensa";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function ImprensaPage() {
  const context = useGetInfos();
  const imprensa = context?.dataHomepage?.imprensa;

  const lang = localStorage.getItem("lang");

  return (
    <div className="font-['Helvetica']">
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-5xl pb-16">
          {lang === "en" ? "Press" : "Imprensa"}
        </h2>
        <div className="grid sm:grid-cols-2 gap-16">
          {imprensa?.map((e) => (
            <div key={e.id}>
              <CardImprensa data={e} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
