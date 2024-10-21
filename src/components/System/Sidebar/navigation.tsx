import { ReactNode } from 'react';
import { Download, Grid, List, PieChart, PlusSquare } from 'react-feather';
import { PageRoutes } from '../../../lib/store/router.store';
import { SidebarSection } from './index';

interface SidebarMenuSection {
    name: SidebarSection;
    title: string;
    children: SidebarMenuLink[];
}

interface SidebarMenuLink {
    title: string,
    route: PageRoutes | null,
    icon?: ReactNode;
}


export const SIDEBAR_NAVIGATION: SidebarMenuSection[] = [
    {
        name: "survey",
        title: "Umfragen",
        children: [
            {
                title: "Neue Umfrage",
                route: PageRoutes.SURVEY_NEW,
                icon: <PlusSquare size={18} />,
            },
            {
                title: "Dashboard",
                route: PageRoutes.SURVEY_DASHBOARD,
                icon: <PieChart size={18} />,
            },
            {
                title: "Alle Umfragen",
                route: PageRoutes.SURVEY_LIST,
                icon: <List size={18} />,
            },
            {
                title: "Teilnehmer",
                route: null,
            },
        ]
    },
    {
        name: "distribution",
        title: "Produkte",
        children: [
            {
                title: "Produktkatalog",
                route: PageRoutes.PRODUCT_LIST,
                icon: <Grid size={18} />,
            },
            {
                title: "Neues Produkt",
                route: null,
            },
        ]
    },
    {
        name: "self-service",
        title: "Self-Service",
        children: [
            {
                title: "Downloads",
                route: PageRoutes.DOWNLOAD_OVERVIEW,
                icon: <Download size={18} />,
            },
            {
                title: "Neues Bundle",
                route: PageRoutes.DOWNLOAD_NEW,
                icon: <PlusSquare size={18} />,
            },
        ]
    },
]
