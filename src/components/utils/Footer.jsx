import {
  IconCalendary,
  IconInstagram,
  IconLocalization,
} from "../../assets/Icons";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="max-w-6xl mx-auto flex justify-between gap-5 flex-wrap pb-4 border-b px-4">
        <div className="flex gap-5 sm:gap-16 flex-wrap">
          <div className="flex gap-4 items-center font-medium text-white">
            <IconCalendary />
            <span>3 a 11 de julho de 2024</span>
          </div>
          <div className="flex gap-4 items-center">
            <IconLocalization />
            <span>Museu da República</span>
          </div>
        </div>
        <div className="flex items-center gap-10 text-white">
          <button>PT | ENG</button>
          <a href="#" target="_blank">
            <IconInstagram />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between text-xs sm:text-sm max-w-6xl mx-auto pt-4 px-4">
        <p>© 2024 brasília desIgn week. Todos os direitos reservados</p>
        <span className="uppercase">#bdw24</span>
      </div>
    </footer>
  );
}
