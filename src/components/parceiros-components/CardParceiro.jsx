import Parceiro1 from "../../assets/parceiros1.png";

export function CardParceiro() {
  return (
    <div className="space-y-4">
      <img
        src={Parceiro1}
        alt="Nome do Parceiro"
        className="w-full h-72 object-cover"
      />
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">
          JOÃO
          <br /> <b>MARQUES</b>
        </h3>
        <div className="flex flex-col gap-2">
          <span className="text-sm">@joao.m</span>
          <div className="w-8 h-1 bg-black" />
        </div>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
    </div>
  );
}
