import { useState } from "react";
import ImageGalery from "../../assets/galery/galeria1.png";

export function AdminPatrocinadores() {
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
      <h2 className="text-2xl font-medium">Configurações - PATROCINADORES</h2>

      <div className="grid grid-cols-2">
        <div>
          <label className="text-sm grid gap-5 grid-cols-2 mt-4">
            <div className="flex flex-col space-y-3 gap-1">
              <span>Logo do Patrocinador</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div>
              {imagePreview && (
                <div>
                  <p className="text-gray-700 mb-2">
                    Pré-visualização da Imagem:
                  </p>
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    className="rounded-lg object-cover max-h-40"
                  />
                </div>
              )}
            </div>
          </label>
          <div className="grid grid-cols-2 gap-5 mt-4">
            <label className="flex flex-col gap-1">
              <span>Texto botão (PT)</span>
              <input
                type="text"
                placeholder="Texto do Botão"
                className="bg-zinc-50 px-5 py-1 rounded-lg"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span>Texto botão (EN)</span>
              <input
                type="text"
                placeholder="Button Text"
                className="bg-zinc-50 px-5 py-1 rounded-lg"
              />
            </label>
          </div>
        </div>

        <div className="mt-8 grid gap-5 grid-cols-6">
          <img
            src={ImageGalery}
            alt=""
            className="w-full h-16 object-cover rounded-lg"
          />
          <img
            src={ImageGalery}
            alt=""
            className="w-full h-16 object-cover rounded-lg"
          />
          <img
            src={ImageGalery}
            alt=""
            className="w-full h-16 object-cover rounded-lg"
          />
          <img
            src={ImageGalery}
            alt=""
            className="w-full h-16 object-cover rounded-lg"
          />
          <img
            src={ImageGalery}
            alt=""
            className="w-full h-16 object-cover rounded-lg"
          />
          <img
            src={ImageGalery}
            alt=""
            className="w-full h-16 object-cover rounded-lg"
          />
        </div>
      </div>

      <button className="bg-black w-full text-white py-2 rounded-lg">
        Salvar
      </button>
    </form>
  );
}
