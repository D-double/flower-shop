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

const PopUpStreet = () => {
  const { street, setStreet, setConfirmTitle } = usePopUpStore();
  const [alignment, setAlignment] = useState(street ? street.id : 1);
  const clickHandler = (newAlignment)=>{
    setAlignment(newAlignment)
    const seleted = streets.find((elem)=> elem.id == newAlignment)
    setStreet(seleted)
    setConfirmTitle(`Ваша улица ${seleted.name}`)
    // setModalName(modalNames.confirm)
  }

  return (
    <PopUpSelect
      onClick={clickHandler}
      list={streets}
      title={ street ? `Ваша улица ${street.name}` : "Куда доставить" }
      holder={"Введите название вашей улицы"}
      select={modalNames.confirm}
      alignment={alignment}
    />
  );
};

export default PopUpStreet;
