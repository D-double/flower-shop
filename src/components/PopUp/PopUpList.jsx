import { useState } from "react";
import { usePopUpStore } from "../../store/popUpStore";
import modalNames from "../../utils/modalNames";
import PopUpSelect from "./PopUpSelect";

const streets = [
  { id: 1, name: "Ленина" },
  { id: 2, name: "Луховицая" },
  { id: 3, name: "Озерцовая" },
  { id: 4, name: "Зарайская" },
  { id: 5, name: "Воскресенская" },
  { id: 6, name: "Егорьевская" },
];

const cities = [
  { id: 1, name: "Коломна" },
  { id: 2, name: "Луховицы" },
  { id: 3, name: "Озерцы" },
  { id: 4, name: "Зарайск" },
  { id: 5, name: "Воскресенск" },
  { id: 6, name: "Егорьевск" },
];

const PopUpList = ({type}) => {
  const { street, city, setSelected } = usePopUpStore();
  const data = type == modalNames.street ? street : city;
  const list = type == modalNames.street ? streets : cities;
  const titleStart = type == modalNames.street ? 'Ваша улица' : 'Ваш город';
  const [alignment, setAlignment] = useState( data ? data.id : 1);
  const clickHandler = (newAlignment)=>{
    setAlignment(newAlignment)
    const selected = list.find((elem)=> elem.id == newAlignment)
    setSelected({data: selected, title: `${titleStart} ${selected.name}`, type})
  }

  return (
    <PopUpSelect
      onClick={clickHandler}
      list={list}
      title={ data ? `${titleStart} ${data.name}` : "Куда доставить" }
      holder={type == modalNames.street ? "Введите название вашей улицы" : 'Введите название своего города'}
      alignment={alignment}
    />
  );
};

export default PopUpList;
