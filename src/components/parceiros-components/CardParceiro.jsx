export function CardParceiro({ data, lang }) {
  return (
    <div className="space-y-4">
      <img
        src={data.filePath}
        alt={data.nome}
        className="w-full h-72 object-cover"
      />
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{data.nome}</h3>
        <div className="flex flex-col gap-2">
          <span className="text-sm">{data.rede_social}</span>
          <div className="w-8 h-1 bg-black" />
        </div>
      </div>
      <p>{lang === "en" ? data.descricao_en : data.descricao_pt}</p>
    </div>
  );
}
