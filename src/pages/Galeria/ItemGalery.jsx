import { useEffect, useState } from "react";
import { PageConfig } from "../../Utils/services";
import { useParams } from "react-router";
import { Header } from "../../components/utils/Header";
import { Footer } from "../../components/utils/Footer";

export function ItemGalery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const lang = localStorage.getItem("lang");
  const { id } = useParams();

  const description = lang === "en" ? data?.descricao_en : data?.descricao_pt;

  useEffect(() => {
    getItemGalery(id);
  }, []);

  async function getItemGalery(id) {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await PageConfig.getItemGaleria(id);
        if (response && response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        return error;
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div>
      <Header />
      {loading ? (
        <div className="max-w-6xl mx-auto animate-pulse">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
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
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold">
              {lang === "en" ? data?.title_en : data?.title_pt}
            </h3>
          </div>
          <div className="relative p-6">
            {data.link_youtube && (
              <a
                href={data.link_youtube}
                target="_blank"
                className="underline text-blue-900"
              >
                {data.link_youtube}
              </a>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <img
                src={data.filePath}
                alt={data.title_pt}
                className="object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
