import { create } from "zustand";

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
}

interface RouterActions {
  setActive: (route: PageRoutes) => void;
}

const initialState: RouterState = {
  activePage: PageRoutes.SURVEY_DASHBOARD,
};

export const useRouterStore = create<RouterState & RouterActions>((set) => ({
  ...initialState,
  setActive: (route) => set({ activePage: route }),
}));
