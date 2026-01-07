import { create } from 'zustand'
import modalNames from '../utils/modalNames'

export const usePopUpStore = create((set) => ({
  open: false,
  setOpen: (val) => set({ open: val }),
  modalName: modalNames.auth,
  setModalName: (val) => set({ modalName: val, open: true }),
  street: null,
  setStreet: (val) => set({ street: val }),
  city: null,
  setCity: (val) => set({ city: val }),
  selected: null,
  setSelected: (val) => set(()=>{
    return {
      selected: val, 
      modalName: modalNames.confirm,
      open: true
    }
  }),
  setConfirm: (val) => set((state)=>{ 
    if (val && state.selected) {
      return state.selected.type == modalNames.street ?
      {
        street: state.selected.data,
        modalName: modalNames.address
      } :
      {
        city: state.selected.data,
        modalName: modalNames.street
      }
    } else if(state.selected) {
      return {
        selected: null,
        modalName: state.selected.type
      }
    }
  }),
}))
