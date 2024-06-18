import { BannerMain } from "../../components/home-components/BannerMain";
import { Galeria } from "../../components/home-components/Galeria";
import { Patrocinadores } from "../../components/home-components/Patrocinadores";
import { Programacao } from "../../components/home-components/Programacao";
import { ProjetoParceiros } from "../../components/home-components/ProjetoParceiros";
import { SobreBDW } from "../../components/home-components/SobreBDW";
import { Footer } from "../../components/utils/Footer";

export function Homepage() {
  return (
    <div>
      <BannerMain />
      <SobreBDW />
      <Programacao />
      <Galeria />
      <ProjetoParceiros />
      <Patrocinadores />
      <Footer />
    </div>
  );
}
