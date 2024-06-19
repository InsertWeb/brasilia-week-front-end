import { CardPodcast } from "../../components/podcast-components/CardPodcast";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function PodcastaPage() {
  return (
    <div className="font-['Helvetica']">
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-5xl pb-16">Podcast</h2>
        <div className="grid sm:grid-cols-2 gap-16">
          <CardPodcast />
          <CardPodcast />
          <CardPodcast />
          <CardPodcast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
