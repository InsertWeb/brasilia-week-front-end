import { BannerMain } from "../../components/home-components/BannerMain";
import { Programacao } from "../../components/home-components/Programacao";
import { SobreBDW } from "../../components/home-components/SobreBDW";

export function Homepage() {
  return (
    <div>
      <BannerMain />
      <SobreBDW />
      <Programacao />
    </div>
  );
}
