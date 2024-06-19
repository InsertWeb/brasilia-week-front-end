import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Home/Homepage";
import { ProgramacaoPage } from "./pages/Programacao";
import { GaleriaPage } from "./pages/Galeria";
import { SobrePage } from "./pages/Sobre";
import { ParceirosPage } from "./pages/Parceiros";
import { ImprensaPage } from "./pages/Imprensa";
import { PodcastaPage } from "./pages/Podcast";
import { EquipePage } from "./pages/Equipe";
import { LocaisPage } from "./pages/Locais";
import { QueroApoiar } from "./pages/QueroApoiar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/programacao",
    element: <ProgramacaoPage />,
  },
  {
    path: "/galeria",
    element: <GaleriaPage />,
  },
  {
    path: "/sobre",
    element: <SobrePage />,
  },
  {
    path: "/parceiros",
    element: <ParceirosPage />,
  },
  {
    path: "/imprensa",
    element: <ImprensaPage />,
  },
  {
    path: "/podcast",
    element: <PodcastaPage />,
  },
  {
    path: "/equipe",
    element: <EquipePage />,
  },
  {
    path: "/locais",
    element: <LocaisPage />,
  },
  {
    path: "/apoiar",
    element: <QueroApoiar />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
