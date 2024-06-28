import Parceiro1 from "../../assets/parceiros1.png";

export function CardPodcast({ data }) {
  const lang = localStorage.getItem("lang");
  return (
    <div className="space-y-3">
      <img
        src={data.filePath ?? Parceiro1}
        alt="Nome do Parceiro"
        className="w-full h-72 object-cover"
      />
      <div className="space-y-1">
        <span className="text-[#83BF45] text-lg">{data.numero_ep}</span>
        <h3 className="text-2xl font-semibold">
          {lang === "en" ? data?.title_en : data?.title_pt}
        </h3>
      </div>
      <p> {lang === "en" ? data?.description_en : data?.description_pt}</p>
    </div>
  );
}
