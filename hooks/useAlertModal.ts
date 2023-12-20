import { create } from 'zustand'

interface useAlertModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useAlertModal = create<useAlertModal>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useAlertModal