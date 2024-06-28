import { useLocation, useNavigate } from "react-router";

export function TogleLanguage() {
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const params = new URLSearchParams(location.search);
    if (params.has("lang")) {
      navigate(`${location.pathname}`);
    } else {
      navigate("?lang=en");
    }
  };

  return <button onClick={toggleLanguage}>PT | ENG</button>;
}
