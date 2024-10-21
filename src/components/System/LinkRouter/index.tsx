import { FC, ReactNode } from 'react';
import { PageRoutes, useRouterStore } from '../../../lib/store/router.store';

interface LinkRouterProps {
    route: PageRoutes;
    children?: ReactNode;
    className?: string;
}

const LinkRouter: FC<LinkRouterProps> = ({route, children, className}) => {
    const setPageActive = useRouterStore(state => state.setActive);
    return (
        <button className={className} onClick={() => setPageActive(route)}>
            {children}
        </button>
    )
}

export default LinkRouter;
