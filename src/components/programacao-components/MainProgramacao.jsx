import moment from "moment";
import { useGetInfos } from "../../Utils/useGetInfos";
import { IconPrev } from "../../assets/Icons";
import { useEffect, useState } from "react";

export function MainProgramacao() {
  const context = useGetInfos();
  const eventos = context?.dataHomepage?.programacao;
  const loading = context?.loadingHomepage;

  const lang = localStorage.getItem("lang");

  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [eventClicked, setEventClicked] = useState(0);

  const backgroundImageUrl = eventClicked?.filePath ?? "/bgBlack.png";

  const uniqueDates = Array.from(
    new Set(eventos?.map((event) => event.date))
  ).sort((a, b) => new Date(a) - new Date(b));

  const currentDate = uniqueDates[currentDateIndex];
  const currentEvents = eventos
    ?.filter((event) => event.date === currentDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  useEffect(() => {
    if (currentEvents) {
      setEventClicked(currentEvents[0]);
    }
  }, [loading]);

  return (
    <div className="fontHelveticaLight max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl pb-16">
        {lang === "en" ? "Schedule" : "Programação"}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-5">
        {uniqueDates.map((e, i) => (
          <button
            key={e.id}
            className={`text-3xl py-3 px-1 border border-black hover:bg-[#F5F5F5] duration-300 ${
              currentDateIndex === i && "bg-black text-white hover:bg-black"
            }`}
            onClick={() => setCurrentDateIndex(i)}
          >
            {moment(e).format("DD/MM")}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-3 py-20">
        <div className="space-y-3">
          <div
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
            }}
            className="bg-cover h-[440px] flex items-end justify-end"
          />
        </div>
        <div className="text-[#0D0D0D]">
          {currentEvents?.map((e) => (
            <div
              key={e.id}
              className="flex gap-2 items-center"
              onClick={() => setEventClicked(e)}
            >
              <div className="sm:w-10 hidden sm:block">
                {e.id === eventClicked.id && (
                  <IconPrev width={35} className={"hidden sm:block"} />
                )}
              </div>
              <div
                className={`border-b border-black py-6 w-full hover:bg-[#F6F6F6] ${
                  e.id === eventClicked.id && "bg-[#F6F6F6]"
                }`}
              >
                <span className="px-5 border-r border-black">{e.horario}</span>
                <span className="pl-5">
                  {lang === "en" ? e.title_en : e.title_pt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="space-y-10 flex flex-col">
          <h2 className="text-4xl">
            <span className="text-[#83BF45]">{eventClicked.horario}</span>{" "}
            {lang === "en" ? eventClicked.title_en : eventClicked.title_pt}
          </h2>
          <p>
            {lang === "en"
              ? eventClicked.descricao_en
              : eventClicked.descricao_pt}
          </p>
          <a
            href="https://linktr.ee/bsbdesignweek?fbclid=PAZXh0bgNhZW0CMTEAAaaqGnGhN0uvaI41Y4W9d7kSvUy_evzBWIqzm4f6rOFM6j7waLmSClF6vZY_aem_APydz2B6uZUjDmnRZhoQew"
            target="_blank"
            className="w-full border border-black py-3 text-center"
          >
            {lang === "en" ? "SIGN UP" : "INSCREVA-SE"}
          </a>
        </div>
      </div>
    </div>
  );
}
