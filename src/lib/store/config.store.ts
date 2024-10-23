import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface ConfigState {
    sidebarVisible: boolean;
}

interface RouterActions {
    setSidebarActive: (isVisible: boolean) => void;
}

const initialState: ConfigState = {
    sidebarVisible: false
};

export const useConfigStore = create<ConfigState & RouterActions>()(
    persist(
        (set) => ({
            ...initialState,
            setSidebarActive: (isVisible) => set((state) => ({
                sidebarVisible: isVisible,
            }))
        }),
        {
            name: 'config-storage',
            partialize: (state) => ({ sidebarVisible: state.sidebarVisible }),
        }
    )
);
