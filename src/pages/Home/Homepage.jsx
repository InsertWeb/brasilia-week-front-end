import { BannerMain } from "../../components/home-components/BannerMain";
import { Galeria } from "../../components/home-components/Galeria";
import { Patrocinadores } from "../../components/home-components/Patrocinadores";
import { Programacao } from "../../components/home-components/Programacao";
import { ProjetoParceiros } from "../../components/home-components/ProjetoParceiros";
import { SobreBDW } from "../../components/home-components/SobreBDW";
import { Footer } from "../../components/utils/Footer";
import { useGetInfos } from "../../Utils/useGetInfos";
import Loading from "../../assets/loading.svg";

export function Homepage() {
  const lang = localStorage.getItem("lang");
  const context = useGetInfos();
  return (
    <div>
      {context.loadingHomepage ? (
        <div className="bg-black h-screen text-white flex flex-col items-center justify-center">
          <img src={Loading} alt="Carregando.." />
          Carregando
        </div>
      ) : (
        <>
          <BannerMain lang={lang} data={context?.dataHomepage?.banner} />
          <SobreBDW lang={lang} data={context?.dataHomepage?.sobre} />
          <Programacao lang={lang} data={context?.dataHomepage?.programacao} />
          {/* <Galeria lang={lang} data={context?.dataHomepage?.galeria} />
          <ProjetoParceiros
            lang={lang}
            data={context?.dataHomepage?.parceiros}
          /> */}
          <Patrocinadores
            lang={lang}
            data={context?.dataHomepage?.patrocinadores}
          />
          <Footer />
        </>
      )}
    </div>
  );
}
