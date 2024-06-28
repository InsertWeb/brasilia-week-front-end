import { SwiperSlide, Swiper } from "swiper/react";

export function Galeria({ lang, data }) {
  return (
    <div className="pb-20 pt-10">
      <div className="max-w-6xl px-4 mx-auto font-['Helvetica']">
        <h2 className="text-4xl relative tracking-[16%] font-light pb-14">
          {lang === "en" ? "Galery" : "Galeria"}
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
          {data.map((e) => (
            <SwiperSlide>
              <div className="space-y-3 font-semibold">
                <img
                  src={e.filePath}
                  alt={lang === "en" ? e.descricao_en : e.descricao_pt}
                  className="w-full h-80 object-cover"
                />
                <p>{lang === "en" ? e.descricao_en : e.descricao_pt}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
