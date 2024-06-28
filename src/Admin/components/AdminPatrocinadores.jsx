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
    <div className="bg-white rounded-lg p-5 space-y-5">
      <h2 className="text-2xl font-medium">Configurações - PATROCINADORES</h2>
      <form className="space-y-5">
        <label className="text-sm grid grid-cols-2">
          <div className="flex flex-col space-y-3 gap-1">
            <span>Logo do Patrocinador</span>
            <input type="file" accept="image/*" onChange={handleImageChange} />
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
        <label className="flex flex-col gap-1 text-sm">
          <span>Nome</span>
          <input
            type="text"
            className="bg-zinc-50 px-5 py-2"
            placeholder="Nome do Patrocinador"
          />
        </label>
        <button className="bg-black text-white w-full py-1 rounded-lg">
          Adicionar
        </button>
      </form>

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
  );
}
