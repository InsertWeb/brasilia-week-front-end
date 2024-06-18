import { IconCalendary, IconLocalization } from "../../assets/Icons";

export function SobreBDW() {
  return (
    <div className="font-['Helvetica']">
      <div className="max-w-6xl px-4 mx-auto flex flex-wrap gap-5 py-16 items-center justify-between sm:gap-2">
        <button className="bg-black text-white py-6 max-w-sm w-full">
          QUERO PARTICIPAR
        </button>
        <div className="flex gap-4 items-center font-medium">
          <IconCalendary />
          <span>3 a 11 de julho de 2024</span>
        </div>
        <div className="flex gap-4 items-center">
          <IconLocalization />
          <span>Museu da República</span>
        </div>
      </div>
      <div className="md:bg-[url('/museuSobre.png')] bg-no-repeat bg-right">
        <div className="grid md:grid-cols-2 max-w-6xl px-4 mx-auto pb-16">
          <div className="space-y-16">
            <h2 className="text-4xl relative tracking-[16%] font-light">
              Sobre a #BDW24
            </h2>
            <p className="font-['Sora'] tracking-widest leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing
            </p>

            <button className="border-2 border-black py-3 w-full">
              SAIBA MAIS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
