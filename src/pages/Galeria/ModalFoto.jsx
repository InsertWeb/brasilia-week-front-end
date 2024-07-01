export function ModalFoto({ onClose, data }) {
  const lang = localStorage.getItem("lang");
  const description = lang === "en" ? data?.descricao_en : data?.descricao_pt;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative bg-white rounded-lg shadow-lg outline-none focus:outline-none z-10 max-w-5xl max-h-[80%] w-full">
        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 className="text-xl font-semibold">
            {lang === "en" ? data?.title_en : data?.title_pt}
          </h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={onClose}
          >
            <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        <div className="relative p-6">
          {data.link_youtube && (
            <a
              href={data.link_youtube}
              target="_blank"
              className="underline text-blue-900"
            >
              {data.link_youtube}
            </a>
          )}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <img
              src={data.filePath}
              alt={data.title_pt}
              className="object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
    </div>
  );
}
