import Galery1 from "../../assets/galery/galeria1.png";
import Galery2 from "../../assets/galery/galeria2.png";
import Galery3 from "../../assets/galery/galeria3.png";
import { SwiperSlide, Swiper } from "swiper/react";

export function Galeria() {
  return (
    <div className="pb-20 pt-10">
      <div className="max-w-6xl px-4 mx-auto font-['Helvetica']">
        <h2 className="text-4xl relative tracking-[16%] font-light pb-14">
          GALERIA
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
          <SwiperSlide>
            <div className="space-y-3 font-semibold">
              <img
                src={Galery1}
                alt={""}
                className="w-full h-80 object-cover"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-3 font-semibold">
              <img
                src={Galery2}
                alt={""}
                className="w-full h-80 object-cover"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-3 font-semibold">
              <img
                src={Galery3}
                alt={""}
                className="w-full h-80 object-cover"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-3 font-semibold">
              <img
                src={Galery1}
                alt={""}
                className="w-full h-80 object-cover"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
