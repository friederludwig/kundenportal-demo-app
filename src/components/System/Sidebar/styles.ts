import classNames from 'classnames';
import { SidebarSection } from './index';
import { PageRoutes } from '../../../lib/store/router.store';

export const getSidebarStyles = (currentSubmenuOpen: SidebarSection[] | null, currentPageActive?: PageRoutes) => ({
        wrapper: classNames(
            'h-full w-[16rem] pt-16',
            'fixed left-0 top-0 z-40',
            'pb-6',
            'bg-black',
            'overflow-y-scroll',
            'flex flex-col justify-between',
            'transition',
        ),
        section: classNames(
            'relative px-6 py-2',
            'bg-[#000]/60',
        ),
        sectionArrow: (section: SidebarSection) => classNames(
            'absolute right-6 opacity-60 -translate-y-0',
            currentSubmenuOpen?.includes(section) ? 'rotate-180' : '',
        ),
        menuLink: classNames(
            'text-white/70 py-2 flex gap-2 text-xs uppercase tracking-wider items-center w-full',
        ),
        sectionLink: (section: PageRoutes | null) => classNames(
            'relative text-white py-2 flex gap-2.5 items-center w-full tracking-wide text-[0.9rem]',
            'leading-none py-3',
            section === currentPageActive ? 'font-semibold' : '',
            !section ? 'cursor-not-allowed' : '',
        ),
        submenu: classNames(
            'mt-1',
        ),
        linkActiveIndicator: (section: PageRoutes | null) => classNames(
            currentPageActive === section ? 'bg-primary/100' : '',
            'w-[4px] rounded-r h-[94%] absolute -left-6 top-1/2 -translate-y-1/2 transition-all',
        ),
        submenuActiveIndicator: classNames(
            'w-[3px] h-full bg-primary/50 absolute left-0 top-0 rounded-r-full',
        ),
    })
;
