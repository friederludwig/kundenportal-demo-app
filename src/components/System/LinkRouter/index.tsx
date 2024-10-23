import { FC, ReactNode } from 'react';
import { PageRoutes, useRouterStore } from '../../../lib/store/router.store';

interface LinkRouterProps {
    route: PageRoutes;
    children?: ReactNode;
    className?: string;
}

const LinkRouter: FC<LinkRouterProps> = ({ route, children, className }) => {
    const routerStore = useRouterStore();
    return (
        <button className={className} onClick={() => {
            routerStore.setActive(route)
        }}>
            {children}
        </button>
    )
}

export default LinkRouter;
