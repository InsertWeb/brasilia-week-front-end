import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";
import Galery1 from "../../assets/galery/galeria1.png";
import Galery2 from "../../assets/galery/galeria2.png";
import Galery3 from "../../assets/galery/galeria3.png";

export function GaleriaPage() {
  return (
    <div>
      <Header />
      <div className="font-['Helvetica'] max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl pb-16">GALERIA</h1>
        <div className="grid grid-cols-3 gap-14">
          <div className="space-y-3 font-semibold">
            <img src={Galery1} alt={""} className="w-full h-80 object-cover" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div className="space-y-3 font-semibold">
            <img src={Galery2} alt={""} className="w-full h-80 object-cover" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div className="space-y-3 font-semibold">
            <img src={Galery3} alt={""} className="w-full h-80 object-cover" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div className="space-y-3 font-semibold">
            <img src={Galery1} alt={""} className="w-full h-80 object-cover" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div className="space-y-3 font-semibold">
            <img src={Galery2} alt={""} className="w-full h-80 object-cover" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
