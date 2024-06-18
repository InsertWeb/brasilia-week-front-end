import { BannerMain } from "../../components/home-components/BannerMain";
import { Galeria } from "../../components/home-components/Galeria";
import { Programacao } from "../../components/home-components/Programacao";
import { SobreBDW } from "../../components/home-components/SobreBDW";

export function Homepage() {
  return (
    <div>
      <BannerMain />
      <SobreBDW />
      <Programacao />
      <Galeria />
    </div>
  );
}
