import { IconLocalization, IconSite } from "../../assets/Icons";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function LocaisPage() {
  return (
    <div className="font-['Helvetica']">
      <Header />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-5xl pb-10">Locais</h2>
        <div>
          {Array.from({ length: 10 }).map(() => (
            <div className="space-y-3 border-b-2 border-[#83BF45] py-7">
              <h3 className="text-3xl sm:text-4xl pb-2">
                Local 01 Descrição aqui exemplo
              </h3>
              <div className="text-[#83BF45] flex gap-2 items-center">
                <IconLocalization />
                <span className="text-black">
                  Endereço fisico do local aqui
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <IconSite />
                <span>www.site.com.br</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
