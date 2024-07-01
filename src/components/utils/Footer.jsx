import { Link } from "react-router-dom";
import {
  IconCalendary,
  IconInstagram,
  IconLocalization,
} from "../../assets/Icons";
import { TogleLanguage } from "./TogleLanguage";

export function Footer() {
  const lang = localStorage.getItem("lang");
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="max-w-6xl mx-auto flex justify-between gap-5 flex-wrap pb-4 border-b px-4">
        <div className="flex gap-5 sm:gap-16 flex-wrap">
          <div className="flex gap-4 items-center font-medium text-white">
            <IconCalendary />
            <span>
              {lang === "en" ? "July 4 to 11, 2024" : "4 a 11 de julho de 2024"}
            </span>
          </div>
          <Link to={"/locais"} className="flex gap-4 items-center">
            <IconLocalization />
            <span>
              {lang === "en" ? "Exhibition locations" : "Locais de exposição"}
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-10 text-white">
          <TogleLanguage />
          <a href="https://www.instagram.com/bsbdesignweek/" target="_blank">
            <IconInstagram />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between text-xs sm:text-sm max-w-6xl mx-auto pt-4 px-4">
        <p>
          {lang === "en"
            ? "© 2024 brasília desIgn week. All rights reserved"
            : "© 2024 brasília desIgn week. Todos os direitos reservados"}
        </p>
        <span className="uppercase">#bdw24</span>
      </div>
    </footer>
  );
}
