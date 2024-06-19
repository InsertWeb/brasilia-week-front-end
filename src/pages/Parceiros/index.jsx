import { CardParceiro } from "../../components/parceiros-components/CardParceiro";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function ParceirosPage() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-5xl pb-16">Parceiros</h2>
        <div className="grid grid-cols-4 gap-10">
          <CardParceiro />
          <CardParceiro />
          <CardParceiro />
          <CardParceiro />
          <CardParceiro />
          <CardParceiro />
          <CardParceiro />
        </div>
      </div>
      <Footer />
    </div>
  );
}
