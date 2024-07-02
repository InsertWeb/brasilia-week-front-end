import { useEffect, useState } from "react";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";
import { useGetInfos } from "../../Utils/useGetInfos";
import { ModalFoto } from "./ModalFoto";

export function GaleriaPage() {
  const context = useGetInfos();
  const eventos = context?.dataHomepage?.galeria;

  const lang = localStorage.getItem("lang");
  const [isOpen, setIsOpen] = useState(false);
  const [imagem, setImagem] = useState(false);

  const openModal = (e) => {
    setImagem(e);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="font-['Helvetica'] max-w-6xl mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-5xl pb-16">
          {lang === "en" ? "GALERY" : "GALERIA"}
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14">
          {eventos?.map((e) => (
            <div
              className="space-y-3 font-semibold"
              key={e.id}
              onClick={() => openModal(e)}
            >
              <img
                src={e.filePath}
                alt={lang === "en" ? e.title_en : e.title_pt}
                className="w-full h-80 object-cover"
              />
              <p>{lang === "en" ? e.title_en : e.title_pt}</p>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <ModalFoto onClose={closeModal} data={imagem} />}
      <Footer />
    </div>
  );
}
