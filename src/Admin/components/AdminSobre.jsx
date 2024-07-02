import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { PageConfig } from "../../Utils/services";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export function AdminSobre() {
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [infoSobre, setInfoSobre] = useState(null);

  const { register, handleSubmit, watch, setValue, control } = useForm();

  useEffect(() => {
    getInfoSobre();
  }, []);

  useEffect(() => {
    if (infoSobre) {
      setValue("title_pt", infoSobre.Query.title_pt ?? "");
      setValue("title_en", infoSobre.Query.title_en ?? "");
      setValue("descricao_pt", infoSobre.Query.descricao_pt ?? "");
      setValue("descricao_en", infoSobre.Query.descricao_en ?? "");
      setValue("chamada_pt", infoSobre.Query.chamada_pt ?? "");
      setValue("chamada_en", infoSobre.Query.chamada_en ?? "");
      setValue("text_button_pt", infoSobre.Query.text_button_pt ?? "");
      setValue("text_button_en", infoSobre.Query.text_button_en ?? "");
      setValue("img", infoSobre.Query.image ?? "");
      setImagePreview(infoSobre.Query.image ?? null);
    }
  }, [infoSobre]);

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
          if (key !== "img") {
            formData.append(key, payload[key]);
          }
        }

        if (payload.img && payload.img.length > 0) {
          formData.append("img", payload.img[0]);
        }

        const response = await PageConfig.updateSobre(formData);
      }
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  async function getInfoSobre() {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getSobre();
        if (response && response.status === 200) {
          setInfoSobre(response.data);
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
      className="bg-white rounded-lg p-5 space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-medium">Configurações - Sobre a #BDW24</h2>

      <div className="grid grid-cols-2 gap-5">
        <label className="flex flex-col gap-1 text-sm">
          <span>Titulo (PT)</span>
          <input
            type="text"
            {...register("title_pt")}
            className="bg-zinc-50 px-5 py-2"
            placeholder="Titulo"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span>Titulo (EN)</span>
          <input
            type="text"
            {...register("title_en")}
            className="bg-zinc-50 px-5 py-2 rounded-lg"
            placeholder="Title"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <label className="flex flex-col gap-1 text-sm">
          <span>Chamada (PT)</span>
          <textarea
            type="text"
            {...register("chamada_pt")}
            className="bg-zinc-50 px-5 py-2 resize-none h-24"
            placeholder="Descrição"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span>Chamada (EN)</span>
          <textarea
            type="text"
            {...register("chamada_en")}
            className="bg-zinc-50 px-5 py-2 resize-none h-24"
            placeholder="Description"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <label className="space-y-2 text-sm">
          <span>Descrição (PT)</span>
          <Controller
            name="descricao_pt"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ReactQuill
                className="h-44"
                value={field.value}
                onChange={field.onChange}
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["link", "image", "video"],
                    ["clean"],
                  ],
                }}
                formats={[
                  "header",
                  "font",
                  "size",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "blockquote",
                  "list",
                  "bullet",
                  "indent",
                  "link",
                  "image",
                  "video",
                ]}
              />
            )}
          />
        </label>
        <label className="space-y-2 text-sm">
          <span>Descrição (EN)</span>
          <Controller
            name="descricao_en"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ReactQuill
                className="h-44"
                value={field.value}
                onChange={field.onChange}
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["link", "image", "video"],
                    ["clean"],
                  ],
                }}
                formats={[
                  "header",
                  "font",
                  "size",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "blockquote",
                  "list",
                  "bullet",
                  "indent",
                  "link",
                  "image",
                  "video",
                ]}
              />
            )}
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-5 pt-8">
        <label className="flex flex-col gap-1 text-sm">
          <span>Texto Botão (PT)</span>
          <input
            type="text"
            {...register("text_button_pt")}
            className="bg-zinc-50 px-5 py-2"
            placeholder="Description"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span>Texto Botão (EN)</span>
          <input
            type="text"
            {...register("text_button_en")}
            className="bg-zinc-50 px-5 py-2"
            placeholder="Button text"
          />
        </label>
      </div>

      <label className="grid grid-cols-2 gap-1 text-sm">
        <div className="flex flex-col gap-1">
          <span>Imagem da sessão</span>
          <input
            type="file"
            {...register("img")}
            accept="image/*"
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
