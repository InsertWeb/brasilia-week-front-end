import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Galeria({ lang, data }) {
  return (
    <div className="pb-20 pt-10">
      <div className="max-w-6xl px-4 mx-auto fontHelveticaLight">
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
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          {data?.map((e) => (
            <SwiperSlide key={e.id} className=" pb-16">
              <Link
                className="space-y-3 font-semibold cursor-pointer"
                to={`/galeria/${e.id}`}
              >
                <img
                  src={e.filePath}
                  alt={lang === "en" ? e.title_en : e.title_pt}
                  className="w-full h-80 object-cover"
                />
                <p>{lang === "en" ? e.title_en : e.title_pt}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex">
          <Link
            to={"/galeria"}
            className="py-3 max-w-md border-2 border-black w-full text-center mx-auto mt-12 uppercase text-sm"
          >
            {lang === "en" ? "See the full gallery" : "Veja a galeria completa"}
          </Link>
        </div>
      </div>
    </div>
  );
}
