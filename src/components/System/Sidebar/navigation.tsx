import { ReactNode } from 'react';
import { Activity, Codepen, Download, FilePlus, FolderPlus, Grid, List, PieChart, Play, PlusSquare, RefreshCw, Settings, Sliders, Users } from 'react-feather';
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
        name: "distribution",
        title: "Produkte",
        children: [
            {
                title: "Produktkatalog",
                route: PageRoutes.PRODUCT_LIST,
                icon: <Grid size={18} />,
            },
            {
                title: "Import/Export",
                route: null,
                icon: <RefreshCw size={18} />,
            },
        ]
    },
    {
        name: "configurations",
        title: "Konfigurator",
        children: [
            {
                title: "Dashboard",
                route: null,
                icon: <PieChart size={18} />,
            },
            {
                title: "Einstellungen",
                route: null,
                icon: <Sliders size={18} />,
            },
        ]
    },
    {
        name: "survey",
        title: "Umfragen",
        children: [
            {
                title: "Dashboard",
                route: PageRoutes.SURVEY_DASHBOARD,
                icon: <PieChart size={18} />,
            },
            {
                title: "Empfängergruppen",
                route: null, 
                icon: <Users size={18} />,
            },
            {
                title: "Aktive Umfragen",
                route: null, 
                icon: <Play size={18} />,
            },
            {
                title: "Analyse",
                route: null, 
                icon: <Activity size={18} />,
            },
            {
                title: "Neue Umfrage",
                route: PageRoutes.SURVEY_NEW,
                icon: <PlusSquare size={18} />,
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
                title: "Neuer Ordner",
                route: PageRoutes.DOWNLOAD_NEW,
                icon: <FolderPlus size={18} />,
            },
        ]
    },
    {
        name: "system-integration",
        title: "Systemintegration",
        children: [
            {
                title: "Anbindung CRM/ERP",
                route: null,
                icon: <Codepen size={18} />,
            },
            {
                title: "Import/Export",
                route: null,
                icon: <RefreshCw size={18} />,
            },
        ]
    }
];
