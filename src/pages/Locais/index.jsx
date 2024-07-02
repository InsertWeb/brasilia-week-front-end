import { useGetInfos } from "../../Utils/useGetInfos";
import { IconLocalization, IconSite } from "../../assets/Icons";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function LocaisPage() {
  const context = useGetInfos();
  const locais = context?.dataHomepage?.locais;

  const lang = localStorage.getItem("lang");
  return (
    <div className="fontHelveticaLight">
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4 min-h-screen">
        <h2 className="text-5xl pb-10">
          {lang === "en" ? "Locations" : "Locais"}
        </h2>
        <div>
          {locais?.map((e) => (
            <div
              key={e.id}
              className="space-y-3 border-b-2 border-[#83BF45] py-7"
            >
              <h3 className="text-3xl sm:text-4xl pb-2">
                {lang === "en" ? e?.title_en : e?.title_pt}
              </h3>
              <div className="text-[#83BF45] flex gap-2 items-center">
                <IconLocalization />
                <span className="text-black">
                  {lang === "en" ? e?.descricao_en : e?.descricao_pt}
                </span>
              </div>
              {e.website && (
                <div className="flex gap-2 items-center">
                  {/* <IconSite /> */}
                  <a
                    target="_blank"
                    href={`https://instagram.com/${e.website}`}
                  >
                    {e.website}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
