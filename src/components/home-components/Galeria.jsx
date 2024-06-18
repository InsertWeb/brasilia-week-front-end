import { Carrousel } from "../utils/Carrosel";

export function Galeria() {
  return (
    <div className="pb-20 pt-10">
      <div className="max-w-6xl mx-auto font-['Helvetica']">
        <h2 className="text-4xl pb-14 tracking-widest">GALERIA</h2>
        <div>
          <Carrousel />
        </div>
      </div>
    </div>
  );
}
