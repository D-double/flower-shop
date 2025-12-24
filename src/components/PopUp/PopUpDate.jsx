import { useState } from "react";
import s from "./pop-up-date.module.css";
import { icons } from "../../utils";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale/ru";
import PopUpLayout from "./PopUpLayout";
registerLocale("ru", ru);

const PopUpDate = () => {
  //radio
  const [value, setValue] = useState("faster");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //dataPicker
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <PopUpLayout title='Выберите время доставки' className={s.popData}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          className={s.popData__group}
        >
          <FormControlLabel
            className={s.popData__label}
            value="time"
            control={
              <Radio
                icon={<img src={icons.radioIcon} alt="" />}
                checkedIcon={<img src={icons.radioCheckIcon} alt="" />}
              />
            }
            label="Ко времени"
          />
          <FormControlLabel
            className={s.popData__label}
            value="faster"
            control={
              <Radio
                icon={<img src={icons.radioIcon} alt="" />}
                checkedIcon={<img src={icons.radioCheckIcon} alt="" />}
              />
            }
            label="Как можно быстрее"
          />
        </RadioGroup>
        {
          value == 'faster' && (
            <>
              <h4 className={s.popData__subtitle}>Выберите дату</h4>
              <DatePicker
                selected={selectedDate}
                onChange={setSelectedDate}
                inline
                calendarClassName={s.popData__calendar}
                locale="ru"
              />
              <h4 className={s.popData__subtitle}>Выберите время</h4>
              <button className={`${s.popData__time} ${value == 'faster' ? s.active : ''}`}>Выбрать удобный  интервал</button>
            </>
          )
        }
        <button className={`${s.popData__time} ${value == 'time' ? s.active : ''}`}>Сохранить</button>
    </PopUpLayout>
  );
};

export default PopUpDate;
