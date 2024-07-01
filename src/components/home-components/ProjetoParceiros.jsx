import Parceiro1 from "../../assets/parceiros1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

export function ProjetoParceiros({ lang, data }) {
  return (
    <div className="font-['Helvetica'] relative bg-[url('/bg-cicle.svg')]">
      <div className="bg-[#83BF45] absolute w-full h-full max-h-[60%] bottom-0"></div>
      <svg
        width="491"
        height="795"
        viewBox="0 0 491 795"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 -z-10"
      >
        <circle cx="397.5" cy="397.5" r="397" stroke="#83BF45" />
        <circle cx="78" cy="164" r="31" fill="#83BF45" />
      </svg>
      <div className="max-w-6xl mx-auto py-44 px-4">
        <h2 className="text-4xl relative tracking-[16%] font-light pb-14">
          {lang === "en" ? "PARTNER PROJECTS" : "PROJETOS PARCEIROS"}
        </h2>

        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          }}
        >
          {data?.map((e) => (
            <SwiperSlide key={e.id}>
              <div className="flex flex-col gap-2 sm:max-w-64">
                <img
                  src={e.filePath}
                  alt=""
                  className="w-full h-72 object-cover"
                />
                <h3 className="text-2xl font-semibold">
                  {lang === "en" ? e.title_en : e.title_pt}
                </h3>
                <p className="text-white h-12">
                  {lang === "en" ? e.descricao_en : e.descricao_pt}
                </p>
                <Link
                  to={"/parceiros"}
                  className="bg-white hover:bg-zinc-100 duration-300 px-12 py-3 text-sm font-semibold text-center"
                >
                  {lang === "en" ? "SEE MORE" : "VEJA MAIS"}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
