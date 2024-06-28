import { Navigate, useLocation } from "react-router";

export function PrivateRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("token");

  const location = useLocation();

  const redirectToLogin = () => {
    localStorage.setItem("redirectRoute", location.pathname);
    return <Navigate to="/login" />;
  };

  return isAuthenticated ? children : redirectToLogin();
}
