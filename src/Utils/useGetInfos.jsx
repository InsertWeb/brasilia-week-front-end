import { createContext, useContext, useEffect, useState } from "react";
import { Login, PageConfig } from "./services";

const layoutContext = createContext();

export const useGetInfos = () => {
  return useContext(layoutContext);
};

function useProvideGetInfos() {
  const [userLogged, setUserLogged] = useState();
  const [loadingHomepage, setLoadingHomepage] = useState(true);
  const [dataHomepage, setDataHomepage] = useState(true);

  useEffect(() => {
    if (!userLogged?.data?.id) {
      getMe();
    }
  }, []);

  useEffect(() => {
    getInfosHomePage();
  }, []);

  async function getMe() {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "{}");
      if (token) {
        const responseMe = await Login.me();
        if (responseMe.status === 200) {
          setUserLogged(responseMe.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getInfosHomePage() {
    setLoadingHomepage(true);
    try {
      const [
        banner,
        sobre,
        programacao,
        galeria,
        parceiros,
        imprensa,
        podcast,
        inspireSe,
        equipes,
        locais,
        patrocinadores,
      ] = await Promise.all([
        PageConfig.getBanner(),
        PageConfig.getSobre(),
        PageConfig.getEventosProgramacaoPage(),
        PageConfig.getGaleria(),
        PageConfig.getParceiros(),
        PageConfig.getImprensa(),
        PageConfig.getPodCast(),
        PageConfig.getInspire(),
        PageConfig.getEquipes(),
        PageConfig.getLocais(),
        PageConfig.getPatrocinadores(),
      ]);
      const dataHomepage = {
        banner: banner.data.banner,
        sobre: sobre.data.Query,
        programacao: programacao.data.data,
        galeria: galeria.data.data,
        parceiros: parceiros.data.data,
        imprensa: imprensa.data.data,
        inspireSe: inspireSe.data.data,
        equipes: equipes.data.data,
        locais: locais.data.data,
        patrocinadores: patrocinadores.data.data,
        podcast: podcast.data.data,
      };
      setDataHomepage(dataHomepage);
    } catch (error) {
      return error;
    } finally {
      setLoadingHomepage(false);
    }
  }

  return { userLogged, dataHomepage, loadingHomepage };
}

const ProvideLayout = ({ children }) => {
  const layout = useProvideGetInfos();
  return (
    <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>
  );
};
export default ProvideLayout;
