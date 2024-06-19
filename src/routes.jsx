import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Home/Homepage";
import { ProgramacaoPage } from "./pages/Programacao";
import { GaleriaPage } from "./pages/Galeria";
import { SobrePage } from "./pages/Sobre";
import { ParceirosPage } from "./pages/Parceiros";

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
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
