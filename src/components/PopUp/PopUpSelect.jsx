import s from "./pop-up-select.module.css";
import PopUpLayout from "./PopUpLayout";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


const PopUpSelect = ({list, title, holder, onClick, alignment}) => {
  const handleChange = (event, newAlignment) => {
    onClick(newAlignment);
  };
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
        onChange={handleChange}
        aria-label="Street"
        className={s.popSelect__group}
      >
        {list.map((elem) => (
          <ToggleButton
            // onClick={onClick}
            className={s.popSelect__btn}
            key={elem.id}
            value={elem.id}
          >
            {elem.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </PopUpLayout>
  );
};

export default PopUpSelect;
