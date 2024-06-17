import { IconCircle, IconInstagram, MenuHamburguer } from "../../assets/Icons";

export function BannerMain() {
  return (
    <div className="bg-[url('/bgMain.png')] bg-cover bg-center relative">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <IconCircle />
      </div>
      <header className="max-w-6xl mx-auto flex justify-between items-center py-5">
        <span className="text-3xl text-white font-['Helvetica']">BDW</span>
        <button>
          <MenuHamburguer />
        </button>
      </header>

      <main className="max-w-6xl mx-auto py-5">
        <div>
          <div className="flex flex-col items-end gap-10 text-white">
            <button>PT | ENG</button>
            <a href="#" target="_blank">
              <IconInstagram />
            </a>
          </div>

          <div className="flex flex-col justify-center items-center text-white gap-32 py-36 text-5xl font-thin">
            <h2>#bdw24</h2>
            <h1 className="tracking-[20px]">BRASÍLIA DESIGN WEEK</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
