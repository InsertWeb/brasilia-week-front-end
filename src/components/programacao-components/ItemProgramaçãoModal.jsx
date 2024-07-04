import moment from "moment";

export function ItemProgramaçãoModal({ isOpen, onClose, data, isHome }) {
  if (!isOpen) return null;
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 ${
        isHome && "sm:hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-[90%] max-h-[70%] overflow-auto mx-auto p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl sm:text-4xl">
            <span className="text-[#83BF45]">{data.horario}</span>{" "}
            {data.title_pt}
          </h2>
          <button
            className="text-gray-700 hover:text-gray-900 "
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4 space-y-5">
          <p>{data.descricao_pt}</p>
          <div className="space-y-1">
            <img src={data.filePath} alt="" />
            <p className="text-end">
              {moment.utc(data.date).format("DD/MM/YYYY")} às {data.horario}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
