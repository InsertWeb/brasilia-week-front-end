import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Home/Homepage";
import { ProgramacaoPage } from "./pages/Programacao";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/Programacao",
    element: <ProgramacaoPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
