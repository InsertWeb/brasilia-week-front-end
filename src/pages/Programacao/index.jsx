import { useEffect } from "react";
import { MainProgramacao } from "../../components/programacao-components/MainProgramacao";
import { Footer } from "../../components/utils/Footer";
import { Header } from "../../components/utils/Header";

export function ProgramacaoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <MainProgramacao />
      <Footer />
    </div>
  );
}
