import { BannerMain } from "../../components/home-components/BannerMain";
import { Galeria } from "../../components/home-components/Galeria";
import { Programacao } from "../../components/home-components/Programacao";
import { ProjetoParceiros } from "../../components/home-components/ProjetoParceiros";
import { SobreBDW } from "../../components/home-components/SobreBDW";

export function Homepage() {
  return (
    <div>
      <BannerMain />
      <SobreBDW />
      <Programacao />
      <Galeria />
      <ProjetoParceiros />
    </div>
  );
}
