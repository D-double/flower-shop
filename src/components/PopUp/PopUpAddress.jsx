import s from "./pop-up-address.module.css";
import { icons } from "../../utils";
import { usePopUpStore } from "../../store/popUpStore";
import PopUpLayout from "./PopUpLayout";
import modalNames from "../../utils/modalNames";

const PopUpAddress = () => {
  const { setModalName } = usePopUpStore();

  return (
    <PopUpLayout title="Укажите адрес доставки" className={s.popAddress}>
      <p className={s.popAddress__desc}>
        Покажем вам магазины, чтобы заказать доставку
      </p>
      <div className={s.popAddress__wrapper}>
        <div className={s.popAddress__data}>
          <img src={icons.addressIcon} alt="" />
          <p>Город, улица, дом</p>
          <p>Москава, ул.Басманная, 19с5</p>
        </div>
        <button onClick={()=>setModalName(modalNames.street)} className={s.popAddress__btn}>Привезти сюда</button>
      </div>
      <iframe
        className={s.popAddress__map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577337.0328040188!2d36.72592950119126!3d55.58072979615141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2s!4v1766430552537!5m2!1sru!2s"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </PopUpLayout>
  );
};

export default PopUpAddress;
