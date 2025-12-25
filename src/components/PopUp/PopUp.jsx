import Modal from "@mui/material/Modal";
import { usePopUpStore } from "../../store/popUpStore";
import PopUpAuth from "./PopUpAuth";
import modalNames from "../../utils/modalNames";
import PopUpMenu from "./PopUpMenu";
import PopUpAddress from "./PopUpAddress";
import PopUpDate from "./PopUpDate";
import PopUpStreet from "./PopUpStreet";
import PopUpConfirm from "./PopUpConfirm";
import PopUpCart from "./PopUpCart";



const PopUp = () => {
  const {open, setOpen, modalName} = usePopUpStore();
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          modalName == modalNames.menu ? 
          <PopUpMenu/> :
          modalName == modalNames.address ? 
          <PopUpAddress/> :
          modalName == modalNames.date ? 
          <PopUpDate/> :
          modalName == modalNames.street ? 
          <PopUpStreet/> :
          modalName == modalNames.confirm ? 
          <PopUpConfirm/> :
          modalName == modalNames.cart ? 
          <PopUpCart/> :
          <PopUpAuth/> 
          
        }
      </Modal>
    </div>
  );
};

export default PopUp;
