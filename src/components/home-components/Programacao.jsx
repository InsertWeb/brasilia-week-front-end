import { useState } from "react";
import { IconNext, IconPrev } from "../../assets/Icons";
import { Link } from "react-router-dom";

export function Programacao({ lang, data }) {
  const [eventClicked, setEventClicked] = useState(data && data[0]);

  const backgroundImageUrl = eventClicked?.filePath ?? "/bgBlack.png";

  return (
    <div className="font-['Helvetica']">
      <div className="max-w-6xl px-4 mx-auto py-16">
        <div className="flex flex-wrap gap-5 justify-between items-center border-b border-black">
          <h2 className="text-4xl relative tracking-[16%] font-light">
            <svg
              width="86"
              height="86"
              viewBox="0 0 86 86"
              fill="none"
              className="absolute -top-1/2 -z-10 -left-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="43" cy="43" r="43" fill="#83BF45" />
            </svg>
            {lang === "en" ? "SCHEDULE" : "PROGRAMAÇÃO"}
          </h2>

          <div className="flex gap-7 items-center w-full sm:w-fit justify-between">
            <div className="flex gap-7">
              <button className="bg-[#BCBCBC] py-2 w-12 flex items-center justify-center text-white">
                <IconPrev />
              </button>
              <button className="bg-[#BCBCBC] py-2 w-12 flex items-center justify-center text-white">
                <IconNext />
              </button>
            </div>
            <span className="text-3xl sm:text-4xl border border-b-0 border-black py-5 px-8">
              21/06
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 pt-20">
          <div className="space-y-3">
            <div
              style={{
                backgroundImage: `url(${backgroundImageUrl})`,
              }}
              className="bg-cover h-[440px] flex items-end justify-end"
            >
              <Link
                to={"/programacao"}
                className="bg-white max-w-56 w-full py-2 m-6 text-center"
              >
                INSCREVA-SE
              </Link>
            </div>
            <p>
              {lang === "en"
                ? eventClicked?.descricao_en
                : eventClicked?.descricao_pt}
            </p>
          </div>
          <div className="text-[#0D0D0D]">
            {data?.map((e) => (
              <div
                className="flex gap-2 items-center"
                onClick={() => setEventClicked(e)}
              >
                <IconPrev width={35} className={"hidden sm:block"} />
                <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
                  <span className="px-5 border-r border-black">
                    {e.horario}
                  </span>
                  <span className="pl-5">
                    {lang === "en" ? e.title_en : e.title_pt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <Link
            to={"/programacao"}
            className="py-3 max-w-2xl border-2 border-black w-full my-32 text-center"
          >
            {lang === "en"
              ? "SEE THE COMPLETE PROGRAM"
              : "VEJA A PROGRAMAÇÃO COMPLETA"}
          </Link>
          <button
            className="py-6 max-w-sm w-full bg-[#83BF45] text-white"
            type="button"
          >
            {lang === "en" ? "I WANT TO PARTICIPATE" : "QUERO PARTICIPAR"}
          </button>
        </div>
      </div>
    </div>
  );
}
