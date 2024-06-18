import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Galery1 from "../../assets/galery/galeria1.png";
import Galery2 from "../../assets/galery/galeria2.png";
import Galery3 from "../../assets/galery/galeria3.png";

export function Carrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    /* autoplay: true,
    autoplaySpeed: 3000, */
  };

  return (
    <Slider {...settings} className="pb-24">
      <div className="pr-10 space-y-3 font-semibold">
        <img src={Galery1} alt={""} className="w-full h-80 object-cover" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="pr-10 space-y-3 font-semibold">
        <img src={Galery2} alt={""} className="w-full h-80 object-cover" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="pr-10 space-y-3 font-semibold">
        <img src={Galery3} alt={""} className="w-full h-80 object-cover" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="pr-10 space-y-3 font-semibold">
        <img src={Galery1} alt={""} className="w-full h-80 object-cover" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="pr-10 space-y-3 font-semibold">
        <img src={Galery2} alt={""} className="w-full h-80 object-cover" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
    </Slider>
  );
}
