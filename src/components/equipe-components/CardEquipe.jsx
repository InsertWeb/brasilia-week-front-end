export function CardEquipe({ data, lang }) {
  return (
    <div className="space-y-3">
      <img
        src={data.filePath}
        alt={data.nome}
        className="w-full h-96 object-cover"
      />
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold">{data.nome}</h3>
        <div className="space-y-2">
          <span className="text-[#83BF45]">{data.rede_social}</span>
          <div className="w-8 h-1 bg-[#83BF45]" />
        </div>
      </div>
      <p>{lang === "en" ? data.descricao_en : data.descricao_pt}</p>
    </div>
  );
}
