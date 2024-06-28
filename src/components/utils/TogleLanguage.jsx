export function TogleLanguage() {
  const toggleLanguage = () => {
    if (localStorage.getItem("lang")) {
      localStorage.removeItem("lang");
    } else {
      localStorage.setItem("lang", "en");
    }
    window.location.reload();
  };

  return <button onClick={toggleLanguage}>PT | ENG</button>;
}
