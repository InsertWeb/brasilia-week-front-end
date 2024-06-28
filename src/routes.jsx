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
import { AdminPage } from "./Admin/Admin";
import { LoginPage } from "./Admin/LoginPage";
import { HomePage } from "./Admin/components/HomePage";
import { PrivateRoute } from "./components/utils/PrivateRoute";

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
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminPage />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
