import { CardEquipe } from "../../components/equipe-components/CardEquipe";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function EquipePage() {
  return (
    <div className="font-['Helvetica']">
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-5xl pb-16">Equipe</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-16">
          <CardEquipe />
          <CardEquipe />
          <CardEquipe />
          <CardEquipe />
          <CardEquipe />
          <CardEquipe />
          <CardEquipe />
        </div>
      </div>
      <Footer />
    </div>
  );
}
