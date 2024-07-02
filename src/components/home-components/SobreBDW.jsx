import { Link } from "react-router-dom";
import { IconCalendary, IconLocalization } from "../../assets/Icons";
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export function SobreBDW({ lang, data }) {
  const { width } = useWindowSize();

  const backgroundImageUrl =
    width > 768 ? data?.image ?? "/bgBlack.png" : "none";

  return (
    <div className="font-['Helvetica']">
      <div className="max-w-6xl px-4 mx-auto flex flex-wrap gap-5 py-16 items-center justify-between sm:gap-2">
        <a
          href="https://linktr.ee/bsbdesignweek?fbclid=PAZXh0bgNhZW0CMTEAAaaqGnGhN0uvaI41Y4W9d7kSvUy_evzBWIqzm4f6rOFM6j7waLmSClF6vZY_aem_APydz2B6uZUjDmnRZhoQew"
          target="_blank"
          className="bg-black text-white py-6 max-w-sm w-full text-center uppercase"
        >
          {lang === "en"
            ? "I want to participate in BDW"
            : " Quero participar da BDW"}
        </a>
        <div className="flex gap-4 items-center font-medium">
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
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "40% 100%",
        }}
        className={`bg-no-repeat bg-right`}
      >
        <div className="grid md:grid-cols-2 max-w-6xl px-4 mx-auto pb-16">
          <div className="space-y-16 flex flex-col">
            <h2 className="text-4xl relative tracking-[16%] font-light">
              {lang === "en" ? data?.title_en : data?.title_pt}
            </h2>
            <p className="font-['Sora'] tracking-widest leading-loose">
              {lang === "en" ? data?.chamada_en : data?.chamada_pt}
            </p>

            <Link
              to={"/sobre"}
              className="border-2 border-black py-3 text-center"
            >
              {lang === "en" ? data?.text_button_en : data?.text_button_pt}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
