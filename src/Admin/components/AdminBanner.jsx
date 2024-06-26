import { useState } from "react";

export function AdminBanner() {
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
      <h2 className="text-2xl font-medium">Configurações - Banner</h2>
      <div className="grid grid-cols-2 gap-5">
        <label className="flex flex-col gap-1 text-sm">
          <span>Titulo Principal (PT)</span>
          <input
            type="text"
            className="bg-zinc-50 px-5 py-2"
            placeholder="Titulo Principal"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span>Titulo Principal (EN)</span>
          <input
            type="text"
            className="bg-zinc-50 px-5 py-2 rounded-lg"
            placeholder="Main Title"
          />
        </label>
      </div>

      <label className="grid grid-cols-2 gap-1 text-sm">
        <div className="flex flex-col gap-1">
          <span>Imagem do Banner</span>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          {imagePreview && (
            <div>
              <p className="text-gray-700 text-sm mb-2">
                Pré-visualização da Imagem:
              </p>
              <img
                src={imagePreview}
                alt="Image Preview"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      </label>
      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </form>
  );
}
