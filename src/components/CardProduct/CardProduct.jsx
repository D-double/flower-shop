import { useState } from "react";
import { icons, images } from "../../utils";
import s from "./card-product.module.css";

const CardProduct = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  return (
    <div className={s.cardProduct}>
      <img src={images.card} alt="" className={s.cardProduct__img} />
      <button onClick={() => setLike(!like)} className={s.cardProduct__like} >
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.425 0C3.32429 0 0 3.87379 0 8.65228C0 17.3046 8.775 25.1703 13.5 27C18.225 25.1703 27 17.3046 27 8.65228C27 3.87379 23.6757 0 19.575 0C17.0638 0 14.8437 1.45272 13.5 3.67628C12.1563 1.45272 9.9362 0 7.425 0Z" fill={like ? "#C30505" : "#b3b0b0"} />
        </svg>
      </button>
      <div className={s.cardProduct__box}>
        <p className={s.cardProduct__name}>
          <img src={icons.shopIcon} alt="" />
          Салон цветов Интрига
        </p>
        <h4 className={`${s.cardProduct__title} text-limit`}>
          Авторский букет 51 кустовая роза
        </h4>
        <div className={s.cardProduct__wrapper}>
          <p className={s.cardProduct__price}>
            7700 <span>₽</span>
          </p>
          <p className={s.cardProduct__discount}>
            15 400 <span>₽</span>
          </p>
          <p className={s.cardProduct__rating}>
            <img src={icons.starIcon} alt="" />
            4,8
          </p>
        </div>
        {!count ? (
          <button onClick={() => setCount(1)} className={s.cardProduct__cart}>
            <img src={icons.cartIcon} alt="" />
            Купить
          </button>
        ) : (
          <div className={s.cardProduct__controls}>
            <button onClick={() => setCount(count - 1)}>–</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
