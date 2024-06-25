import { useState } from "react";
import { ModalAddEvento } from "./Programacao/ModalAddEvento";
import ImageGalery from "../../assets/galery/galeria1.png";
import { ModalAddFoto } from "./Galeria/ModalAddFoto";
import { ModalAddParceiros } from "./Parceiros/ModalAddParceiros";

export function HomePage() {
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
    <div className="px-8 py-5 bg-zinc-50">
      <h2 className="text-2xl font-medium pb-5">
        Configurações - Página Inicial
      </h2>

      <form className="bg-white rounded-lg p-5 space-y-5">
        <h3 className="text-lg font-medium">Banner</h3>

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

      <form className="bg-white rounded-lg p-5 space-y-5">
        <h3 className="text-lg font-medium">Sobre a #BDW24</h3>

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

        <div className="grid grid-cols-2 gap-5">
          <label className="flex flex-col gap-1 text-sm">
            <span>Texto Botão (PT)</span>
            <input
              type="text"
              className="bg-zinc-50 px-5 py-2"
              placeholder="Description"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span>Texto Botão (EN)</span>
            <input
              type="text"
              className="bg-zinc-50 px-5 py-2"
              placeholder="Button text"
            />
          </label>
        </div>

        <label className="grid grid-cols-2 gap-1 text-sm">
          <div className="flex flex-col gap-1">
            <span>Imagem da sessão</span>
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

      <form className="bg-white rounded-lg p-5 space-y-5">
        <h3 className="text-lg font-medium">PROGRAMAÇÃO</h3>

        <div>
          <div className="flex justify-between">
            <h4 className="text-lg">Lista de Eventos</h4>
            <ModalAddEvento />
          </div>
          <div className="grid grid-cols-2 text-sm">
            <ul>
              <li>Evento 1</li>
              <li>Evento 1</li>
              <li>Evento 1</li>
              <li>Evento 1</li>
            </ul>
            <ul>
              <li>Evento 1</li>
              <li>Evento 1</li>
              <li>Evento 1</li>
              <li>Evento 1</li>
            </ul>
          </div>
        </div>
        <button className="bg-black w-full text-white py-2 rounded-lg">
          Salvar
        </button>
      </form>

      <form className="bg-white rounded-lg p-5 space-y-5">
        <div>
          <div className="flex justify-between">
            <h3 className="text-lg font-medium">GALERIA</h3>
            <ModalAddFoto />
          </div>
          <div className="mt-4 space-y-5">
            <div className="flex gap-3 text-sm items-center">
              <img
                src={ImageGalery}
                alt=""
                className="w-16 h-16 object-cover rounded-lg"
              />
              <p className="border-r-2 pr-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ullam ex tenetur iusto at inventore.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ullam ex tenetur iusto at inventore.
              </p>
            </div>
          </div>
        </div>
        <button className="bg-black w-full text-white py-2 rounded-lg">
          Salvar
        </button>
      </form>

      <form className="bg-white rounded-lg p-5 space-y-5">
        <div>
          <div className="flex justify-between">
            <h3 className="text-lg font-medium">PARCEIROS</h3>
            <ModalAddParceiros />
          </div>
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

          <div className="mt-4 space-y-5">
            <div className="flex gap-3 text-sm items-center">
              <img
                src={ImageGalery}
                alt=""
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <span>Name lorem</span>
                <div className="grid grid-cols-2 gap-5">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus ullam ex tenetur iusto at inventore.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus ullam ex tenetur iusto at inventore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-black w-full text-white py-2 rounded-lg">
          Salvar
        </button>
      </form>

      <form className="bg-white rounded-lg p-5 space-y-5">
        <h3 className="text-lg font-medium">PATROCINADORES</h3>

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
    </div>
  );
}
