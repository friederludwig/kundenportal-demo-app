import { ReactNode } from 'react';
import SurveyDashboard from '../../components/SurveyDashboard';
import SurveyNew from '../../components/SurveyNew';
import Products from '../../components/ProductList';
import { PageRoutes } from '../store/router.store';
import SurveyList from '../../components/SurveyList';
import Downloads from '../../components/Downloads';
import DownloadNew from '../../components/DownloadNew';

/**
 *  This project use the state library 'zustand' to handle the global page routing.
 */
interface Route {
    id: number;
    component: ReactNode;
}

// mapping routes to page components
export const APP_ROUTES: Record<PageRoutes, Route> = {
    [PageRoutes.SURVEY_DASHBOARD]: {
        id: 0,
        component: <SurveyDashboard />,
    },
    [PageRoutes.SURVEY_NEW]: {
        id: 1,
        component: <SurveyNew />,
    },
    [PageRoutes.DOWNLOAD_OVERVIEW]: {
        id: 2,
        component: <Downloads />,
    },
    [PageRoutes.DOWNLOAD_NEW]: {
        id: 3,
        component: <DownloadNew />,
    },
    [PageRoutes.PRODUCT_LIST]: {
        id: 4,
        component: <Products />,
    },
    [PageRoutes.SURVEY_LIST]: {
        id: 5,
        component: <SurveyList />,
    },
};
