import CardProduct from "../CardProduct/CardProduct";
import s from "./products.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Grid } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/grid";
import { useState } from "react";

const Products = () => {
  const list = Array(24).fill(1);
  const [nextShow, setNextShow] = useState(true);
  const [prevShow, setPrevShow] = useState(false);
  const [swiperObj, setSwiperObj] = useState(null);
  // let swiperObj = null;
  const changeSlide = (btnName) => {
    if (btnName == "next") {
      swiperObj.slideNext();
    }
    if (btnName == "prev") {
      swiperObj.slidePrev();
    }
  };
  return (
    <div className={s.products}>
      <div className="container">
        <h2 className={s.products__title}>Классичечкие букеты</h2>
        <h3 className={s.products__subtitle}>Авторские букеты</h3>
      </div>
      <div className={s.products__list}>
        {prevShow && (
          <div
            onClick={() => changeSlide("prev")}
            className={s.products__prev}
          ></div>
        )}
        {nextShow && (
          <div
            onClick={() => changeSlide("next")}
            className={s.products__next}
          ></div>
        )}
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          grid={{
            rows: 2,
            fill: "row",
          }}
          onProgress={(_, pro) => {
            setPrevShow(pro == 0 ? false : true);
            setNextShow(pro == 1 ? false : true);
          }}
          modules={[Grid]}
          onSwiper={(swiper) => {
            setSwiperObj(swiper)
          }}
        >
          {list.map(() => (
            <SwiperSlide>
              <CardProduct />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
