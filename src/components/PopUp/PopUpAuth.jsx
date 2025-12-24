import s from "./pop-up-auth.module.css";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import PopUpLayout from "./PopUpLayout";

const PopUpAuth = () => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
  const [toggle, setToggle] = useState(true);

  return (
    <PopUpLayout title="Авторизация" className={s.popAuth}>
      <h3 className={s.popAuth__title}>Войдите или зрегистрируйтесь</h3>
      <div className={s.popAuth__toggle}>
        <button
          onClick={() => setToggle(true)}
          className={`${s.popAuth__toggleBtn} ${toggle ? s.active : ""}`}
        >
          Вход для клиента
        </button>
        <button
          onClick={() => setToggle(false)}
          className={`${s.popAuth__toggleBtn} ${!toggle ? s.active : ""}`}
        >
          Вход для магазина
        </button>
      </div>
      <p className={s.popAuth__desc}>
        Напишите свой номер телефона - мы пришлем на него СМС с кодом
        подтверждения
      </p>
      <input
        type="text"
        className={s.popAuth__input}
        placeholder="Номер телефона"
      />
      <button className={s.popAuth__btn}>Получить СМС с кодом</button>
      <div className={s.popAuth__agree}>
        <Checkbox className={s.popAuth__check} {...label} />
        <p>
          Соглашаюсь с правилами платформы и даю согласие на обработку моих
          персональных данных
        </p>
      </div>
    </PopUpLayout>
  );
};

export default PopUpAuth;
