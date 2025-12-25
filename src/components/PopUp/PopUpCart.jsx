import s from "./pop-up-cart.module.css";
import { images } from "../../utils";
import PopUpLayout from "./PopUpLayout";

const PopUpCart = () => {

  return (
    <PopUpLayout title="Корзина" className={s.popCart}>
      <div className={s.popCart__shop}>
        <h4>Салон цветов “Букет”</h4>
        <p>
          Доставка: <span>20 ноября в 17:00 - 18:00</span>
        </p>
      </div>
      <div className={s.popCart__wrapper}>
        <img src={images.card} alt="" className={s.popCart__img} />
        <h4 className={s.popCart__name}>Пионы “саманта”</h4>
        <div className={s.popCart__box}>
          <div className={s.popCart__count}>
            <button>–</button>
            <span>1</span>
            <button>+</button>
          </div>
          <p className={s.popCart__price}>1000 ₽</p>
        </div>
      </div>
      <input type="text" className={s.popCart__promo} placeholder="Промокод"/>
      <div className={s.popCart__card}>
        <p>1 товар</p>
        <span>1000 ₽</span>
      </div>
      <div className={s.popCart__card}>
        <p>Скидка</p>
        <span>0 ₽</span>
      </div>
      <div className={s.popCart__card}>
        <p>Доставка</p>
        <span>200 ₽</span>
      </div>
      <div className={s.popCart__total}>
        <p>Итого:</p>
        <span>1200 ₽</span>
      </div>
      <button className={s.popCart__btn}>Продолжить оформление</button>
    </PopUpLayout>
  );
};

export default PopUpCart;
