import { useState } from "react";

export function AdminInspire() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <form className="bg-white rounded-lg p-5 space-y-5">
      <h3 className="text-lg font-medium uppercase">Inspire-se</h3>

      <div className="grid grid-cols-2 gap-5">
        <label className="flex flex-col gap-1 text-sm">
          <span>Titulo (PT)</span>
          <input
            type="text"
            className="bg-zinc-50 px-5 py-2"
            placeholder="Titulo"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span>Titulo (EN)</span>
          <input
            type="text"
            className="bg-zinc-50 px-5 py-2 rounded-lg"
            placeholder="Title"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <label className="flex flex-col gap-1 text-sm">
          <span>Descrição (PT)</span>
          <textarea
            type="text"
            className="bg-zinc-50 px-5 py-2 resize-none h-44"
            placeholder="Descrição"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span>Descrição (EN)</span>
          <textarea
            type="text"
            className="bg-zinc-50 px-5 py-2 resize-none h-44"
            placeholder="Description"
          />
        </label>
      </div>

      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </form>
  );
}
