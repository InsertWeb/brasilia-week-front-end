export function CardEquipe({ data, lang }) {
  return (
    <div className="space-y-1 w-56">
      <img
        src={data?.filePath}
        alt={data?.nome}
        className="w-56 h-56 object-cover rounded-full"
      />
      <div className="space-y-1">
        <h3 className="text-2xl font-">
          {data?.nome.split(" ")[0]} <br />{" "}
          <b className="font-bold font-['Sora']">
            {data?.nome.split(" ").slice(1).join(" ")}
          </b>
        </h3>
        <div className="space-y-2">
          {data?.reseSocial && (
            <a
              href={`http://instagram.com/${data?.reseSocial}`}
              className="text-[#83BF45]"
              target="_blank"
            >
              @{data?.reseSocial}
            </a>
          )}
          <div className="w-8 h-1 bg-[#83BF45]" />
        </div>
      </div>
      <p>{lang === "en" ? data?.descricao_en : data?.descricao_pt}</p>
    </div>
  );
}
