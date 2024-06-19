import Parceiro1 from "../../assets/parceiros1.png";

export function CardPodcast() {
  return (
    <div className="space-y-3">
      <img
        src={Parceiro1}
        alt="Nome do Parceiro"
        className="w-full h-72 object-cover"
      />
      <div className="space-y-1">
        <span className="text-[#83BF45] text-lg">Ep. #01</span>
        <h3 className="text-2xl font-semibold">
          Nasce um movimento em prol do design brasiliense
        </h3>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
    </div>
  );
}
