import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const enum PageRoutes {
    SURVEY_DASHBOARD = "survey-dashboard",
    SURVEY_NEW = "survey-new",
    DOWNLOAD_OVERVIEW = "download-overview",
    DOWNLOAD_NEW = "download-new",
    PRODUCT_LIST = "product-list",
    SURVEY_LIST = "survey-list",
}

interface RouterState {
    activePage: PageRoutes;
    visitedLinks: PageRoutes[];
}

interface RouterActions {
    setActive: (route: PageRoutes) => void;
    addVisitedLink: (route: PageRoutes) => void;
}

const initialState: RouterState = {
    activePage: PageRoutes.PRODUCT_LIST,
    visitedLinks: [],
};

export const useRouterStore = create<RouterState & RouterActions>()(
    persist(
        (set) => ({
            ...initialState,
            setActive: (route) => set((state) => ({
                activePage: route,
            })),
            addVisitedLink: (route) => set((state) => ({
                visitedLinks: [...state.visitedLinks, route],
            })),
        }),
        {
            name: 'router-storage',
            partialize: (state) => ({ activePage: state.activePage, visitedLinks: state.visitedLinks }),
        }
    )
);
