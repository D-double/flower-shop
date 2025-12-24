import s from "./pop-up-layout.module.css";
import { icons } from "../../utils";
import { usePopUpStore } from "../../store/popUpStore";

const PopUpLayout = ({children, title, className}) => {
  const { setOpen } = usePopUpStore();

  return (
    <div className={`${s.popLayout} ${className}`}>
      <h2 className={s.popLayout__title}>
        {title}
        <button onClick={() => setOpen(false)}>
          <img src={icons.closeIcon} alt="" />
        </button>
      </h2>
      {children}
    </div>
  )
}

export default PopUpLayout


