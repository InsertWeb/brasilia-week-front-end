import { IconPrev } from "../../assets/Icons";

export function MainProgramacao() {
  return (
    <div className="font-['Helvetica'] max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl pb-16">Programação</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-5">
        <button className="text-3xl py-3 px-1 border border-black hover:bg-[#F5F5F5] duration-300">
          04/07
        </button>
        <button className="text-3xl py-3 px-1 border border-black hover:bg-[#F5F5F5] duration-300">
          04/07
        </button>
        <button className="text-3xl py-3 px-1 border border-black hover:bg-[#F5F5F5] duration-300">
          04/07
        </button>
        <button className="text-3xl py-3 px-1 border border-black hover:bg-[#F5F5F5] duration-300">
          04/07
        </button>
        <button className="text-3xl py-3 px-1 border border-black hover:bg-[#F5F5F5] duration-300">
          04/07
        </button>
        <button className="text-3xl py-3 px-1 border border-black hover:bg-[#F5F5F5] duration-300">
          04/07
        </button>
        <button className="text-3xl py-3 px-1 border border-black hover:bg-[#F5F5F5] duration-300">
          04/07
        </button>
        <button className="text-3xl py-3 px-1 border border-black hover:bg-[#F5F5F5] duration-300">
          04/07
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-3 py-20">
        <div className="space-y-3">
          <div className="bg-[url('/bgProgramacao.png')] bg-cover h-[440px] flex items-end justify-end">
            <button className="bg-white max-w-56 w-full py-2 m-6">
              INSCREVA-SE
            </button>
          </div>
        </div>
        <div className="text-[#0D0D0D]">
          <div className="flex gap-2 items-center">
            <IconPrev width={35} className={"hidden sm:block"} />
            <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
              <span className="px-5 border-r border-black">07:00</span>
              <span className="pl-5">Exposição 01</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <IconPrev width={35} className={"hidden sm:block"} />
            <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
              <span className="px-5 border-r border-black">07:00</span>
              <span className="pl-5">Exposição 01</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <IconPrev width={35} className={"hidden sm:block"} />
            <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
              <span className="px-5 border-r border-black">07:00</span>
              <span className="pl-5">Exposição 01</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <IconPrev width={35} className={"hidden sm:block"} />
            <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
              <span className="px-5 border-r border-black">07:00</span>
              <span className="pl-5">Exposição 01</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <IconPrev width={35} className={"hidden sm:block"} />
            <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
              <span className="px-5 border-r border-black">07:00</span>
              <span className="pl-5">Exposição 01</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <IconPrev width={35} className={"hidden sm:block"} />
            <div className="border-b border-black py-6 w-full hover:bg-[#F6F6F6]">
              <span className="px-5 border-r border-black">07:00</span>
              <span className="pl-5">Exposição 01</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="space-y-10">
          <h2 className="text-4xl">
            <span className="text-[#83BF45]">07:00</span> Exposição 04
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. 
          </p>
          <button className="w-full border border-black py-3">
            INSCREVA-SE
          </button>
        </div>
      </div>
    </div>
  );
}
