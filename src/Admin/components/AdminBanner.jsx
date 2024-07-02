import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PageConfig } from "../../Utils/services";

export function AdminBanner() {
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [infoBanner, setInfoBanner] = useState(null);

  const { register, handleSubmit, watch, setValue } = useForm();

  useEffect(() => {
    getInfoBanner();
  }, []);

  useEffect(() => {
    if (infoBanner) {
      setValue("title_pt", infoBanner.banner.title_pt ?? "");
      setValue("title_en", infoBanner.banner.title_en ?? "");
      setImagePreview(infoBanner.banner.image ?? null);
    }
  }, [infoBanner]);

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

  const onSubmit = async (payload) => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const formData = new FormData();

        for (const key in payload) {
          if (key !== "image") {
            formData.append(key, payload[key]);
          }
        }

        if (payload.image && payload.image.length > 0) {
          formData.append("image", payload.image[0]);
        }

        const response = await PageConfig.updateBanner(formData);
      }
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  async function getInfoBanner() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getBanner();
        if (response && response.status === 200) {
          setInfoBanner(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <form
      className="bg-white rounded-lg p-2 sm:p-5 space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-medium">Configurações - Banner</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-1 text-sm">
          <span>Titulo Principal (PT)</span>
          <input
            type="text"
            {...register("title_pt")}
            className="bg-zinc-50 px-5 py-2"
            placeholder="Titulo Principal"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span>Titulo Principal (EN)</span>
          <input
            type="text"
            {...register("title_en")}
            className="bg-zinc-50 px-5 py-2 rounded-lg"
            placeholder="Main Title"
          />
        </label>
      </div>

      <label className="grid sm:grid-cols-2 gap-1 text-sm">
        <div className="flex flex-col gap-1">
          <span>Imagem do Banner</span>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={handleImageChange}
          />
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
      <button
        className="bg-black w-full text-white py-2 rounded-lg"
        disabled={isLoading}
      >
        {isLoading ? "Salvando" : "Salvar"}
      </button>
    </form>
  );
}
