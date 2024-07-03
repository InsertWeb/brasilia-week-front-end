import moment from "moment";
import { useGetInfos } from "../../Utils/useGetInfos";
import { IconNext, IconPrev } from "../../assets/Icons";
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
    .sort((a, b) => {
      if (!a.horario && !b.horario) return 0;
      if (!a.horario) return 1;
      if (!b.horario) return -1;
      return a.horario.localeCompare(b.horario);
    });

  useEffect(() => {
    if (currentEvents) {
      setEventClicked(currentEvents[0]);
    }
  }, [loading]);
  const handlePrev = () => {
    setCurrentDateIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : uniqueDates.length - 1
    );
  };
  const handleNext = () => {
    setCurrentDateIndex((prevIndex) =>
      prevIndex < uniqueDates.length - 1 ? prevIndex + 1 : 0
    );
  };
  return (
    <div className="fontHelveticaLight max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl pb-16">
        {lang === "en" ? "Schedule" : "Programação"}
      </h1>
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-5 ">
        {uniqueDates.map((e, i) => (
          <button
            key={e.id}
            className={`text-3xl py-3 px-1 border border-black hover:bg-[#F5F5F5] duration-300 ${
              currentDateIndex === i && "bg-black text-white hover:bg-black"
            }`}
            onClick={() => setCurrentDateIndex(i)}
          >
            {moment.utc(e).format("DD/MM")}
          </button>
        ))}
      </div>
      <div className="flex gap-7 items-center w-full sm:w-fit justify-between sm:hidden">
        <div className="flex gap-7">
          <button
            className="bg-[#BCBCBC] py-2 w-12 flex items-center justify-center text-white"
            onClick={handlePrev}
          >
            <IconPrev />
          </button>
          <button
            className="bg-[#BCBCBC] py-2 w-12 flex items-center justify-center text-white"
            onClick={handleNext}
          >
            <IconNext />
          </button>
        </div>
        <span className="text-3xl sm:text-4xl border border-black py-5 px-8">
          {moment.utc(currentDate).format("DD/MM")}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-3 py-8 sm:py-20">
        <div className="space-y-3">
          <div
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
            }}
            className="bg-cover h-[440px] hidden sm:flex items-end justify-end"
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
                className={`flex items-center border-b border-black py-6 w-full hover:bg-[#F6F6F6] ${
                  e.id === eventClicked.id && "bg-[#F6F6F6]"
                }`}
              >
                {e.horario && (
                  <span className="px-5 border-r border-black">
                    {e.horario}
                  </span>
                )}

                <span className="pl-5 text-sm">
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
          {/* <a
            href="https://linktr.ee/bsbdesignweek?fbclid=PAZXh0bgNhZW0CMTEAAaaqGnGhN0uvaI41Y4W9d7kSvUy_evzBWIqzm4f6rOFM6j7waLmSClF6vZY_aem_APydz2B6uZUjDmnRZhoQew"
            target="_blank"
            className="w-full border border-black py-3 text-center"
          >
            {lang === "en" ? "SIGN UP" : "INSCREVA-SE"}
          </a> */}
        </div>
      </div>
    </div>
  );
}
