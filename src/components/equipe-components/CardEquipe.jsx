import Parceiro1 from "../../assets/parceiros1.png";

export function CardEquipe() {
  return (
    <div className="space-y-3">
      <img
        src={Parceiro1}
        alt="Nome do Parceiro"
        className="w-full h-96 object-cover"
      />
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold">
          JOÃO <br /> <b>MARQUES</b>
        </h3>
        <div className="space-y-2">
          <span className="text-[#83BF45]">@joaomarques</span>
          <div className="w-8 h-1 bg-[#83BF45]" />
        </div>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
    </div>
  );
}
