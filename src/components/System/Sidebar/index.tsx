import { FC, useState } from 'react';
import { getSidebarStyles } from './styles';
import { SIDEBAR_NAVIGATION } from './navigation';
import { ArrowDown, HelpCircle, Settings } from 'react-feather';

import LinkRouter from '../LinkRouter';
import { useRouterStore } from '../../../lib/store/router.store';
import { useConfigStore } from '../../../lib/store/config.store';

export type SidebarSection = "survey" | "self-service" | "distribution";

const Sidebar: FC = () => {
    const [openMenuSections, setCurrentSubmenuOpen] = useState<SidebarSection[]>(["distribution" , "survey", "self-service"])
    const currentPageActive = useRouterStore(state => state.activePage);
    const styles = getSidebarStyles(openMenuSections, currentPageActive);
    const configStore = useConfigStore();

    const handleCurrentSubmenuOpen = (submenu: SidebarSection) => {
        setCurrentSubmenuOpen(current => (!current?.includes(submenu)
            ? [...current, submenu] : current.filter(s => s !== submenu)))
    }

    return (
        <div className={`${styles.wrapper} ${configStore.sidebarVisible ? "": "max-xl:-translate-x-full"}`}>
            <ul className="border-l-2 border-primary/50">
                {SIDEBAR_NAVIGATION.map(section => (
                    <li className={styles.section}>
                        <button
                            className={styles.menuLink}
                            onClick={() => handleCurrentSubmenuOpen(section.name)}>
                        
                            <span className={"font-medium"}>
                                {section.title}
                            </span>
                            <span
                                className={styles.sectionArrow(section.name)}>
                                <ArrowDown size={16}/>
                            </span>
                        </button>
                        {openMenuSections?.includes(section.name) &&
                            <ul className={styles.submenu}>
                                {section.children.map(sectionLink =>
                                    <>
                                        {sectionLink.route &&
                                            <li className={`relative group ${!sectionLink.route ? "opacity-70" : "group-hover:bg-primary/40"}`}>
                                                <div className={styles.linkActiveIndicator(sectionLink.route)}></div>
                                                {sectionLink.route ?
                                                    <LinkRouter
                                                        className={styles.sectionLink(sectionLink.route)}
                                                        route={sectionLink.route}>
                                                        <span className="opacity-70">{sectionLink.icon}</span>
                                                        {sectionLink.title}
                                                    </LinkRouter>
                                                    :
                                                    <div className={styles.sectionLink(sectionLink.route)}>
                                                        <span className="cursor-default">{sectionLink.title}</span>
                                                    </div>
                                                }
                                            </li>
                                        }
                                    </>
                                )}
                            </ul>
                        }
                    </li>
                ))}
            </ul>
            <div>
                <ul className="text-white opacity-70 space-y-3 cursor-default mt-12 pl-5">
                    <li className="flex gap-2.5 items-center mb-5"><Settings size={18} />Einstellungen</li>
                    <li className="flex gap-2.5 items-center"><HelpCircle size={18} />Hilfe & Support</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
