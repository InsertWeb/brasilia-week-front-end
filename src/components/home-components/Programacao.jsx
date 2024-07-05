import { useEffect, useState } from "react";
import { IconNext, IconPrev } from "../../assets/Icons";
import { Link } from "react-router-dom";
import moment from "moment";
import { useGetInfos } from "../../Utils/useGetInfos";
import { ItemProgramaçãoModal } from "../programacao-components/ItemProgramaçãoModal";

export function Programacao({ lang, data }) {
  const [eventClicked, setEventClicked] = useState(data && data[0]);
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const context = useGetInfos();
  const loading = context?.loadingHomepage;

  const backgroundImageUrl = eventClicked?.filePath ?? "/bgBlack.png";

  const uniqueDates = Array.from(
    new Set(data?.map((event) => event.date))
  ).sort((a, b) => new Date(a) - new Date(b));

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

  const currentDate = uniqueDates[currentDateIndex];
  const currentEvents = data
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
  }, [loading, currentDate]);

  return (
    <div className="fontHelveticaLight">
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
            {lang === "en" ? "SCHEDULE" : "#BDW24 em movimento"}
          </h2>

          <div className="flex gap-7 items-center w-full sm:w-fit justify-between">
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
            <span className="text-3xl sm:text-4xl border border-b-0 border-black py-5 px-8">
              {moment.utc(currentDate).format("DD/MM")}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 pt-8 sm:pt-20">
          <div className="space-y-3 hidden sm:block">
            <img
              src={backgroundImageUrl}
              alt={eventClicked.title_pt}
              className="h-[440px] w-full object-cover "
            />
            <p>
              {lang === "en"
                ? eventClicked?.descricao_en
                : eventClicked?.descricao_pt}
            </p>
          </div>
          <div className="text-[#0D0D0D]">
            {currentEvents?.map((e) => (
              <div
                key={e.id}
                className="flex gap-2 items-center"
                onClick={() => {
                  setEventClicked(e);
                  setIsModalOpen(true);
                }}
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
        <ItemProgramaçãoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={eventClicked}
          isHome
        />

        <div className="flex flex-col justify-center items-center ">
          <Link
            to={"/programacao"}
            className="py-3 max-w-2xl border-2 border-black w-full mt-16 text-center"
          >
            {lang === "en"
              ? "SEE THE COMPLETE PROGRAM"
              : "VEJA A PROGRAMAÇÃO COMPLETA"}
          </Link>
          {/* <a
            href="https://linktr.ee/bsbdesignweek?fbclid=PAZXh0bgNhZW0CMTEAAaaqGnGhN0uvaI41Y4W9d7kSvUy_evzBWIqzm4f6rOFM6j7waLmSClF6vZY_aem_APydz2B6uZUjDmnRZhoQew"
            target="_blank"
            className="py-6 max-w-sm w-full bg-[#83BF45] text-white text-center uppercase"
            type="button"
          >
            {lang === "en"
              ? "I want to participate in BDW"
              : "Quero apoiar da BDW"}
          </a> */}
        </div>
      </div>
    </div>
  );
}
