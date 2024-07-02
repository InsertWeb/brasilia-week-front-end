import { useGetInfos } from "../../Utils/useGetInfos";
import { CardPodcast } from "../../components/podcast-components/CardPodcast";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function PodcastaPage() {
  const context = useGetInfos();
  const podcasts = context?.dataHomepage?.podcast;

  const lang = localStorage.getItem("lang");

  return (
    <div className="fontHelveticaLight">
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4 min-h-screen">
        <h2 className="text-5xl pb-16">Podcast</h2>
        <div className="grid sm:grid-cols-2 gap-16">
          {podcasts?.map((e) => (
            <div key={e.id}>
              <CardPodcast data={e} lang={lang} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
