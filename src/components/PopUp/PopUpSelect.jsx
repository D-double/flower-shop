import s from "./pop-up-select.module.css";
import PopUpLayout from "./PopUpLayout";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


const PopUpSelect = ({list, title, holder, onClick, alignment}) => {
  
  return (
    <PopUpLayout title={title} className={s.popSelect}>
      <input
        type="text"
        className={s.popSelect__input}
        placeholder={holder}
      />
      <ToggleButtonGroup
        value={alignment}
        exclusive
        // aria-label="Street"
        className={s.popSelect__group}
      >
        {list.map((elem) => (
          <ToggleButton
            className={s.popSelect__btn}
            key={elem.id}
            value={elem.id}
            onClick={()=>onClick(elem.id)}
          >
            {elem.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </PopUpLayout>
  );
};

export default PopUpSelect;
