import s from "./pop-up-menu.module.css";
import { usePopUpStore } from "../../store/popUpStore";
import { icons, menuIcons } from "../../utils";

const PopUpMenu = () => {
  const { setOpen } = usePopUpStore();
  return (
    <div className={s.popMenu}>
      <button className={s.popMenu__close} onClick={() => setOpen(false)}>
        <img src={icons.closeIcon} alt="" />
      </button>
      <a href="" className={s.popMenu__link}>
        <img src={menuIcons.helpIcon} alt="" />
        Помощь
      </a>
      <h4 className={s.popMenu__title}>Аккаунт</h4>
      <a href="" className={s.popMenu__link}>
        <img src={menuIcons.profileIcon} alt="" />
        Профиль
      </a>
      <a href="" className={s.popMenu__link}>
        <img src={menuIcons.likeIcon} alt="" />
        Подборки
      </a>
      <a href="" className={s.popMenu__link}>
        <img src={menuIcons.orderIcon} alt="" />
        Заказы
      </a>
      <a href="" className={s.popMenu__link}>
        <img src={menuIcons.businessIcon} alt="" />
        Бизнесу
      </a>
      <h4 className={s.popMenu__title}>Партнерам</h4>
      <a href="" className={s.popMenu__link}>
        <img src={menuIcons.productsIcon} alt="" />
        Разместить свои товары
      </a>
    </div>
  );
};

export default PopUpMenu;
