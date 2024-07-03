import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { PageConfig } from "../../../Utils/services";
import moment from "moment";
import ReactQuill from "react-quill";

export const ModalAddNotices = ({
  notice,
  isOpen,
  setIsOpen,
  isEdit,
  setIsEdit,
  reload,
}) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { register, handleSubmit, setValue, reset, control } = useForm();

  useEffect(() => {
    if (isEdit) {
      setValue("nome_jornal_pt", notice.nome_jornal_pt ?? "");
      setValue("nome_jornal_pt", notice.nome_jornal_pt ?? "");
      setValue("title_pt", notice.title_pt ?? "");
      setValue("title_en", notice.title_en ?? "");
      setValue("descricao_pt", notice.descricao_pt ?? "");
      setValue("descricao_en", notice.descricao_en ?? "");
      setValue("link_noticia", notice.link_noticia ?? "");
      setValue("img", notice.filePath ?? "");
      setImagePreview(notice.filePath ?? null);
    }
  }, [notice, isEdit]);

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

        let response;
        if (isEdit) {
          response = await PageConfig.editImprensa(formData, notice.id);
        } else {
          response = await PageConfig.addImprensa(formData);
        }

        if (response.status === 200) {
          reset();
          reload();
          setIsOpen(false);
          setIsEdit(false);
        }
      }
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-black px-5 py-1 text-white rounded-lg hover:bg-black/90 duration-300"
      >
        Adicionar Noticia
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative max-h-[95%] overflow-auto">
            <h2 className="text-xl font-bold mb-4">Adicionar Noticia</h2>
            <form
              className="grid sm:grid-cols-2 gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="flex flex-col gap-1">
                <span>Título (PT)</span>
                <input
                  type="text"
                  {...register("title_pt")}
                  placeholder="Nome"
                  className="bg-zinc-50 px-3 py-1 rounded-md"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Título (EN)</span>
                <input
                  type="text"
                  {...register("title_en")}
                  placeholder="Title"
                  className="bg-zinc-50 px-3 py-1 rounded-md"
                />
              </label>

              <div className="flex flex-col gap-1 pb-20">
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
                          [
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "blockquote",
                          ],
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
              </div>
              <div className="flex flex-col gap-1 pb-20">
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
                          [
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "blockquote",
                          ],
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
              </div>

              <label className="flex flex-col gap-1">
                <span>Nome do Jornal (PT)</span>
                <input
                  type="text"
                  {...register("nome_jornal_pt")}
                  placeholder="Nome do Jornal"
                  className="bg-zinc-50 px-3 py-1 rounded-md"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span>Nome do Jornal (EN)</span>
                <input
                  type="text"
                  {...register("nome_jornal_en")}
                  placeholder="Nome do Jornal"
                  className="bg-zinc-50 px-3 py-1 rounded-md"
                />
              </label>

              <label className="flex flex-col gap-1 sm:col-span-2">
                <span>Link da Noticia</span>
                <input
                  type="text"
                  {...register("link_noticia")}
                  placeholder="http://"
                  className="bg-zinc-50 px-3 py-1 rounded-md"
                />
              </label>

              <label className="grid sm:col-span-2 sm:grid-cols-2 gap-1 text-sm">
                <div className="flex flex-col gap-1">
                  <span>Imagem da Noticia</span>
                  <input
                    type="file"
                    {...register("img")}
                    className="w-full sm:w-fit"
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
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </div>
                  )}
                </div>
              </label>

              <button
                className="bg-black sm:col-span-2 text-white py-1 rounded-md"
                disabled={isLoading}
              >
                {isLoading ? "Salvando" : "Salvar"}
              </button>
            </form>

            <button
              onClick={() => {
                reset();
                setIsEdit(false);
                setImagePreview(null);
                setIsOpen(false);
              }}
              className="text-red-500 absolute top-3 right-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
