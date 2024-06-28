import { useLocation } from "react-router";
import { BannerMain } from "../../components/home-components/BannerMain";
import { Galeria } from "../../components/home-components/Galeria";
import { Patrocinadores } from "../../components/home-components/Patrocinadores";
import { Programacao } from "../../components/home-components/Programacao";
import { ProjetoParceiros } from "../../components/home-components/ProjetoParceiros";
import { SobreBDW } from "../../components/home-components/SobreBDW";
import { Footer } from "../../components/utils/Footer";
import { useGetInfos } from "../../Utils/useGetInfos";

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function Homepage() {
  const query = useQuery();
  const lang = query.get("lang");
  const context = useGetInfos();

  return (
    <div>
      <BannerMain lang={lang} data={context?.dataHomepage?.banner} />
      <SobreBDW lang={lang} data={context?.dataHomepage?.sobre} />
      <Programacao lang={lang} data={context?.dataHomepage?.programacao} />
      <Galeria lang={lang} data={context?.dataHomepage?.galeria} />
      <ProjetoParceiros lang={lang} data={context?.dataHomepage?.parceiros} />
      <Patrocinadores />
      <Footer />
    </div>
  );
}
