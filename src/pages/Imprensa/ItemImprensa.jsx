import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "../../components/utils/Header";
import { Footer } from "../../components/utils/Footer";
import { PageConfig } from "../../Utils/services";

export function ItemImprensa() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const lang = localStorage.getItem("lang");
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getItemImprensa(id);
  }, []);

  async function getItemImprensa(id) {
    setLoading(true);

    try {
      const response = await PageConfig.getItemImprensa(id);
      if (response && response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Header />
      {loading ? (
        <div className="max-w-6xl mx-auto animate-pulse min-h-screen p-5">
          <div className="flex items-start justify-between py-3 rounded-t border-b border-gray-200">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          </div>
          <div className="relative p-6">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
              <div className="object-cover w-full h-96 bg-gray-300"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto fontHelveticaLight min-h-screen p-5">
          <h3 className="text-xl font-semibold py-3 border-b border-gray-200">
            {lang === "en" ? data?.title_en : data?.title_pt}
          </h3>
          <div className="grid grid-cols-2 gap-5 py-3">
            <div className="flex flex-col">
              <p
                className="flex-1"
                dangerouslySetInnerHTML={{
                  __html:
                    lang === "en" ? data?.descricao_en : data?.descricao_pt,
                }}
              />
              <br />
              <p className="text-end">
                {lang === "en" ? data?.nome_jornal_en : data?.nome_jornal_pt}
              </p>
              <a
                target="_blank"
                href={data.link_noticia}
                className="text-sm text-blue-800 text-end"
              >
                {data.link_noticia}
              </a>
            </div>
            <img
              src={data.filePath}
              alt={lang === "en" ? data?.title_en : data?.title_pt}
              className="object-cover w-full h-96"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
