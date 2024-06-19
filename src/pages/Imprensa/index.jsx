import { CardImprensa } from "../../components/imprensa-components/CardImprensa";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function ImprensaPage() {
  return (
    <div className="font-['Helvetica']">
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-5xl pb-16">Imprensa</h2>
        <div className="grid sm:grid-cols-2 gap-16">
          <CardImprensa />
          <CardImprensa />
          <CardImprensa />
          <CardImprensa />
        </div>
      </div>
      <Footer />
    </div>
  );
}
