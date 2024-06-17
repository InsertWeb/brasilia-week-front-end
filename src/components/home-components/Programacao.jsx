import { IconNext, IconPrev } from "../../assets/Icons";

export function Programacao() {
  return (
    <div className="font-['Helvetica']">
      <div className="max-w-6xl mx-auto py-16">
        <div className="flex justify-between items-center border-b border-black">
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
            PROGRAMAÇÃO
          </h2>

          <div className="flex gap-7 items-center">
            <div className="flex gap-7">
              <button className="bg-[#BCBCBC] py-2 w-12 flex items-center justify-center text-white">
                <IconPrev />
              </button>
              <button className="bg-[#BCBCBC] py-2 w-12 flex items-center justify-center text-white">
                <IconNext />
              </button>
            </div>
            <span className="text-4xl border border-b-0 border-black py-5 px-8">
              21/06
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-20">
          <div className="space-y-3">
            <div className="bg-[url('/bgProgramacao.png')] bg-cover h-[440px] flex items-end justify-end">
              <button className="bg-white max-w-56 w-full py-2 m-6">
                INSCREVA-SE
              </button>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="text-[#0D0D0D]">
            <div className="flex gap-2 items-center">
              <IconPrev width={35} />
              <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
                <span className="px-5 border-r border-black">07:00</span>
                <span className="pl-5">Exposição 01</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <IconPrev width={35} />
              <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
                <span className="px-5 border-r border-black">07:00</span>
                <span className="pl-5">Exposição 01</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <IconPrev width={35} />
              <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
                <span className="px-5 border-r border-black">07:00</span>
                <span className="pl-5">Exposição 01</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <IconPrev width={35} />
              <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
                <span className="px-5 border-r border-black">07:00</span>
                <span className="pl-5">Exposição 01</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <IconPrev width={35} />
              <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
                <span className="px-5 border-r border-black">07:00</span>
                <span className="pl-5">Exposição 01</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <IconPrev width={35} />
              <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
                <span className="px-5 border-r border-black">07:00</span>
                <span className="pl-5">Exposição 01</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <button className="py-3 max-w-2xl border-2 border-black w-full my-32">
            VEJA A PROGRAMAÇÃO COMPLETA
          </button>
          <button className="py-6 max-w-sm w-full bg-[#83BF45] text-white">
            QUERO PARTICIPAR
          </button>
        </div>
      </div>
    </div>
  );
}
