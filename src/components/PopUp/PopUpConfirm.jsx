import s from "./pop-up-confirm.module.css";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { usePopUpStore } from "../../store/popUpStore";

const PopUpConfirm = () => {
  const { setConfirm, selected } = usePopUpStore();
  const clickConfirm = (val)=>{
    setConfirm(val)
  }
  return (
    <div className={s.popConfirm}>
      <h2 className={s.popConfirm__title}>{selected ? selected.title : ''}</h2>
      <ButtonGroup className={s.popConfirm__group} variant="contained" aria-label="Basic button group">
        <Button onClick={()=> clickConfirm(true)} className={s.popConfirm__btn}>Да, верно</Button>
        <Button onClick={()=> clickConfirm(false)} className={s.popConfirm__btn}>Нет, другой</Button>
      </ButtonGroup>
    </div>
  );
};

export default PopUpConfirm;
