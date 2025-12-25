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
    return {selected: val}
  }),
  confirmTitle: '',
  setConfirmTitle: (val) => set({ confirmTitle: val }),
  confirm: true,
  setConfirm: (val) => set({ confirm: val }),
}))
