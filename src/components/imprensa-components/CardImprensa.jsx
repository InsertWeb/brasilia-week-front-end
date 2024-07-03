import { Link } from "react-router-dom";
import Parceiro1 from "../../assets/parceiros1.png";

export function CardImprensa({ data }) {
  const lang = localStorage.getItem("lang");

  return (
    <Link to={`/imprensa/${data.id}`} className="space-y-4">
      <div className="relative">
        <img
          src={data?.filePath ?? Parceiro1}
          alt="Nome do Parceiro"
          className="w-full h-72 object-cover rounded-xl"
        />
        <button
          className="absolute top-4 left-4 bg-white text-[#83BF45] px-6 py-1"
          type="button"
        >
          {lang === "en" ? data?.nome_jornal_en : data?.nome_jornal_pt}
        </button>
      </div>
      <h3 className="text-2xl font-semibold">
        {lang === "en" ? data?.title_en : data?.title_pt}
      </h3>
      {/* <p
        dangerouslySetInnerHTML={{
          __html: lang === "en" ? data?.descricao_en : data?.descricao_pt,
        }}
      /> */}
    </Link>
  );
}
