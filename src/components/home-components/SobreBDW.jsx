import { IconCalendary, IconLocalization } from "../../assets/Icons";

export function SobreBDW({ lang, data }) {
  return (
    <div className="font-['Helvetica']">
      <div className="max-w-6xl px-4 mx-auto flex flex-wrap gap-5 py-16 items-center justify-between sm:gap-2">
        <button className="bg-black text-white py-6 max-w-sm w-full">
          {lang === "en" ? "I WANT TO PARTICIPATE" : " QUERO PARTICIPAR"}
        </button>
        <div className="flex gap-4 items-center font-medium">
          <IconCalendary />
          <span>
            {lang === "en" ? "July 3 to 11, 2024" : "3 a 11 de julho de 2024"}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <IconLocalization />
          <span>
            {lang === "en" ? "Museum of the Republic" : "Museu da República"}
          </span>
        </div>
      </div>
      <div className="md:bg-[url('/museuSobre.png')] bg-no-repeat bg-right">
        <div className="grid md:grid-cols-2 max-w-6xl px-4 mx-auto pb-16">
          <div className="space-y-16">
            <h2 className="text-4xl relative tracking-[16%] font-light">
              {lang === "en" ? data?.title_en : data?.title_pt}
            </h2>
            <p className="font-['Sora'] tracking-widest leading-loose">
              {lang === "en" ? data?.descricao_en : data?.descricao_pt}
            </p>

            <button className="border-2 border-black py-3 w-full">
              {lang === "en" ? data?.text_button_en : data?.text_button_pt}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
