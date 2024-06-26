import Parceiro1 from "../../assets/parceiros1.png";

export function CardImprensa() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <img
          src={Parceiro1}
          alt="Nome do Parceiro"
          className="w-full h-72 object-cover"
        />
        <button
          className="absolute top-4 left-4 bg-white text-[#83BF45] px-6 py-1"
          type="button"
        >
          Jornal de Brasília
        </button>
      </div>
      <h3 className="text-2xl font-semibold">
        Nasce um movimento em prol do design brasiliense
      </h3>
      <p>
        Evento de pré-lançamento da Brasília Design Week dá início a uma série
        de ações em todo o Distrito Federal, promovendo arte, cultura e design
      </p>
    </div>
  );
}
